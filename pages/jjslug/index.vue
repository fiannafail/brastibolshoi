<template lang="pug">
	div
		div(class="tags-container")
			div(v-for="(item, index) in cartoonTags" :key="index") 
				a(href="" @click.prevent="tag(item)") {{ item.name }}
</template>
<script>
import { mapState } from 'vuex'

export default {
	fetch ({ params, store }) {
		return Promise.all([
			store.dispatch(`getItems`, params)
		])
	},
	methods: {
		async tag (item) {
			await this.$store.dispatch('setCurrentTag', item.name)
			this.$router.replace({ path: `cartoons/tag/${this.cartoonCurrentTag.slug}` })
		}
	},
	computed: {
		...mapState({
			cartoonCurrentTag: 'cartoonCurrentTag',
			cartoonTags: 'cartoonTagsArray'
		})
	}
}
</script>
<style lang="stylus" scoped>
.tags-container
	display flex
</style>
