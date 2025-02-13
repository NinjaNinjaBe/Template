<script setup>
const resp = await useBackend('/hello');
console.log(resp);
console.log(resp.data.value);
const hello = ref(resp.data.value);
// const bs = useRuntimeConfig().public.backendOrigin;
// const resp = await useFetch('/hello', {
//   baseURL: bs,
//   method: 'get',
//   $fetch: useNuxtApp().$api,
// })
// console.log(resp.data.value)
// const hello = ref(resp.data.value);
</script>

<template>
  <div>
    <!-- <NuxtRouteAnnouncer /> -->
    <p>{{ hello }}</p>
  </div>
</template>