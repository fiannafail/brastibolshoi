<template lang="pug">
footer
	div
		transition(name="fade")
			div(class="overlay" v-if="isModalShow" @click="showModal(false)" v-bind:class="{ 'active-overlay': isModalShow }")
		transition(name="fadeUp")
			section(class="modal" v-if="isModalShow")
				no-ssr
					vue-scrollbar(ref="Scrollbar" classes="my-scrollbar")
						div(class="modal-wrapper")
							span(class="close-modal" @click="showModal(false)")
							h2 Мы читаем ваши письма
							p Считаете, что нужно добавить новый мультфильм на этот сайт, который мы забыли добавить — пишите. Не согласны с чем-то — пишите. Хотите чтобы вашу статью (под мультфильмом или в раздел «полезности») разместили на сайте — пишите.
							textarea(v-model="modalTextarea" placeholder="Текст вашего письма…")
							button Отправить
		footer(class="main-footer")
			p(class="improve" @click="showModal(true)") Улучшим проект вместе
			Advices
			div(class="section-3")
				span Не будь
				img(src="~/assets/img/footer.png")
</template>
<script>
import VueScrollbar from 'vue2-scrollbar'
import Advices from '../components/Advices'

import 'vue2-animate/dist/vue2-animate.min.css'
require('vue2-scrollbar/dist/style/vue2-scrollbar.css')

export default {
	data: () => ({
		isModalShow: false,
		modalTextarea: null
	}),
	methods: {
		showModal (payload) {
			this.isModalShow = payload
		}
	},
	components: {
		Advices,
		VueScrollbar
	}
}
</script>
<style lang="stylus" scoped>
.next-arrow
    background-image url('~/assets/img/left-arrow.svg')
    width 24px
    height 18px
    transform rotate(180deg)

.prev-arrow
    background-image url('~/assets/img/left-arrow.svg')
    width 24px
    height 18px

.main-footer
    display flex
    align-items center
    justify-content space-around

.improve
    display inline
    cursor pointer
    font-size 20px
    color #fa8925
    border-bottom 1px solid

.overlay
    position fixed
    z-index -1
    opacity 0
    background-color rgba(0, 0, 0, 0.35)
    width 100%
    height 100%
    top 0

.modal
    position fixed
    left calc(50% - 365px)
    max-height 450px
    box-sizing border-box
    width 730px
    top 85px
    background-color white
    border-radius 8px
    box-shadow 2px 2px 35px rgba(0, 0, 0, 0.15)
    z-index 9
    h2
        color #fa8925
        margin-top 0
    p
        font-size 15px
        color #807b77
        line-height 22px
    textarea
        margin-top 10px
        padding 20px
        width 100%
        min-height 240px
        box-sizing border-box
        border 1px solid rgba(151, 151, 151, 0.3)
        border-radius 8px
        letter-spacing 1.1px
        &::placeholder
            color #C7C6C4
    button
        margin 15px auto
        display block
        background-color #fa8925
        border-radius 100px
        padding 15px
        color white
        font-size 18px
        border none
        font-weight 700

.modal-wrapper
    min-height 580px

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

.close-modal
    position absolute
    width 16px
    height 16px
    background-image url('~/assets/img/close_1.svg')
    right 30px
    top 30px
    cursor pointer
    transition .4s
    &:hover
        transform scale(1.4)
        transition .4s
.active-overlay
    opacity 1
    z-index 1
.section-3
	display flex
	align-items: center
	span
		font-size: 20px
		margin-right: 20px
		letter-spacing: 0.5px
		color #fa8925
</style>
