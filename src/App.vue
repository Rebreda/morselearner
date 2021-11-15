<template>
  <v-app>
    <v-main>
      <character-board :letters="alphabet" />
    </v-main>
  </v-app>
</template>

<script>
import CharacterBoard from "./components/CharacterBoard.vue";
import morse from "./data/morse.json";

export default {
  name: "App",
  data() {
    return {
      alphabet: morse,
    };
  },
  components: {
    CharacterBoard,
  },
};
</script>
