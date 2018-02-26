<template lang="pug">
	div
		div(v-for="(item, index) in items" class="audio")
			div(class="thumbnail")
				img(:src="item.thumbnail")
			div(class="content")
				p(class="category") {{ item.audiocategory.name }}
				h2 {{ item.title }}
				no-ssr
					vue-audio(:file="'/' + item.audio")
</template>
<script>
import VueAudio from 'vue-audio'

export default {
	props: ['items'],
	components: {
		'vue-audio': VueAudio
	}
}
</script>
<style lang="stylus">
.audio
	display flex
.vue-sound__player
	display flex
	align-items: center
	justify-content: space-between
.vue-sound__playback-time-wrapper
	background rgba(89, 86, 83, 0.5) !important
	width calc(100% - 100px) !important
.vue-sound-wrapper .vue-sound__player .vue-sound__extern-wrapper
	display flex !important
	align-items center
.vue-sound-wrapper .vue-sound__player .vue-sound__playback-time-wrapper .vue-sound__playback-time-indicator
	background #fa8925
.thumbnail
	width 170px
	height 160px

	img
		border-radius: 100%
		width 100%
		height 100%
.content
	width calc(100% - 160px)
	padding-left: 60px
	color #595653
		
.icon-stop2, .icon-spinner11, .icon-download, .volume-toggle, .vue-sound__playback-time-current, .vue-sound__playback-time-separator
	display none !important
.icon-play3:before, .icon-pause2:before, .icon-volume-high:before
	width 22px
	height 26px
	content "";
	display block
	background-repeat: no-repeat
.icon-play3:before
	background-image: url('../assets/img/play-button.svg')
.icon-pause2:before
	background-image: url('../assets/img/pause-button.svg')
.icon-volume-high:before
	width 35px
	background-image: url('../assets/img/speaker.svg')
</style>

