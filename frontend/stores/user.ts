export const useUserStore = defineStore('user', () => {
    // State
    const firstName = ref('Eduardo')
    const lastName = ref('Sanchez')


    // Getters
    const fullName = computed(() => `${firstName.value} ${lastName.value}`)

    // Actions
    function updateFirstName(newFirstName: string) {
        firstName.value = newFirstName
    }

    function updateLastName(newLastName: string) {
        lastName.value = newLastName
    }

    return {
        firstName,
        lastName,
        fullName,
        updateFirstName,
        updateLastName,
    }
});