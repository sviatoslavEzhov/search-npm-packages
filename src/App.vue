<template>
	<v-app>
		<!-- header -->
		<v-app-bar dark app>
			<header-app />
		</v-app-bar>

		<!-- content-->
		<v-main app>
			<router-view/>
		</v-main>

		<!-- footer -->
		<v-footer dark app>
			<footer-app />
		</v-footer>
	</v-app>
</template>

<script>
import HeaderApp from '@/components/HeaderApp.vue';
import FooterApp from '@/components/FooterApp.vue';

export default {
	components: {
		HeaderApp,
		FooterApp
	}
}
</script>

<style>

</style>