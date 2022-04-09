<template>
  <v-container fluid>
    <div class="pills">
      <PillComp
        v-for="word in groupedWords"
        :key="word.name"
        :name="word.name"
        :amount="word.amount"
      />
    </div>
  </v-container>
</template>

<script>
import PillComp from "./PillComp.vue";
export default {
  components: {
    PillComp,
  },
  data: function () {
    return {
      groupedWords: [
        { name: "i", amount: 1234 },
        { name: "you", amount: 900 },
        { name: "he", amount: 850 },
      ],
    };
  },
};
</script>

<style>
</style>