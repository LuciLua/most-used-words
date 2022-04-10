<template>
  <v-container fluid>
    <v-form class="form">
      <v-file-input
        label="Selecione as Legendas"
        prepend-icon="mdi-message-text"
        v-model="files"
        multiple
        chips
      />
      <v-btn
        class="btn"
        append-icon="mdi-send"
        style="box-shadow: none; font-size: 1.2rem; color: #707070"
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
import { ipcRenderer } from "electron";

export default {
  components: {
    PillComp,
  },
  data: function () {
    return {
      files: [],
      groupedWords: [],
    };
  },
  methods: {
    processSubtitles() {
      const paths = this.files.map(f => f.path)
      ipcRenderer.send("process-subtitles", paths);
      ipcRenderer.on("process-subtitles", (event, resp) => {
        this.groupedWords = resp
      });
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