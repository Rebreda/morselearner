<template>
  <div>
    <v-main>
      <v-container fluid>
        <!-- If using vue-router -->
        <character-board :letters="alphabet" />
      </v-container>
    </v-main>
  </div>
</template>

<script>
import CharacterBoard from "../components/CharacterBoard.vue";
import morse from "../data/morse.json";

export default {
  name: "HomePage",
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
