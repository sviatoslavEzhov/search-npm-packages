import Vue from 'vue'
import VueRouter from "vue-router";
import SearchPage from '@/pages/SearchPage.vue'
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: SearchPage
	}
]

export default new VueRouter({
	mode: 'history',
	routes
})