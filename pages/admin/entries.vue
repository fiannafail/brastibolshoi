<template lang="pug">
div
	h2 Полезности
	form
		div(class="form-group")
			label Название
			input(v-model="entry.title")
		div(class="form-group")
			label Содержание
			vue-editor(v-model="entry.content")
</template>
<script>
import { VueEditor } from 'vue2-editor'

export default {
	data: () => ({
		entry: {
			title: '',
			slug: '',
			thumbnail: '',
			content: '',
			category: ''
		}
	}),
	components: {
		VueEditor
	}
}
</script>
