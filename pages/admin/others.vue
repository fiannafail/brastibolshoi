<template lang="pug">
	div(class="others-container")
		transition(name="fade")
			Modal(class="modal-window" v-if="showModal")
				h1(slot="header") Подтвердите действие
				p(slot="body") Вы действительно хотите удалить пост 
					span(class="bold") {{ removedName }}
					|  ?
				button(class="btn red" slot="buttons") Удалить
		OthersForm(:categories="categories")
		div
			h2 Список постов:
			ItemsList(:items="items" class="item-list" @remove="remove")
</template>
<script>
import axios from '~/plugins/axios'
import Modal from '../../components/admin/Modal'
import OthersForm from '../../components/admin/OthersForm'
import ItemsList from '../../components/admin/ItemsList'
import eventBus from '../../components/event-bus'

export default {
	async asyncData () {
		const data = await Promise.all([
			axios.get('/api/others/getcategories'),
			axios.get('/api/others/getothers')
		])
		return {
			categories: data[0].data,
			items: data[1].data
		}
	},
	methods: {
		remove (name) {
			this.removedName = name
			this.showModal = true
		}
	},
	mounted () {
		eventBus.$on('close-modal', () => {
			this.showModal = false
		})
	},
	data: () => ({
		removedName: '',
		showModal: false,
		item: {}
	}),
	components: {
		OthersForm,
		ItemsList,
		Modal
	}
}
</script>
<style lang="stylus" scoped>
@import "~assets/css/admin.styl"
.modal-window
	position fixed
.others-container
	display flex
	align-items: start
h2
	margin-top: 0
	padding-left: 15px
	margin-bottom: 0px
.item-list
	margin-top: 15px
	margin-left: 15px !important
</style>
