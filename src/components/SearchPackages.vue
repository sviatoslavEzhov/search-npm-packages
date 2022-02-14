<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<v-text-field
					label="Search all of npm"
					v-model="query"
				/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	computed: {
		query: {
			get() {
				return this.$store.state.packages.query
			},

			set(value) {
				this.$store.commit('setSearchQuery', value)
			}
		}
	}
}
</script>

<style></style>