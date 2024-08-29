<script setup>
import Header from '~/components/sections/Header.vue';
import { onMounted } from 'vue'
import Lenis from 'lenis'

onMounted(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {})

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
})
</script>

<template>
    <div class="min-h-screen bg-background text-white">
        <Header />
        <main class="z-30">
            <slot></slot>
        </main>
    </div>
</template>