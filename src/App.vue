<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Most Used Words</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <HomeApp />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HomeApp from "./components/HomeApp.vue";
export default {
  name: "App",

  components: {
    HomeApp,
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
