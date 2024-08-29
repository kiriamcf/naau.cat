<script setup>
import { gsap } from 'gsap'
import { onMounted, reactive } from 'vue'
import Highlight from '~/components/other/Highlight.vue';

const tweened = reactive({number: 0})
const width = reactive({value: 1000})

onMounted(() => {
    width.value = window.innerWidth
    let timeline = gsap.timeline();

    timeline.to(tweened, { duration: 1.5, number: 100 });

    timeline.to('#overlay > *', {
        duration: 0.5,
        height: 0,
        stagger: {
            amount: 0.5
        },
        ease: 'power2.inOut'
    })

    timeline.to('#overlay', {
        display: 'none',
    })

    gsap.to('#percentage', { delay: 1.5, opacity: 0, duration: 1, ease: 'power4.out' });

    gsap.from('#hero > *', {
        delay: 1.5,
        duration: 1,
        y: 1000,
        stagger: {
            amount: 0.5
        },
        ease: 'power4.inOut'
    })

    gsap.from('#hero-desc', {
        delay: 2,
        duration: 1,
        y: 1000,
        ease: 'power4.inOut'
    })

    gsap.to('#header', {
        opacity: 1,
        delay: 2.2,
        duration: 1,
        ease: 'power4.inOut'
    })
})
</script>

<template>
    <div id="percentage" class="absolute bottom-4 right-6 text-7xl sm:text-9xl leading-none font-bold text-black z-20">
        <span>{{ tweened.number.toFixed() }}</span>
        <span>%</span>
    </div>

    <div id="overlay" class="fixed w-screen h-screen z-10 flex">
        <div class="w-[10vw] h-[105vh] bg-white" :class="{'w-[20vw]': width.value < 640}"></div>
        <div class="w-[10vw] h-[105vh] bg-white" :class="{'w-[20vw]': width.value < 640}"></div>
        <div class="w-[10vw] h-[105vh] bg-white" :class="{'w-[20vw]': width.value < 640}"></div>
        <div class="w-[10vw] h-[105vh] bg-white" :class="{'w-[20vw]': width.value < 640}"></div>
        <div class="w-[10vw] h-[105vh] bg-white" :class="{'w-[20vw]': width.value < 640}"></div>
        <div class="w-[10vw] h-[105vh] bg-white" :class="{'hidden': width.value < 640}"></div>
        <div class="w-[10vw] h-[105vh] bg-white" :class="{'hidden': width.value < 640}"></div>
        <div class="w-[10vw] h-[105vh] bg-white" :class="{'hidden': width.value < 640}"></div>
        <div class="w-[10vw] h-[105vh] bg-white" :class="{'hidden': width.value < 640}"></div>
        <div class="w-[10vw] h-[105vh] bg-white" :class="{'hidden': width.value < 640}"></div>
    </div>

    <NuxtLayout>
        <div id="hero" class="text-[23vw] font-bold leading-none flex items-center justify-center pointer-events-none">
            <div>N</div>
            <div>a</div>
            <div>a</div>
            <div>u</div>
            <div>.</div>
        </div>
        <p id="hero-desc" class="text-center text-2xl my-8">Professional <Highlight>League of Legends</Highlight> player</p>
    </NuxtLayout>
</template>
