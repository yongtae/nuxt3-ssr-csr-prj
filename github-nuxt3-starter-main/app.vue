<template>
  <div>
    <!-- query 파라메터값 변경시 랜더링 적용(디폴트는 안됨) -->
    <NuxtPage :page-key="(route) => route.fullPath" />
  </div>
</template>

<script setup lang="ts">
import '@unocss/reset/tailwind-compat.css'
</script>
