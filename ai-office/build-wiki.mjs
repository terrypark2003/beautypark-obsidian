#!/usr/bin/env node
/**
 * 02_AI_Wiki 의 문서를 ai-office/wiki.json 으로 묶는다.
 * 실행: node ai-office/build-wiki.mjs  (볼트 루트에서)
 * 위키를 수정한 뒤 이 스크립트를 다시 돌리고 커밋하면 사이트 직원들이 최신 위키를 참고한다.
 * (비서실장의 넣기 루프 마지막 단계에서 실행해 주는 것을 권장)
 */
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const aiOffice = join(root, 'ai-office');

function bundle(wikiDir){
  const out = {};
  (function walk(dir){
    for (const name of readdirSync(dir)){
      const p = join(dir, name);
      if (statSync(p).isDirectory()) walk(p);
      else if (name.endsWith('.md')) out[relative(wikiDir, p).replaceAll('\\', '/')] = readFileSync(p, 'utf8');
    }
  })(wikiDir);
  return out;
}

// 뷰티파크(병원): 02_AI_Wiki
const bp = bundle(join(root, '02_AI_Wiki'));
writeFileSync(join(aiOffice, 'wiki.json'), JSON.stringify(bp, null, 1), 'utf8');
console.log(`wiki.json (뷰티파크): 문서 ${Object.keys(bp).length}개`);

// 슬로보다(화장품 이커머스): ai-office/sloboda-wiki
const sb = bundle(join(aiOffice, 'sloboda-wiki'));
writeFileSync(join(aiOffice, 'wiki-sloboda.json'), JSON.stringify(sb, null, 1), 'utf8');
console.log(`wiki-sloboda.json (슬로보다): 문서 ${Object.keys(sb).length}개`);
