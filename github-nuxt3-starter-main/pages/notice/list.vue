<template>
  <div>
    공지사항 조회 페이지<br /><br />
    dd 변수값: {{ dd }}<br /><br />
    공지사항 조회 컴포넌트:<br />
    <NoticeList />
  </div>
</template>

<script lang="ts" setup>
let dd = '123123'

// 사용안됨;;; 이유확인 필요
const route = useRoute()
const router = useRouter()
</script>

<style scoped></style>
