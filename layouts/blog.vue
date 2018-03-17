<template lang="pug">
div
	Header
	nuxt
	Footer
</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
	components: {
		Header,
		Footer
	}
}
</script>
<style lang="stylus">
@import "~assets/css/app.styl"
.my-scrollbar
    background-color transparent
    max-height 440px
    padding 60px

.vue-scrollbar__scrollbar-vertical
    width 12px

.vue-scrollbar__scrollbar-vertical .scrollbar, .vue-scrollbar__scrollbar-horizontal .scrollbar
    background-color #fa8925
    border-radius 8px
    width 12px
</style>
