<template>
	<div class="py-4 d-flex">
		<v-img
			class="author-photo mr-4"
			lazy-src="@/assets/EzhovSvyatoslav.jpeg"
			aspect-ratio="1"
			width="80"
			src="@/assets/EzhovSvyatoslav.jpeg"
		></v-img>

		<div class="author-info">
			<div class="text-h6">Ezhov Svyatoslav</div>
			<a href="https://github.com/sviatoslavEzhov" target="_blank" rel="noopener noreferrer nofollow">
				<div class="text">Github</div>
			</a>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
	.author-photo { border-radius: 50%; }
</style>