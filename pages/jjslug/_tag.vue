<template lang="pug">
div
	h1 {{ $route.params }} 32dm
	nuxt-child
</template>
<script>
export default {
	fetch ({ params, store }) {
		console.log(params.tag)
		return Promise.all([
			store.dispatch(`getItems`, params)
		])
	}
}
</script>
