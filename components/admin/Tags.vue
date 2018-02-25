<template lang="pug">
section(class="tags-modal")
	h2 Тэги
	div(class="tags-wrapper")
		ul
			li(
				v-for="(item, index) in items" 
				:key="index" 
				@click="setCurrent(item,index)"
				v-bind:class="{ selected: selected === index }"
				) {{ item.name }}
		div
			h3 {{ current.name }}
			textarea(v-model="current.description" type="text")
			button(class="button" @click="save") Сохранить

</template>
<script>
import socket from '~/plugins/global.js'

export default {
	props: ['items'],
	methods: {
		async setCurrent (item, index) {
			await socket.emit('getTag', item.name)
			this.current.name = item.name
			this.selected = index
		},
		async save () {
			socket.emit('setTag', this.current)
		}
	},
	mounted () {
		socket.on('tag', (msg) => {
			const tag = msg.split(', ')
			this.current.description = tag[0]
		})
	},
	data: () => ({
		selected: null,
		current: {
			name: null,
			description: null
		}
	})
}
</script>
<style lang="stylus" scoped>
@import "~assets/css/admin.styl"
.tags-wrapper
	display flex
	div
		margin-left: 25px
		display flex
		flex-direction: column
		& > *
			margin-top: 25px
ul
	border: 2px #ccc solid
	padding 0
	li
		background-color: #f9f9f9
		padding 10px 45px
		border-bottom: 1px #cccccc solid
		cursor pointer 
		font-size: 14px
		font-weight: 500
		transition: .3s
		color #3b8070
		&.selected
			background-color: rgba(0,0,0,0.075)
			transition: .3s
		&:last-child
			border none
</style>
