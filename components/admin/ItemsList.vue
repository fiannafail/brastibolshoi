<template lang="pug">
div(class="aside-block")
	transition-group(name="fade" tag="ul" class="list-group")
		li(v-for="(item, index) in items" :key="index" v-bind:class="{ removed: item.removed === true }") 
			span {{ item.title }}
			span 
				i(class="material-icons blue" @click="edit(item)") mode_edit
				i(class="material-icons red" @click="remove(index)") delete
</template>
<script>
import 'vue2-animate/dist/vue2-animate.min.css'

export default {
	props: ['items'],
	data: () => ({
		removed: []
	}),
	methods: {
		remove (index) {
			this.$set(this.items[index], 'removed', true)
			console.log(this.items[index].removed)
		},
		edit (item) {
			this.$emit('editItem', item)
		}
	}
}
</script>
<style lang="stylus" scoped>
@import "~assets/css/admin.styl"
.removed span
	opacity 0.2
	transition .4s
.red
	color $red-color
.blue
	color $blue-color
ul
	padding 0
	margin 0
	li
		align-items center
		display: flex;
		justify-content: space-between;
		width: 100%;
		box-sizing: border-box;
		padding 15px 20px
		border-bottom 1px solid #cccccc
		transition .3s
		cursor pointer
		font-size: 14px
		font-weight: 500
		span
			align-items center
			display: flex;
			i
				margin-left: 15px
		&:hover
			transition .3s
			background-color: #f3f3f3
.aside-block
	min-width 350px
	margin-left: 45px
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25)
	border-radius: 5px
</style>
