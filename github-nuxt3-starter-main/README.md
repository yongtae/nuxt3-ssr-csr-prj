# nuxt3 기반 샘플프로젝트(ssr,csr 기능 확인)

      [완] nuxt3 기반 샘플프로젝트(ssr,csr 기능 확인) 생성
      주요파일
      github-nuxt3-starter-main 프로젝트
      apiserver 프로젝트-> 테스트용도 백엔드서버
      github-nuxt3-starter-main/pages/notice/_
      github-nuxt3-starter-main/components/notice/_
      github-nuxt3-starter-main/server/api/notice/\*

    	주요내용
    		[완] 테스트주소
    			http://localhost:6636/notice/list?page=22
    			http://localhost:6636/notice/detail?idx=1

    		[완] 공지사항 조회/상세조회 ssr 적용(seo 대응, 페이지로 접속시 html적용 확인)
    			[완] ssr에서 server api 적용
    				참고자료
    					https://analogcode.tistory.com/9
    			[완] /notice/list?page=1, page=2 url로 접속시 html적용 확인
    				브라우저에서 url로 직접이동시, 개발자도구>network탭에서
    				html소스에 적용된값으로 확인
    			[완] query 파라메터 변경시, router 기능 동작 셋팅
    				백키 이슈도 없음
    				<NuxtPage :page-key="route => route.fullPath" /> -> 소스 적용
    				https://pilot376.tistory.com/58
    				https://nuxt.com/docs/api/components/nuxt-page
    			[완] 유니버셜랜더링(백엔드에서 처리되고, 완료된 html내용 확인)

    		[완] 공지사항 조회 csr 적용
    				공지사항 조회
    					/notice/list
    		[완] github의 참고프로젝트로 프로젝트 생성(폴더 구조 생성)

    	사전환경
    		os: window11
    		nodejs설치: node-v20.11.0-win-x64

    	주요명령어
    		cd C:\cdckyt\_prj_hana_vscode_portable\hana_framework_source\workspaces\nuxt3_boilerplate
    		npm install
    		npm run dev

    	참고내용
    		github의 리포지터리 클론해서 프로젝트 구조 생성


    	참고파일
    		https://github.com/nuxtbase/nuxt3-starter
    		https://nuxt.com/docs/api/commands/init
    		https://taenami.tistory.com/138
    		https://github.com/c-owner/nuxt3-bootstrap-starter
    		https://nuxt.com/docs/guide/directory-structure/assets, -> nuxt3 기반/프로젝트 폴더 구조
    		https://jongmin4943.tistory.com/entry/Nuxt3-fetch-useAsyncData-useFetch-%EC%9D%98-%EC%B0%A8%EC%9D%B4

# Nuxt 3 Starter

> 💚 A Better Nuxt 3 starter template

## Preview

<div>
  <a href="https://stackblitz.com/github/nuxtbase/nuxt3-starter" rel="nofollow" target="_blank"><img src="https://camo.githubusercontent.com/bf5c9492905b6d3b558552de2c848c7cce2e0a0f0ff922967115543de9441522/68747470733a2f2f646576656c6f7065722e737461636b626c69747a2e636f6d2f696d672f6f70656e5f696e5f737461636b626c69747a2e737667" alt="" data-canonical-src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" style="max-width: 100%;"></a>
</div>

## Features

- 🎨 [@unocss/nuxt](https://unocss.dev/integrations/nuxt) - UnoCSS Instant On-demand Atomic CSS Engine
- 🤹 [unplugin-icons](https://github.com/antfu/unplugin-icons) - Use icons from any iconsets
- 🍍 [@pinia/nuxt](https://pinia.esm.dev/ssr/nuxt.html) - Using Pinia with Nuxt.js 3
- 🛠️ [@vueuse/nuxt3](https://vueuse.org/nuxt/readme.html#vueuse-nuxt) - This is an add-on of VueUse, which provides better Nuxt integration auto-import capabilities.

## Use the Template

### GitHub Template

[create a repo from this template on GitHub](https://github.com/xiaoluoboding/nuxt3-starter/generate)

### Clone to local

```bash
$> npx nuxi init -t nuxtbase/nuxt3-starter my-nuxt3-app
$> 🎉  Another rad Nuxt project just made! Next steps:
$>
$>    📁  `cd my-nuxt3-app`
$>
$>    💿  Install dependencies with `npm install` or `yarn install`
$>
$>    🚀  Start development server with `npm run dev` or `yarn dev`
```

## Setup

### Installation

Make sure to install the dependencies

```bash
yarn install
```

### Development

Start the development server on http://localhost:3088

```bash
yarn dev
```

### Production

Build the application for production:

```bash
yarn build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).

## Related Template

- [vue3-starter](https://github.com/xiaoluoboding/vue3-starter) - 🖖 A Better Vue 3 Starter Template，generate by `create-vue`.

## License

MIT [@xiaoluoboding](https://github.com/xiaoluoboding)
