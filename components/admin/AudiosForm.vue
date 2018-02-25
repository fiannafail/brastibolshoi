<template lang="pug">
div
	h2 Добавить аудио
	form(@submit.prevent="addAudio")
		div(class="form-group")
			label Название
			div
				input(
					:class="{'input': true, 'is-danger': errors.has('title') }"
					name="title"
					type="text"
					placeholder="Название" 
					v-model="audio.title" 
					v-validate="'min:10|required'"
				)
				div(v-show="errors.has('title')" class="help is-danger") {{ errors.first('title') }}
		div(class="form-group")
			label Категория
			div
				select(
					:class="{'input': true, 'is-danger': errors.has('category') }"
					name="category"
					v-model="audio.audiocategoriesId" 
					)
					option(disabled selected value="") Выберите категорию
					option(v-for="(item, index) in items" :key="index" :value="item.id") {{ item.name }}
				div(v-show="errors.has('category')" class="help is-danger") {{ errors.first('category') }}
		div(class="form-group")
			label Изображение
			div
				input(
					name="thumbnail"
					type="text"
					placeholder="Изображение"
					:class="{'input': true, 'is-danger': errors.has('thumbnail') }"
					v-validate="'url:https?|required'"
					v-model="audio.thumbnail")
				div(v-show="errors.has('thumbnail')" class="help is-danger") {{ errors.first('thumbnail') }}
				dropzone(
					id="customdropzone"
					:options="options"
					:destroyDropzone="true" 
					@vdropzone-complete="imageUploaded"
					:include-styling="false"
					)
		div(class="form-group")
			label Аудиозапись
			div
				input(
					name="audio"
					type="text"
					placeholder="Аудиозапись"
					:class="{'input': true, 'is-danger': errors.has('audio') }"
					v-validate="'required'"
					v-model="audio.audio")
				div(v-show="errors.has('audio')" class="help is-danger") {{ errors.first('audio') }}
				dropzone(
					id="customdropzone"
					:options="audioOptions"
					:destroyDropzone="true" 
					@vdropzone-complete="audioUploaded"
					:include-styling="false"
					)
		button(class="button") Добавить
</template>
<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import Dropzone from 'nuxt-dropzone'
import axios from '~/plugins/axios'

import 'nuxt-dropzone/dropzone.css'

Vue.use(VeeValidate)
export default {
	props: ['items'],
	data: () => ({
		audio: {
			title: null,
			audiocategoriesId: null,
			thumbnail: null,
			audio: null
		},
		audioOptions: {
			url: '/up',
			maxFiles: 1
		},
		options: {
			url: '/upload',
			maxFiles: 1
		}
	}),
	methods: {
		async addAudio () {
			try {
				const audio = await axios.post('/api/audios/addaudio', this.audio)
				console.log(audio)
			} catch (e) {
				console.log(e)
			}
		},
		audioUploaded (file) {
			this.audio.audio = file.xhr.response
		},
		imageUploaded (file) {
			this.audio.thumbnail = file.xhr.response
		}
	},
	components: {
		Dropzone
	}
}
</script>
<style lang="stylus" scoped>
@import "~assets/css/admin.styl"
.form-group
	margin 18px 0
	display flex
	span
		font-size 14px
		font-weight 500
		padding 0 10px
label
	display inline-block
	padding 10px
	width 150px
	font-size 14px
	font-weight 500
	font-family: Roboto
input[type="text"], select, textarea
	width 325px
	box-sizing border-box
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
	min-height 175px
select option 
	padding 6px
</style>
