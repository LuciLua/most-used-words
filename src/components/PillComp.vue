<template>
  <div>
    <span>
      {{ name }}
      {{ amount }}
    </span>
  </div>
</template>

<script>
export default {
  props: ["name", "amount"],
};
</script>

<style>
</style>