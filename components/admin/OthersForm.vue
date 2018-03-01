<template lang="pug">
div
	h2 Полезности
	no-ssr
		form(@submit.prevent="add")
			div(class="form-group")
				label Название
				div
					input(
						:class="{'input': true, 'is-danger': errors.has('title') }"
						name="title"
						type="text"
						placeholder="Название" 
						v-model="other.title" 
						v-validate="'min:20|required'"
					)
					div(v-show="errors.has('title')" class="help is-danger") {{ errors.first('title') }}
			div(class="form-group")
				label Категория
				select(
					v-model="other.otherscategoriesId"
					v-validate="'not_in:1|required'"
					name="category"
					:class="{'input': true, 'is-danger': errors.has('category') }"
					)
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
					div
						h3 Содержание
						vue-editor(
							v-validate="'min:15|required'"
							:class="{'input': true, 'is-danger': errors.has('content') }"
							data-vv-value-path="value"
							data-vv-name="content"
							v-model="other.content"
							)
					div(style="width: 100%")
						span(v-show="errors.has('content')" class="help is-danger") {{ errors.first('content') }}
			div
				button(class="button" v-if="!isEditing") Добавить
				button(class="button" @click.prevent="editDone" v-else) Изменить
</template>
<script>
import Vue from 'vue'
import Dropzone from 'nuxt-dropzone'
import VeeValidate from 'vee-validate'
import axios from '~/plugins/axios'
import eventBus from '../../components/event-bus'
Vue.use(VeeValidate)
let VueEditor
if (process.browser) {
	VueEditor = require('vue2-editor').VueEditor
}
import 'nuxt-dropzone/dropzone.css'
import 'vue2-animate/dist/vue2-animate.min.css'
export default {
	methods: {
		async editDone () {
			try {
				const other = await axios.patch('/api/others/updateother', this.other)
				console.log(other)
			} catch (e) {
				console.log(e)
			}
		},
		imageUploaded (file) {
			this.other.thumbnail = file.xhr.response
		},
		async add () {
			const result = await this.$validator.validateAll()
			if (!result) return this.addingFailure()
			try {
				const res = await axios.post('/api/others/addother', this.other)
				if (res.status === 200) {
					this.addingSuccess()
				}
			} catch (e) {
				console.log(e)
			}
		},
		cancel () {
			this.other = this.$options.data().other
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
		isEditing: false,
		options: {
			url: '/upload',
			maxFiles: 1
		}
	}),
	mounted () {
		eventBus.$on('other-editing', (item) => {
			this.other = item
			this.isEditing = true
		})
		eventBus.$on('close-other-edit', (payload) => {
			this.cancel()
			this.isEditing = false
		})
	},
	notifications: {
		addingSuccess: {
			title: 'Пост успешно добавлен!',
			message: '',
			type: 'success'
		},
		addingFailure: {
			title: 'При проверке найдены ошибки',
			message: 'Проверьте выделенные поля',
			type: 'error'
		}
	},
	components: {
		VueEditor,
		Dropzone
	},
	props: ['categories', 'item']
}
</script>
<style lang="stylus" scoped>
@import "~assets/css/admin.styl"
.quillWrapper
	width: 670px;
	padding-bottom: 0
	border: transparent 2px solid
	&.is-danger
		border: $red-color 2px solid
h2
	margin-top: 0
</style>
