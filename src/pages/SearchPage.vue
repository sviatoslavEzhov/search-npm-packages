<template>
	<v-app>
		<div class="inner pa-4">
			<v-text-field
				label="Search all of npm"
				v-model="query"
			></v-text-field>

			<v-progress-circular
				v-if="isLoading"
				indeterminate
				color="primary"
			></v-progress-circular>

			<div class="packages-list">
				<package-item
					v-for="(item) in packages"
					:key="item.objectID"
					:packageItem="item"
					@dialog="dialogHandle"
				></package-item>
			</div>

			<v-pagination
				v-model="page"
				:length="pages"
				:total-visible="5"
			></v-pagination>
		</div>

		<v-dialog transition="dialog-bottom-transition" max-width="600" v-model="dialog">
			<!-- package info -->
			<template v-slot:default="dialog">
				<v-card>
					<!-- card toolbar -->
					<v-toolbar color="primary" dark>{{ dialogPackage.name }}</v-toolbar>

					<!-- card content -->
					<v-card-text class="pa-4">
						<div>
							<img :src="dialogPackage.owner.avatar" alt="" :style="{width: '20px', height: '20px' }">
							<span>{{dialogPackage.owner.name}}</span>
							<a :href="dialogPackage.owner.link">Link</a>
						</div>
					</v-card-text>

					<!-- card cose -->
					<v-card-actions class="justify-end">
						<v-btn text @click="dialog.value = false">Close</v-btn>
					</v-card-actions>
				</v-card>
			</template>
		</v-dialog>
	</v-app>
</template>

<script>
import { fetching } from '@/api/algoliasearch';
import PackageItem from '@/components/PackageItem.vue';

export default {
	name: "App",

	components: {
		PackageItem
	},

	data() {
		return {
			packages: [],

			isLoading: true,
			page: 1,
			pages: null,
			query: '',

			dialog: false,
			dialogPackage: {},
		}
	},

	methods: {
		setNewData() {
			fetching({
				query: this.query,
				requestOptions: {
					page: this.page - 1,
				}
			}).then((data) => {
				console.log('data: ', data);
				this.packages = data.hits;
				this.pages = data.nbPages;
			})
		},

		dialogHandle(dialogPackage) {
			this.dialogPackage = dialogPackage;
			this.dialog = true;
		}
	},

	watch: {
		page: function() { this.setNewData() },
		query: function() { this.setNewData() },
	},

	mounted() {
		this.setNewData();
		this.isLoading = false;
	},
};
</script>

<style lang="scss"></style>
