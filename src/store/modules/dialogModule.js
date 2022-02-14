export const dialogModule = {
  state: {
		isActive: false,
		dialogPackage: {},
	},

  mutations: {
		setDialogState(state, bool) {
			state.isActive = bool;
		},
		
		setDialogPackage(state, packageItem) {
			state.dialogPackage = packageItem;
		}
	},

	actions: {
		openPopup({commit}, packageItem) {
			commit('setDialogState', true);
			commit('setDialogPackage', packageItem)
		}
	},

	getters: {},
}