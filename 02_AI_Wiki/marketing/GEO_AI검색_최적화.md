---
status: draft
updated: 2026-07-04
owner: AI사서
source: [01_Raw_Data/01_마케팅팀/마하닥AI_경영분석기_기능분석.md]
tags: [marketing, GEO, AI검색]
---

# GEO · AI 검색 최적화

한 줄: **ChatGPT·Claude·Perplexity가 우리 병원을 "인용"하게 만드는 최적화. SEO의 AI 버전.**

> 출처: 마하닥AI 경영 분석기 방법론 ([[마하닥AI_경영분석기_기능분석]]).
> ⚠️ 국내 병원은 아직 **네이버 플레이스가 신환에 더 직접적**([[네이버_플레이스_최적화]]). GEO는 미래 대비 체크리스트로 병행.

## 홈페이지 AI 최적화 (기술 환경 점검)

| 항목 | 무엇 | 왜 |
|---|---|---|
| **robots.txt** | AI 봇(GPTBot·ClaudeBot·PerplexityBot) 크롤링 허용 여부 | 차단돼 있으면 AI가 아예 못 읽음 |
| **llms.txt** | AI에게 사이트 핵심 정보를 직접 전달하는 파일 (robots.txt의 AI 버전) | AI 인용률↑ |
| **JSON-LD** | 구조화 데이터(name·description 등) | AI 인용 핵심 신호 |
| **sitemap.xml** | 페이지 목록 | 크롤링 완전성 |
| **Meta Tags** | `<title>`·description | 검색결과 노출 직결 |

## 블로그 글 EEAT (콘텐츠 신뢰도)

AI가 글을 "신뢰할 출처"로 인용하려면:
- **Article 스키마** 부착
- **저자 정보**(전문의 실명·경력) 노출 → 권위(Authoritativeness)
- **충분한 콘텐츠** 분량과 깊이
- **FAQ 구조** (질문-답변 형식)

EEAT = Experience(경험)·Expertise(전문성)·Authoritativeness(권위)·Trust(신뢰).

## 실행 체크리스트

- [ ] robots.txt에서 AI 봇 허용 확인
- [ ] llms.txt 작성(병원 소개·진료과목·핵심 페이지)
- [ ] 주요 페이지 JSON-LD(MedicalClinic/LocalBusiness) 삽입
- [ ] 블로그 글에 저자(전문의) 정보 + FAQ 섹션 → [[VSL_공식]]·[[콘텐츠_기획보드]]와 연계
- [ ] ⚠️ 모든 콘텐츠 [[의료광고법_가이드]] 검수 후 발행

## 관련

[[네이버_플레이스_최적화]] · [[온라인_마케팅_운영]] · [[contents_MOC]]
