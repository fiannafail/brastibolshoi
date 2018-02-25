<template lang="pug">
	div
		div(v-for="(item, index) in items" class="audio")
			div(class="thumbnail")
				img(:src="item.thumbnail")
			div(class="content")
				p {{ item.audiocategory.name }}
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
<style lang="stylus" scoped>
.audio
	display flex
.thumbnail
		width 160px
		height 160px
	img
		border-radius: 100%
		width 100%
		height 100%
</style>

