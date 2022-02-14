<template>
	<v-dialog transition="dialog-bottom-transition" max-width="600" v-model="dialog">
		<!-- package info -->
		<template v-slot:default="dialog">
			<v-card>
				<!-- card toolbar -->
				<v-toolbar color="primary" dark>{{ dialogPackage.name }}</v-toolbar>

				<!-- card content -->
				<v-card-text class="pa-4">
					<div class="font-weight-bold">version: {{ dialogPackage.version }}</div>
					<div class="d-flex">
						<img
							class="mr-2"
							:src="dialogPackage.owner.avatar"
							:alt="dialogPackage.owner.name"
							:style="{width: '20px', height: '20px' }"
						>
						<span class="mr-2">{{ dialogPackage.owner.name }}</span>
					</div>
				</v-card-text>

				<v-card-text class="pa-4">
					<div class="text" v-if="dialogPackage.homepage">Homepage:
						<a :href="dialogPackage.homepage" target="_blank" rel="noopener noreferrer nofollow">{{ dialogPackage.homepage }}</a>
					</div>
					<div class="text" v-if="dialogPackage.repository">Repository:
						<a :href="dialogPackage.repository.url" target="_blank" rel="noopener noreferrer nofollow">{{ dialogPackage.repository.url }}</a>
					</div>
					<div class="text">Monthly Downloads: {{ dialogPackage.downloadsLast30Days }}</div>
					<div class="text">License: {{ dialogPackage.license }}</div>

				</v-card-text>

				<!-- card cose -->
				<v-card-actions class="justify-end">
					<v-btn text @click="dialog.value = false">Close</v-btn>
				</v-card-actions>
			</v-card>
		</template>
	</v-dialog>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState({
			dialogPackage: (state) => state.dialog.dialogPackage,
		}),

		dialog: {
			get() {
				return this.$store.state.dialog.isActive
			},

			set(value) {
				this.$store.commit('setDialogState', value)
			}
		}
	},
}
</script>

<style>

</style>