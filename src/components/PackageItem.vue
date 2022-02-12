<template>
  <v-card class="package-item">
    <v-card-title>{{ packageItem.name }}</v-card-title>
		<v-divider></v-divider>

    <v-card-text class="d-flex">
			<img
				class="mr-2"
				:src="packageItem.owner.avatar"
				:alt="packageItem.owner.name"
				:style="{width: '20px', height: '20px' }"
			>
			<span>{{packageItem.owner.name}}</span>
		</v-card-text>

    <v-card-text v-html="packageItem.description"></v-card-text>

		<v-card-actions>
			<v-btn
				color="primary"
				dark
				@click="$emit('dialog', packageItem)"
			>More info</v-btn>
		</v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "PackageItem",

  props: {
    packageItem: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
};
</script>

<style>
</style>