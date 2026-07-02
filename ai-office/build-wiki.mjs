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
const wikiDir = join(root, '02_AI_Wiki');
const out = {};

function walk(dir){
  for (const name of readdirSync(dir)){
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith('.md')){
      const rel = relative(wikiDir, p).replaceAll('\\', '/');
      out[rel] = readFileSync(p, 'utf8');
    }
  }
}
walk(wikiDir);

writeFileSync(join(root, 'ai-office', 'wiki.json'), JSON.stringify(out, null, 1), 'utf8');
console.log(`wiki.json 생성: 문서 ${Object.keys(out).length}개`);
