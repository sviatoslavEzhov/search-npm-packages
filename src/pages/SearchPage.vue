<template>
	<div>
		<search-packages />
		<packages-list />
		<packages-pagination />
		<package-dialog />
	</div>
</template>

<script>
import SearchPackages from '@/components/SearchPackages.vue'
import PackagesList from '@/components/PackagesList.vue'
import PackagesPagination from '@/components/PackagesPagination.vue'
import PackageDialog from '@/components/PackageDialog.vue'

export default {
	name: "App",

	components: {
		SearchPackages,
		PackagesList,
		PackagesPagination,
		PackageDialog
	},
};
</script>

<style></style>
