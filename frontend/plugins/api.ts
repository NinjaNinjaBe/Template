export default defineNuxtPlugin(async () => {
    const runtimeConfig = useRuntimeConfig();
    const backendOrigin = runtimeConfig.public.backendOrigin;
    // const authStore = useAuthStore();

    const $api = $fetch.create({
        baseURL: backendOrigin as string,
        async onRequest({ options }: { options: any }) {
            options.headers = {
                ...options.headers,
                Authorization:`Bearer hallo`
                // TODO
                // Authorization: authStore.token ? `Bearer ${authStore.token}` : ''
            };
        },
        parseResponse: JSON.parse
    });

    return {
        provide: {
            api: $api
        }
    }
});
