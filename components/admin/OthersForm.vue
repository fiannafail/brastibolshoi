<template lang="pug">
div
	h2 Полезности
	form(@submit.prevent="add")
		div(class="form-group")
			label Название
			input(v-model="other.title" type="text" placeholder="Название")
		div(class="form-group")
			label Категория
			select(v-model="other.otherscategoriesId")
				option(disabled selected value="") Выберите категорию
				option(v-for="(item, index) in categories" :key="index" :value="item.id") {{ item.name }}
		div(class="form-group")
			label Изображение
			div
				input(
					name="thumbnail"
					type="text"
					placeholder="Изображение"
					:class="{'input': true, 'is-danger': errors.has('thumbnail') }"
					v-validate="'url:https?|required'"
					v-model="other.thumbnail")
				div(v-show="errors.has('thumbnail')" class="help is-danger") {{ errors.first('thumbnail') }}
				dropzone(
					id="customdropzone"
					:options="options"
					:destroyDropzone="true" 
					@vdropzone-complete="imageUploaded"
					:include-styling="false"
					)
		div(class="form-group")
			div
				h3 Содержание
				vue-editor(v-model="other.content")
		button(class="button") Добавить
</template>
<script>
import Vue from 'vue'
import Dropzone from 'nuxt-dropzone'
import VeeValidate from 'vee-validate'
import axios from '~/plugins/axios'
Vue.use(VeeValidate)
let VueEditor
if (process.browser) {
	VueEditor = require('vue2-editor').VueEditor
}
import 'nuxt-dropzone/dropzone.css'
export default {
	methods: {
		imageUploaded (file) {
			this.other.thumbnail = file.xhr.response
		},
		async add () {
			try {
				const other = await axios.post('/api/others/addother', this.other)
				console.log(other)
			} catch (e) {
				console.log(e)
			}
		}
	},
	data: () => ({
		other: {
			title: '',
			slug: '',
			thumbnail: '',
			content: '',
			otherscategoriesId: ''
		},
		options: {
			url: '/upload',
			maxFiles: 1
		}
	}),
	components: {
		VueEditor,
		Dropzone
	},
	props: ['categories']
}
</script>
<style lang="stylus" scoped>
@import "~assets/css/admin.styl"
.quillWrapper
	width: 670px;
	padding-bottom: 10px
</style>
