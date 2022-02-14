import Vue from 'vue'
import Vuex from 'vuex'
import { packagesModule } from '@/store/modules/packagesModule'
import { dialogModule } from '@/store/modules/dialogModule'

Vue.use(Vuex)

const store = {
	modules: {
		packages: packagesModule,
		dialog: dialogModule,
	}
}

export default new Vuex.Store(store)