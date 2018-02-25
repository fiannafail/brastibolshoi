import Vuex from 'vuex'
import axios from '~/plugins/axios'

const createStore = () => {
	return new Vuex.Store({
		state: {
			cartoons: null,
			currentEditing: false,
			cartoonCategoriesArray: [],
			cartoonCategoriesList: [],
			cartoonMultiseries: [],
			cartoonTagsArray: [],
			editingItem: null,
			cartoonCurrentTag: null
		},
		mutations: {
			set (state, {type, items}) {
				state[type] = items
			}
		},
		actions: {
			async setCurrentTag ({ commit }, payload) {
				const empty = []
				commit('set', { type: 'cartoons', items: empty })
				try {
					const { data } = await axios.get(`/api/gettagbyname/${payload.category}/${payload.tag}`)
					console.log(data)
					commit('set', { type: 'cartoons', items: data.cartoons })
					commit('set', { type: 'cartoonCurrentTag', items: data.tag })
				} catch (e) {
					console.log(e)
				}
			},
			async getCartoonsByTag ({ commit }, payload) {
				try {
					const { data } = await axios(`/api/getcartoonsbytag/${payload}`)
					commit('set', { type: 'cartoons', items: data })
					console.log(data)
				} catch (e) {
					console.log(e)
				}
			},
			async getMoreItems ({ commit }, payload) {
				try {
					let { data } = await axios.get(`/api/cartoons/page/${payload.pagination}/${payload.category}`)
					const newedData = [
						...this.state.cartoons,
						...data
					]
					commit('set', { type: 'cartoons', items: newedData })
				} catch (e) {
					console.log(e)
				}
			},
			async getMultiseries ({ commit }) {
				try {
					const { data } = await axios.get('/getmultiseries')
					commit('set', { type: 'cartoonMultiseries', items: data })
				} catch (e) {
					console.log(e)
				}
			},
			async getItems ({ commit }, payload) {
				const empty = []
				commit('set', { type: 'cartoons', items: empty })
				const url = payload.category
				try {
					const { data } = await axios.get(`/api/cartoons/${url}`)
					commit('set', { type: 'cartoons', items: data })
				} catch (e) {
					console.log(e)
				}
				console.log(payload)
			},
			async getСartoons ({ commit }) {
				try {
					const { data } = await axios.get('/api/cartoons')
					commit('set', { type: 'cartoons', items: data })
				} catch (e) {
					console.log(e)
				}
			},
			async getCartoonsTags ({ commit }) {
				const { data } = await axios.get('/gettags')
				commit('set', { type: 'cartoonTagsArray', items: data })
			},
			async getcartoonsCats ({ commit }) {
				const { data } = await axios.get('/getcategories')
				commit('set', { type: 'cartoonCategoriesArray', items: data })
			}
		}
	})
}

export default createStore
