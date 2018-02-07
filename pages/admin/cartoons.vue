<template lang="pug">
	div
		h2 Мультики
		div
			h3 Добавить Мультики
			form(@submit.prevent="addCartoon" id="AddCartoon")
				div(class="form-group")
					label Название
					div
						input(
							:class="{'input': true, 'is-danger': errors.has('title') }"
							name="title"
							placeholder="Название" 
							v-model="cartoon.title" 
							v-validate="'min:20|required'"
						)
						div(v-show="errors.has('title')" class="help is-danger") {{ errors.first('title') }}
				div(class="form-group")
					label Видео
					div
						input(
							:class="{'input': true, 'is-danger': errors.has('video') }"
							name="video"
							v-validate="'url:https?|required'"
							placeholder="Ссылка на видео"
							v-model="cartoon.video"
							)
						div(v-show="errors.has('video')" class="help is-danger") {{ errors.first('video') }}
				div(class="form-group")
					label Автор
					div
						input(
							:class="{'input': true, 'is-danger': errors.has('author') }"
							name="author"
							placeholder="Автор" 
							v-validate="'required'"
							v-model="cartoon.author")
						div(v-show="errors.has('author')" class="help is-danger") {{ errors.first('author') }}
				div(class="form-group")
					label Год
					div
						input(
							:class="{'input': true, 'is-danger': errors.has('year') }"
							name="year"
							v-validate="'numeric|required'"
							placeholder="Год" 
							v-model="cartoon.year")
						div(v-show="errors.has('year')" class="help is-danger") {{ errors.first('year') }}
				div(class="form-group")
					label Тэги
					multiselect(
						v-model="preTags",
						:multiple="true",
						track-by="name"
						tag-placeholder="Add this as new tag",
						:taggable="true",
						@tag="addTag",
						label="name",
						selectLabel="Нажмите, чтобы добавить"
						selectedLabel="Выбрано"
						deselectLabel="Нажмите, чтобы удалить"
						:options="cartoonTagsArray")
				div(class="form-group")
					label Изображение
					div
						input(
							name="thumbnail"
							placeholder="Изображение"
							:class="{'input': true, 'is-danger': errors.has('thumbnail') }"
							v-validate="'url:https?|required'"
							v-model="cartoon.thumbnail")
						div(v-show="errors.has('thumbnail')" class="help is-danger") {{ errors.first('thumbnail') }}
						dropzone(
							id="customdropzone"
							ref="el" 
							:options="options" 
							:destroyDropzone="true" 
							@vdropzone-complete="imageUploaded"
							:include-styling="false")
							p(class="dz-message") Перетяните изображение сюда
				div(class="form-group")
					label Возрастная категория
					div
						select(
							v-model="cartoon.category"
							:class="{'input': true, 'is-danger': errors.has('category') }"
							v-validate="'required'"
							name="category"
							)
							option(v-for="(item, index) in cartoonCategoriesArray" :value="item._id" :key="index") {{ item.name }}
						div(v-show="errors.has('category')" class="help is-danger") {{ errors.first('category') }}
				div(class="form-group")
					label Описание
					div
						textarea(
							placeholder="Описание"
							:class="{'input': true, 'is-danger': errors.has('description') }"
							v-validate="'required'"
							name="description"
							v-model="cartoon.description"
							)
						div(v-show="errors.has('description')" class="help is-danger") {{ errors.first('description') }}
				div(class="form-group")
					label Глазами Ребенка
					div
						textarea(
							placeholder="Глазами ребенка"
							v-model="cartoon.unclear"
							:class="{'input': true, 'is-danger': errors.has('unclear') }"
							v-validate="'required'"
							name="unclear"
							)
						div(v-show="errors.has('unclear')" class="help is-danger") {{ errors.first('unclear') }}
				button(class="button") Добавить
</template>
<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import { mapState } from 'vuex'
import Multiselect from 'vue-multiselect'
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'
import axios from '~/plugins/axios'
import '~/assets/css/vue-select.css'
import slugifier from 'slug-generator'

Vue.use(VeeValidate)

export default {
	asyncData ({ store }) {
		return Promise.all([
			store.dispatch('getCartoonsCats'),
			store.dispatch('getCartoonsTags')
		])
	},
	data: () => ({
		preTags: [],
		cartoon: {
			title: '',
			video: '',
			year: null,
			tags: [],
			slug: '',
			author: '',
			thumbnail: '',
			category: '',
			description: '',
			unclear: ''
		},
		options: {
			url: '/upload',
			maxFiles: 1
		}
	}),
	mounted () {
		const instance = this.$refs.el.dropzone
		console.log(instance)
	},
	methods: {
		addTag (tag) {
			console.log(tag)
		},
		async addCartoon () {
			this.$validator.validateAll().then(async (result) => {
				if (result) {
					try {
						this.cartoon.slug = this.slugify
						this.cartoon.tags = this.preTags.map(item => item._id)
						const cartoon = await axios.post('/addcartoon', this.cartoon)
						console.log(cartoon)
						return
					} catch (e) {
						console.log(e)
					}
				}
				alert('Correct them errors!')
			})
		},
		imageUploaded (file) {
			this.cartoon.thumbnail = file.xhr.response
		}
	},
	computed: {
		slugify () {
			return slugifier(this.cartoon.title)
		},
		...mapState({
			cartoonCategoriesArray: 'cartoonCategoriesArray',
			cartoonCategoriesList: 'cartoonCategoriesList',
			cartoonTagsArray: 'cartoonTagsArray'
		})
	},
	components: {
		Dropzone,
		Multiselect
	}
}
</script>
<style lang="stylus" scoped>
.form-group
	margin 18px 0
	display flex
label
	display inline-block
	padding 10px
	width 150px
	font-size 14px
	font-weight 500
	font-family: Roboto
input, select, textarea
	width 250px
	background-color white
	border 2px solid #3b8070
	border-top none
	padding 12px
	font-size 14px
	font-family: Roboto
	letter-spacing 0.2px
	font-weight 500
	color #313131
	&::placeholder
		color #3b8070
		font-weight 500
	&.is-danger::placeholder
		border-color #D50000
		color #D50000
	&:focus
		outline none
	&.is-danger
		border-color #D50000
		color #D50000
textarea 
	min-height 100px
select option 
	padding 6px
#customdropzone
	border 2px dashed #3b8070
	margin 20px 0
.dz-message
	color #8c8c8c
	font-family: Roboto
.help.is-danger
	color #D50000
	font-size 12px
	font-weight 500
	margin-top: 6px;
</style>

