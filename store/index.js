import Vuex from 'vuex'
import axios from '~/plugins/axios'

const createStore = () => {
	return new Vuex.Store({
		state: {
			cartoons: null,
			cartoonCategoriesArray: [],
			cartoonCategoriesList: [],
			cartoonMultiseries: [],
			cartoonTagsArray: []
		},
		mutations: {
			set (state, {type, items}) {
				state[type] = items
			}
		},
		actions: {
			async getMultiseries ({ commit }) {
				try {
					const { data } = await axios.get('/getmultiseries')
					commit('set', { type: 'cartoonMultiseries', items: data })
				} catch (e) {
					console.log(e)
				}
			},
			async getcartoons ({ commit }) {
				try {
					const { data } = await axios.get('/carts')
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
				const { data } = await axios.get('/getcats')
				commit('set', { type: 'cartoonCategoriesArray', items: data })
				let categoriesList = []
				data.map(item => {
					categoriesList.push(item.name)
				})
				commit('set', { type: 'cartoonCategoriesList', items: categoriesList })
			}
		}
	})
}

export default createStore
