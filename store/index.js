import Vuex from 'vuex'
import axios from '~/plugins/axios'

const createStore = () => {
	return new Vuex.Store({
		state: {
			cartoonCategoriesArray: [],
			cartoonCategoriesList: [],
			cartoonTagsArray: []
		},
		mutations: {
			set (state, {type, items}) {
				state[type] = items
			}
		},
		actions: {
			async getCartoonsTags ({ commit }) {
				const { data } = await axios.get('/gettags')
				commit('set', { type: 'cartoonTagsArray', items: data })
			},
			async getCartoonsCats ({ commit }) {
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
