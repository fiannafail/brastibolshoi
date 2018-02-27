<template lang="pug">
div(class="section-container")
	Tags(class="tags-container" :items="cartoonTagsArray")
	Categories(class="categories-container" :items="cartoonCategoriesArray")
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
							type="text"
							placeholder="Название" 
							v-model="cartoon.title" 
							v-validate="'min:20|required'"
						)
						div(v-show="errors.has('title')" class="help is-danger") {{ errors.first('title') }}
				div(class="form-group")
					label Родительская серия многосерийного мультика?
					div
						span Да
						input(type="radio" :value="true" name="isMultiseries" v-model="cartoon.isMultiseries")
						span Нет
						input(type="radio" :value="false" name="isMultiseries" v-model="cartoon.isMultiseries")
				div(
					v-if="cartoon.isMultiseries === false"
					)
					label Мультик-родитель
					select(v-model="cartoon.parentTitleId")
						option(disabled selected value="") Если нет, то оставить пустым
						option(v-for="(item, index) in cartoonMultiseries" :key="index" :value="item._id") {{ item.title }}
				div(class="form-group")
					label Видео
					div
						input(
							:class="{'input': true, 'is-danger': errors.has('video') }"
							name="video"
							type="text"
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
							type="text"
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
							type="text"
							v-validate="'numeric|required'"
							placeholder="Год" 
							v-model="cartoon.year")
						div(v-show="errors.has('year')" class="help is-danger") {{ errors.first('year') }}
				div(class="form-group")
					label Тэги
					multiselect(
						v-model="cartoon.tags",
						:multiple="true",
						track-by="name"
						tag-placeholder="Add this as new tag",
						:taggable="true",
						@tag="addTag",
						label="name",
						selectLabel="Добавить"
						selectedLabel="Выбрано"
						deselectLabel="Удалить"
						:options="cartoonTagsArray")
				div(class="form-group")
					label Изображение
					div
						input(
							name="thumbnail"
							type="text"
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
							v-model="cartoon.categoriesId"
							:class="{'input': true, 'is-danger': errors.has('category') }"
							v-validate="'required'"
							name="category"
							)
							option(v-for="(item, index) in cartoonCategoriesArray" :value="item.categoriesId" :key="index") {{ item.name }}
						div(v-show="errors.has('category')" class="help is-danger") {{ errors.first('category') }}
				div(class="form-group")
					label Описание
					div
						textarea(
							placeholder="Описание"
							type="text"
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
							type="text"
							:class="{'input': true, 'is-danger': errors.has('unclear') }"
							v-validate="'required'"
							name="unclear"
							)
						div(v-show="errors.has('unclear')" class="help is-danger") {{ errors.first('unclear') }}
				div(v-if="isEditing")
					button(class="button") Сохранить
					button(class="button" @click.prevent="cancel") Прервать редактирование
				button(class="button" v-else) Добавить
	aside(class="aside-list")
		h2 Список мультиков
		ItemsList(
			@editItem="setEditingItem"
			:items="ContentItems"
			)
</template>
<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import { mapState } from 'vuex'
import Multiselect from 'vue-multiselect'
import Dropzone from 'nuxt-dropzone'
import uniqid from 'uniqid'
import axios from '~/plugins/axios'

import eventBus from '../../components/event-bus'
import ItemsList from '../../components/admin/ItemsList'
import Tags from '../../components/admin/Tags'
import Categories from '../../components/admin/Categories'

import '~/assets/css/vue-select.css'
import 'vue2-animate/dist/vue2-animate.min.css'
import 'nuxt-dropzone/dropzone.css'

Vue.use(VeeValidate)

export default {
	fetch ({ store, route }) {
		console.log(route)
		return Promise.all([
			store.dispatch('getcartoonsCats'),
			store.dispatch('getCartoonsTags'),
			store.dispatch('getMultiseries'),
			store.dispatch('getСartoons')
		])
	},
	data: () => ({
		preTags: [],
		isEditing: false,
		cartoon: {
			cartoonId: uniqid(),
			title: '',
			isMultiseries: false,
			parentTitleId: '',
			video: '',
			year: null,
			tags: [],
			author: '',
			thumbnail: '',
			categoriesId: '',
			description: '',
			unclear: ''
		},
		options: {
			url: '/upload',
			maxFiles: 1
		}
	}),
	notifications: {
		showLoginSuccess: {
			title: 'Пост успешно добавлен!',
			message: 'Заполнены все поля',
			type: 'success'
		},
		showLoginError: {
			title: 'Ошибка отправки данных',
			message: 'Заполнены не все поля',
			type: 'error'
		}
	},
	mounted () {
		const instance = this.$refs.el.dropzone
		console.log(instance)
		eventBus.$on('close-editing', payload => {
			this.isEditing = payload
			this.cancel()
		})
	},
	methods: {
		cancel () {
			this.cartoon = this.$options.data().cartoon
		},
		setEditingItem (item) {
			eventBus.$emit('show-editing')
			this.isEditing = true
			this.cartoon = item
			console.log(item)
		},
		addTag (newTag) {
			const tag = {
				name: newTag
			}
			this.cartoonTagsArray.push(tag)
			this.cartoon.tags.push(tag)
		},
		async addCartoon () {
			this.$validator.validateAll().then(async (result) => {
				if (result) {
					try {
						await axios.post('/add', this.cartoon)
						return this.showLoginSuccess()
					} catch (e) {
						console.log(e)
					}
				}
				this.showLoginError()
			})
		},
		imageUploaded (file) {
			this.cartoon.thumbnail = file.xhr.response
		},
		cleanForm () {
			this.cartoon = null
		}
	},
	computed: {
		...mapState({
			ContentItems: 'cartoons',
			cartoonCategoriesArray: 'cartoonCategoriesArray',
			cartoonCategoriesList: 'cartoonCategoriesList',
			cartoonTagsArray: 'cartoonTagsArray',
			cartoonMultiseries: 'cartoonMultiseries'
		})
	},
	components: {
		Dropzone,
		Multiselect,
		ItemsList,
		Tags,
		Categories
	}
}
</script>
<style lang="stylus" scoped>
@import "~assets/css/admin.styl"

.tags-container, .categories-container
	width 50%
.section-container
	display flex
	flex-wrap: wrap
.dz-message
	color #8c8c8c
	font-family: Roboto
</style>

