<template lang="pug">
div
	h1 Советы
	form(@submit.prevent="addAdvice")
		h2 Добавить совет
		div(class="form-group")
			label Совет
			textarea(v-model="advice.content")
		button(class="button") Добавить
	div(class="advices-container")
		form(@submit.prevent="submit")
			h2 Редактировать совет
			div(class="form-group")
				label Совет
				textarea(v-model="content")
			button(class="button") Редактировать
		ItemsList(:items="advices" class="item-list" @remove="remove" @editing="editing")
</template>
<script>
import axios from '~/plugins/axios'
import ItemsList from '../../components/admin/ItemsList'

export default {
	async asyncData () {
		try {
			const { data } = await axios.get('/api/advices')
			return {
				advices: data
			}
		} catch (e) {
			console.log(e)
		}
	},
	data: () => ({
		advice: {
			content: null
		},
		id: null,
		content: null
	}),
	methods: {
		async addAdvice () {
			try {
				const advice = await axios.post('/api/advices/add', this.advice)
				if (advice.status === 200) this.addingSuccess()
			} catch (e) {
				console.log(e)
			}
		},
		async submit () {
			try {
				const advice = await axios.patch('/api/advices/edit', { content: this.content, id: this.id })
				console.log(advice)
				if (advice.status === 200) this.changingSuccess()
			} catch (e) {
				console.log(e)
			}
		},
		editing (item) {
			console.log(item)
			this.content = item.content
			this.id = item.id
		}
	},
	components: {
		ItemsList
	},
	notifications: {
		addingSuccess: {
			title: 'Совет успешно добавлен!',
			message: '',
			type: 'success'
		},
		addingFailure: {
			title: 'При проверке найдены ошибки',
			message: 'Проверьте выделенные поля',
			type: 'error'
		},
		changingSuccess: {
			title: 'Пост успешно обновлен',
			message: '',
			type: 'success'
		}
	}
}
</script>
<style lang="stylus" scoped>
@import "~assets/css/admin.styl"
.advices-container
	display flex
</style>
