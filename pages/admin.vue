<template lang="pug">
div
	h1(class="header-bar") Admin Page
	div(class="container")
		Aside
		main(class="main-container")
			nuxt-child
			form(action="/up" method="post" enctype="multipart/form-data")
				input(type="file" name="file" id="fileToUpload")
				input(type="submit" value="Upload Image" name="submit")
</template>
<script>
import Aside from '../components/admin/Aside'

export default {
	head () {
		return {
			title: 'Admin Page'
		}
	},
	components: {
		Aside
	}
}
</script>
<style lang="stylus" scoped>
aside-width = 275px
h1
	font-weight 400
	font-size 24px
	padding 8px
.header-bar 
	box-shadow 0 0 20px rgba(0,0,0,0.3)
	margin 0
	padding 16px
.main-container
	position relative
	left aside-width
	padding 20px
.container
	display flex
</style>

