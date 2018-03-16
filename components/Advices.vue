<template lang="pug">
	div(class="advices" v-bind:class="{ active: isShowAdvice }")
		p
			span(class="text" v-bind:class="{ reloading: reloading }") {{ adviceToShow }}
			span(class="close" @click="showAdvice(false)")
			span(class="reload" @click="showRandomAdvice")
		div(class="person")
			img(src="~/assets/img/persona.png" @click="showAdvice(true)")
</template>
<script>
import axios from '~/plugins/axios'

export default {
	data: () => ({
		reloading: false,
		isShowAdvice: false,
		advices: [],
		adviceToShow: null
	}),
	async created () {
		await this.getAdvices()
		this.showRandomAdvice()
	},
	methods: {
		showAdvice (payload) {
			this.isShowAdvice = payload
		},
		showRandomAdvice () {
			this.reloading = true
			const min = 0
			const max = this.advices.length - 1
			const random = Math.floor(Math.random() * (max - min + 1)) + min
			setTimeout(() => {
				this.reloading = false
				this.adviceToShow = this.advices[random].content
			}, 300)
		},
		async getAdvices () {
			try {
				const { data } = await axios.get('/api/advices')
				this.advices = data
			} catch (e) {
				console.log(e)
			}
		}
	}
}
</script>
<style lang="stylus" scoped>
.advices
	width 340px
	height 240px
	display flex
	position relative
	align-items: start
	p
		position absolute
		width 220px
		display block
		font-size: 15px
		padding 15px
		text-align: left
		box-sizing: border-box
		background-color: #F5F7CB
		line-height: 22px
		color #807b77
		border-radius: 10px
		opacity 0
		transition .5s
		.text
			opacity 1
			transition .4s
			&.reloading
				opacity 0
				transition .4s
.reload
	background-image: url('~/assets/img/reload.svg')
	width 11px
	height 12px
	position absolute
	right -26px
	top 28px
	cursor pointer
.close
	background-image: url('~/assets/img/close.svg')
	width 9px
	height 11px
	position absolute
	right -25px
	top 6px
	cursor pointer
.active.advices p
	opacity 1
	transition .5s
.person
	width 108px
	height 100%
	display flex
	align-items: flex-end
	overflow hidden
	cursor pointer
	position relative
	left 245px
	img
		height 126px
		position absolute
		bottom -27%
		transition .5s
		.active &
			bottom 0
			transition .5s
</style>
