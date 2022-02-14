import { search } from '@/api/algoliasearch';

export const packagesModule = {
  state: {
		list: [],
		isLoading: true,
		isAlert: false,
		page: null,
		pages: null,
		query: '',
	},

  getters: {
		isResult(state) { return !!state.list.length },
	},

  mutations: {
		setPackagesList(state, packages) { state.list = packages },
		setLoading(state, bool) { state.isLoading = bool },
		setAlert(state, bool) { state.isAlert = bool },
		setPage(state, numb) { state.page = numb },
		setPages(state, numb) { state.pages = numb },
		setSearchQuery(state, str) { state.query = str },
	},

  actions: {
		async fetchingPackages({state, commit}) {
			search({
				query: state.query,
				requestOptions: {
					page: state.page - 1,
				}
			}).then((data) => {
				commit('setPackagesList', data.hits)
				commit('setPages', data.nbPages)
				commit('setLoading', false)
			})
		},
	},
}