// import type { NitroFetchOptions } from 'nitropack/types';

// export async function useBackend(
//     url: string,
//     options?: NitroFetchOptions<string, "options" | "get" | "head" | "patch" | "post" | "put" | "delete" | "connect" | "trace">,
// ) {
//     return await useAsyncData(url, async () => await useNuxtApp().$api(url, options));
// }

import type { UseFetchOptions } from 'nuxt/app';

export function useBackend<T>(
    url: string | (() => string),
    options?: UseFetchOptions<T>,
) {
    return useFetch(url, {
        ...options,
        $fetch: useNuxtApp().$api,
    })
}
