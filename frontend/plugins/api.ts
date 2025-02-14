export default defineNuxtPlugin(async () => {
    const runtimeConfig = useRuntimeConfig();
    const backendOrigin = runtimeConfig.public.backendOrigin;
    // const authStore = useAuthStore();
    console.log('backendOrigin', backendOrigin);

    const $api = $fetch.create({
        baseURL: backendOrigin as string,
        async onRequest({ options }: { options: any }) {
            options.headers = {
                ...options.headers,
                Authorization: `Bearer hallo`
                // TODO
                // Authorization: authStore.token ? `Bearer ${authStore.token}` : ''
            };
        },
        async onResponseError({ response }) {
            // TODO: log error
            console.error(response);
        },
        parseResponse: JSON.parse,
    });

    return {
        provide: {
            api: $api
        }
    }
});
