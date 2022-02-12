import Vue from 'vue'
import VueRouter from "vue-router";
import SearchPage from '@/pages/SearchPage.vue'
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/page/1'
	},
	{
		path: '/page',
		redirect: '/page/1'
	},
	{
		path: '/page/:id',
		component: SearchPage
	}
]

export default new VueRouter({
	mode: 'history',
	routes
})