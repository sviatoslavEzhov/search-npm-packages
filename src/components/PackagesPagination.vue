<template>
	<v-container class="pagination">
		<v-pagination
			v-if="isResult"
			v-model="page"
			:length="pages"
			:total-visible="5"
			md="8"
		></v-pagination>
	</v-container>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
	methods: {
		...mapActions([
			'openPopup',
			'fetchingPackages'
		]),
	},

	computed: {
		...mapState({
			pages: (state) => state.packages.pages,
		}),

		...mapGetters([
			'isResult'
		]),

		page: {
			get() {
				return this.$store.state.packages.page
			},

			set(value) {
				this.$store.commit('setPage', value)
			}
		}
	},
}
</script>

<style>

</style>