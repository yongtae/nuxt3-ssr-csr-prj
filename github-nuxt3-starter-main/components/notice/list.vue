<template>
  <div>파일명: components/notice/list.vue</div>
  <div>ssr기반 noticeListData값 : {{ noticeListData }}</div>
  <div>
    <button @click="btnNextPage">nextPage 버튼</button>
  </div>
  <br />
  <div>
    csr+rest api기반 resApiNoticeListResult값 : {{ resApiNoticeListResult
    }}<br />
    <button @click="btnNoticeList">api 호출 버튼</button>
  </div>
  <!-- <div>helloObjData값 : {{ helloObjData }}</div> -->
</template>

<script lang="ts" setup>
// rest api기반 공지사항 조회 url = http://localhost:3000/api/notice/list
const route = useRoute()
const router = useRouter()

// ssr 작업, fetch data from server/api
let noticeParam = {
  page: '1'
}
let noticeListData = ref({})
const queryParamSet = () => {
  if (route.query.page != undefined) {
    noticeParam.page = route.query.page
  }
}
const apiNoticeListSub = () => {
  queryParamSet()
  // console.log('route.query.page--', route.query.page)
  // console.log('noticeParam.page--', noticeParam.page)
  return $fetch('/api/notice/list', {
    params: noticeParam
  })
}
const apiNoticeList = await useAsyncData('/api/notice/list', () => {
  return apiNoticeListSub()
})
noticeListData.value = apiNoticeList.data //ssr 데이터 셋팅

const btnNextPage = () => {
  queryParamSet()
  noticeParam.page = parseInt(noticeParam.page) + 1
  router.push({ path: '/notice/list', query: noticeParam })
}

// console.log('apiNoticeList:', apiNoticeList)
// console.log('noticeListData:', noticeListData.value)

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// csr 작업, res api(api 서버 호출) 셋팅
let resApiNoticeListResult = ref({})
const resApiNoticeList = () => {
  // '/http_api_host' -> nuxt.config.ts 파일에서 프록시로 셋팅
  $fetch('/http_api_host/api/notice/list', {
    params: {
      name: 'world'
    }
  }).then((res: any = {}) => {
    resApiNoticeListResult.value = res

    console.log('resApiNoticeList 응답값--', res)
  })
}
const btnNoticeList = () => {
  console.log('btnNoticeList 버튼 실행')
  // resApiNoticeListResult.value = { name: '123213' }
  resApiNoticeList()
}
// const helloObj = await useAsyncData('/api/hello', () => {
//   return $fetch('/api/hello', {
//     params: {
//       name: 'world'
//     }
//   })
// })
// const helloObjData = helloObj.data.value.data
// console.log('helloObj:', helloObj.data.value.data)
</script>

<style scoped></style>
