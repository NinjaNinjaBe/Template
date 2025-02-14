<template>
    <div>
        <h1>{{ hello?.message }}</h1>
    </div>
</template>

<script setup lang="ts">
    const { data: hello } = await useBackend<{ message: string }>('/hello');
</script>

<style scoped></style>