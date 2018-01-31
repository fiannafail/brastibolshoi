<template lang="pug">
div
	form(v-on:submit.prevent="signIn")
		div(class="form-group")
			input(type="text" v-model="user.username")
		div(class="form-group")
			input(type="password" autocomplete v-model="user.password")
		button Sign In
		div(class="cs-loader" v-if="loading")
			div(class="cs-loader-inner")
				- for (var x = 0; x < 5; x++)
					label 	●
</template>
<script>
import axios from 'axios'

export default {
	data: () => ({
		loading: false,
		user: {
			username: null,
			password: null
		}
	}),
	methods: {
		async signIn() {
			this.loading = true
			const res = await axios.post('login/', this.user)
			const { refreshToken } = res.data
			localStorage.setItem('refreshToken', refreshToken)
			console.log(refreshToken)
			this.loading = false
		}
	}
}
</script>
<style lang="stylus" scoped>
@import url('//unpkg.com/element-ui@2.0.11/lib/theme-chalk/index.css');

button {
	padding: 14px 30px;
	border: 2px solid #3B8070;
	color: #3B8070;
	text-transform: uppercase;
	font-family: 'Source Sans Pro', Arial, sans-serif;
	font-size: 16px;
	font-weight: 600;
	background-color: white;
	cursor: pointer;
	transition: 0.3s;

	&:hover {
		transition: 0.3s;
		background-color: #3B8070;
		color: white;
	}
}

input {
	font-family: 'Roboto Mono', Arial, sans-serif;
	font-size: 14px;
	font-weight: 500;
	padding: 18px;
	margin: 10px;
	border: 2px solid #3B8070;
	border-top: none;
	-webkit-text-fill-color: #000 !important;
}

input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active {
	transition: background-color 5000s ease-in-out 0s;
}
</style>
