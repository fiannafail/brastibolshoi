<template lang="pug">
	h1 template
</template>
<script>
export default {
	fetch ({ params, store }) {
		return Promise.all([
			store.dispatch('getСartoons')
		])
	}
}
</script>
