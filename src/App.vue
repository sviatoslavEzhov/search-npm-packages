<template>
  <div>
    <input type="text" v-model="query">
    <div
      class="package-item"
      v-for="(item, index) in packages"
      :key="item.objectID"
    >{{index + 1}}. {{item.name}}</div>
  </div>
</template>

<script>
import { fetching } from './api';

export default {
	name: "App",

	data() {
		return {
			packages: [],
			isLoading: true,
			page: 0,
			pages: null,
			query: ''
		}
	},

	methods: {
		setNewData() {
			fetching({
				query: this.query,
				requestOptions: {
					page: this.page,
				}
			}).then((data) => {
				console.log('data', data.hits)
				this.packages = data.hits
			})
		}
	},

	watch: {
		page: function() { this.setNewData() },
		query: function() { this.setNewData() },
	},

	mounted() {
		this.setNewData()
	},
};
</script>

<style lang="scss"></style>
