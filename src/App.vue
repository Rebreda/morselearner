<template>
  <v-app>
    <v-main>
      <LetterBoard :letters="alphabet" />
    </v-main>
  </v-app>
</template>

<script>
import LetterBoard from "./components/LetterBoard";
import morse from "./data/morse.json";

export default {
  name: "App",
  data() {
    return {
      alphabet: morse,
    };
  },
  components: {
    LetterBoard,
  },
};
</script>
