<template>
	<div>
		<nuxt/>
	</div>
</template>

<script>

export default {
}
</script>

<style>
li {
	list-style: none;
}
.button,
.button:visited {
	margin: 0 auto;
	display: block;
	color: #3b8070;
	letter-spacing: 1px;
	background-color: #fff;
	border: 2px solid #3b8070;
	text-decoration: none;
	text-transform: uppercase;
	padding: 15px 25px;
}

.button:hover,
.button:focus {
	color: #fff;
	background-color: #3b8070;
}

.title {
	color: #505153;
	font-weight: 300;
	font-size: 2.5em;
	margin: 0;
}
.next-arrow {
	background-image: url('~/assets/img/left-arrow.svg');
	width: 24px;
	height: 18px;
	transform: rotate(180deg);
}
.prev-arrow {
	background-image: url('~/assets/img/left-arrow.svg');
	width: 24px;
	height: 18px;
}
</style>
