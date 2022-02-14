<template>
	<v-container>
		<v-progress-linear
			v-if="isLoading"
			indeterminate
			color="primary"
		></v-progress-linear>

		<v-alert
			v-if="isAlert"
			border="bottom"
			colored-border
			type="warning"
			elevation="2"
		>Query "{{ query }}" did not return a result</v-alert>

		<template v-if="isResult">
			<v-row v-for="(item) in packages" :key="item.objectID">
				<v-col cols="12">
					<package-item
						:packageItem="item"
						@dialog="openPopup"
					></package-item>
				</v-col>
			</v-row>
		</template>
	</v-container>
</template>

<script>
import PackageItem from '@/components/PackageItem.vue';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
	components: {
		PackageItem,
	},

	computed: {
		...mapState({
			packages: (state) => state.packages.list,
			page: (state) => state.packages.page,
			isLoading: (state) => state.packages.isLoading,
			isAlert: (state) => state.packages.isAlert,
			query: (state) => state.packages.query,
		}),

		...mapGetters([
			'isResult'
		])
	},

	methods: {
		...mapMutations([
			'setAlert',
			'setPage',
			'setSearchQuery'
		]),

		...mapActions([
			'openPopup',
			'fetchingPackages'
		]),
	},

	watch: {
		packages(newPackages) { this.setAlert(!newPackages.length) },

		query(newQuery) {
			const routeQuery = String(this.$route.query.search || '')

			if (newQuery !== routeQuery) {
				this.$router.push({
					query: newQuery ? { search: newQuery } : {},
					params: { id: this.page }
				})
			}

			this.fetchingPackages()
		},

		page(newPage) {
			const routePage = Number(this.$route.params.id)

			if (newPage !== routePage) {
				this.$router.push({
					query: this.query ? { search: this.query } : {},
					params: {id: newPage }
				})
			}

			this.fetchingPackages()
			document.body.scrollIntoView()
		}
	},

	mounted() {
		this.setPage(Number(this.$route.params.id))
		this.setSearchQuery(String(this.$route.query.search || '') )
	},
}
</script>

<style></style>