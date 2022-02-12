<template>
	<div>
		<v-container class="search">
			<v-row>
				<v-col cols="12">
					<v-text-field label="Search all of npm" v-model="query" />
				</v-col>
			</v-row>
		</v-container>

		<v-container class="packages-list" >
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
							@dialog="dialogHandle"
						></package-item>
					</v-col>
				</v-row>
			</template>

		</v-container>

		<v-container class="pagination">
			<v-pagination
				v-if="isResult"
				v-model="page"
				:length="pages"
				:total-visible="5"
				@input="paginationHandle"
				md="8"
			></v-pagination>
		</v-container>

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
						<div class="text">Homepage:
							<a :href="dialogPackage.homepage" target="_blank" rel="noopener noreferrer nofollow">{{ dialogPackage.homepage }}</a>
						</div>
						<div class="text">Repository:
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
	</div>
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
			isAlert: false,
			page: Number(this.$route.params.id),
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
					page: this.$route.params.id - 1,
				}
			}).then((data) => {
				this.packages = data.hits;
				this.pages = data.nbPages;
				this.isLoading = false;
			})
		},

		dialogHandle(dialogPackage) {
			this.dialogPackage = dialogPackage;
			this.dialog = true;
		},

		paginationHandle() {
			this.$router.push({ path: `/page/${this.page}` })
			document.body.scrollIntoView();
		}
	},

	computed: {
		isResult: function() { return !!this.packages.length },
	},

	watch: {
		page: function() { this.setNewData() },
		query: function() { this.setNewData() },
		packages: function(newPackages) { this.isAlert = !newPackages.length }
	},

	mounted() {
		this.setNewData();
	},
};
</script>

<style></style>
