<template>
  <v-container fluid>
    <v-form class="form">
      <v-file-input
        label="Selecione as Legendas"
        prepend-icon="mdi-message-text"
        multiple
        chips
        v-model="files"
      />
      <v-btn
        class="btn"
        append-icon="mdi-send"
        style="box-shadow: none; font-size: 1.2rem; color: #707070;"
        @click="processSubtitles"
      ></v-btn>
    </v-form>
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
      files: [],
      groupedWords: [
        { name: "i", amount: 1234 },
        { name: "you", amount: 900 },
        { name: "he", amount: 850 },
      ],
    };
  },
  methods: {
    processSubtitles() {
      console.log(this.files);
    },
  },
};
</script>

<style>
.pills {
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
}

.form {
  display: flex;
}

.form .btn {
  margin-top: 0px;
  margin-left: 10px;
  height: 55px;
}
</style>