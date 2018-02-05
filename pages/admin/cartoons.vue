<template lang="pug">
	div
		h2 Мультики
		div
			h3 Добавить Мультики
			form(@submit="addCartoon")
				input(placeholder="Название" v-model="cartoon.name")
				input(placeholder="Ссылка на видео" v-model="cartoon.url")
				dropzone(id="foo" ref="el" :options="options" :destroyDropzone="true")
				select(v-model="cartoon.category")
					option(v-for="(item, index) in cartoonCategories" :key="index") {{ item.name }}
				input(placeholder="Описание" v-model="cartoon.description")
				input(placeholder="Глаззами ребенка" v-model="cartoon.basics" textarea)
				button(class="button") Добавить
</template>
<script>
import { mapState } from 'vuex'
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'
import axios from '~/plugins/axios'

export default {
	asyncData ({ store }) {
		return store.dispatch('getCartoonsCats')
	},
	data: () => ({
		cartoon: {
			name: '',
			url: '',
			category: '',
			description: '',
			basics: ''
		},
		options: {
			url: '/upload'
		}
	}),
	mounted () {
		const instance = this.$refs.el.dropzone
		console.log(instance)
	},
	methods: {
		async addCartoon () {
			try {
				const cartoon = await axios.post('/addcartoon', this.cartoon)
				console.log(cartoon)
			} catch (e) {
				console.log(e)
			}
		}
	},
	computed: mapState({
		cartoonCategories: 'cartoonCategories'
	}),
	components: {
		Dropzone
	}
}
</script>
