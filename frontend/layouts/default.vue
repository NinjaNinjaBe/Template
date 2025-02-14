<template>
    <div>
        <header>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </header>

        <main>
            <slot />
        </main>

        <footer>
            <p>&copy; {{ currentYear }}</p>
        </footer>
    </div>
</template>

<script setup lang="ts">

const currentYear = new Date().getFullYear();

</script>