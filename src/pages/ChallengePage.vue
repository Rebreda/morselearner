<template>
  <div>
    <v-main>
      <v-container fluid>
        <character-board :letters="alphabet" />
      </v-container>
    </v-main>
  </div>
</template>

<script>
import CharacterBoard from "../components/CharacterBoard.vue";
import morse from "../data/morse.json";

export default {
  name: "ChallengePage",
  data() {
    return {
      alphabet: morse,
    };
  },
  components: {
    CharacterBoard,
  },
  metaInfo() {
    return {
      title: "Ditted.codes - Learn morse code",
      meta: [
        {
          vmid: "Learn morse code easily",
          name: "Learn morse code easily",
          content: "Learn morse code easily",
        },
      ],
    };
  },
};
</script>
