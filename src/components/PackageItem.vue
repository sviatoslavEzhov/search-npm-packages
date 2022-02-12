<template>
  <div class="package-item">
    <h3>{{ packageItem.name }}</h3>
    <div>
			<img :src="packageItem.owner.avatar" alt="" :style="{width: '20px', height: '20px' }">
			<span>{{packageItem.owner.name}}</span>
			<a :href="packageItem.owner.link">Link</a>
		</div>
    <p v-html="packageItem.description"></p>

		<v-btn
      color="primary"
      dark
      @click="$emit('dialog', packageItem)"
    >More info</v-btn>


  </div>
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