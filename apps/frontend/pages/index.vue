<template>
    <div>
        <h1>{{ hello?.message }}</h1>
        <p v-if="userStore.fullName">Hello, {{ userStore.fullName }}!</p>
    </div>
</template>

<script setup lang="ts">
    const userStore = useUserStore();
    const { data: hello } = await useBackend<{ message: string }>('/hello');
</script>

<style scoped></style>