<script setup>
import { reactive, onMounted, onUnmounted } from 'vue'
const props = defineProps(['url', 'text', 'icon'])

const width = reactive({value: 0})

const handleResize = () => {
    width.value = window.innerWidth
}

onMounted(() => {
    window.addEventListener('resize', handleResize)

    handleResize()
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})
</script>

<template>
    <a :href="props.url" 
        class="text-white py-1 px-2 rounded hover:bg-white hover:text-background transition-all duration-300"
        :class="{'!p-0 !bg-transparent': width.value < 640}">
        <template v-if="width.value > 640">
            {{ props.text }}
        </template>
        <template v-else>
            <Icon :name="props.icon" class="size-5" />
        </template>
    </a>
</template>