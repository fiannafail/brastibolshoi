import Vuex from 'vuex'
import axios from '~/plugins/axios'

const createStore = () => {
	return new Vuex.Store({
		state: {
			cartoonCategories: []
		},
		mutations: {
			set (state, {type, items}) {
				state[type] = items
			}
		},
		actions: {
			async getCartoonsCats ({ commit }) {
				const { data } = await axios.get('/getcats')
				commit('set', { type: 'cartoonCategories', items: data })
			}
		}
	})
}

export default createStore
