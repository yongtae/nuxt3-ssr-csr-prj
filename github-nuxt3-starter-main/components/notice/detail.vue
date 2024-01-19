<template>
  <div>파일명: components/notice/detail.vue</div>
  <div>ssr+rest api기반 : {{ ssrApiNoticeDetailResult }}</div>
  <br /><br />
  <div>csr+rest api기반 : {{ resApiNoticeDetailResult }}</div>
</template>

<script lang="ts" setup>
let noticeParam = {
  noticeIdx: '34'
}
let ssrApiNoticeDetailResult = ref({})

// ssr 기반, res api(api서버 호출) 셋팅
const ssrApiNoticeDetailSub = () => {
  return $fetch('/api/notice/detail', {
    params: noticeParam
  })
}
const ssrApiNoticeDetail = await useAsyncData('/api/notice/detail', () => {
  return ssrApiNoticeDetailSub()
})
ssrApiNoticeDetailResult.value = ssrApiNoticeDetail

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// csr 작업, res api(api 서버 호출) 셋팅
let resApiNoticeDetailResult = ref({})
const resApiNoticeDetail = () => {
  $fetch('/http_api_host/api/notice/detail', {
    params: {
      noticeIdx: '77'
    }
  }).then((res: any = {}) => {
    resApiNoticeDetailResult.value = res
    console.log('resApiNoticeDetailResult 응답값--', res)
  })
}
// resApiNoticeDetail()
</script>

<style scoped></style>
