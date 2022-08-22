<script setup lang="ts">
import { withDefaults, ref } from 'vue'
import { IconSource } from '.'

export interface Props {
	src: IconSource
	size?: string
	theme?: string
}

const props = withDefaults(defineProps<Props>(), {
	size: '100%',
	theme: 'default'
})

const data = ref(props.src?.[props.theme] ?? props.src.default)
</script>

<template>
	<svg xmlns="http://www.w3.org/2000/svg" :width="props.size" :height="props.size" v-bind="data.a">
		<path v-for="path of data?.path ?? []" v-bind="path"></path>
		<rect v-for="rect of data?.rect ?? []" v-bind="rect"></rect>
		<circle v-for="circle of data?.circle ?? []" v-bind="circle"></circle>
		<polygon v-for="polygon of data?.polygon ?? []" v-bind="polygon"></polygon>
		<polyline v-for="polyline of data?.polyline ?? []" v-bind="polyline"></polyline>
		<line v-for="line of data?.line ?? []" v-bind="line"></line>
	</svg>
</template>
