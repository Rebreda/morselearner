<template>
  <v-container class="">
    <character-toggle v-on:change="handleToggle" />
    <v-container class="board">
      <div v-for="character in characters" :key="character[0]">
        <character-card :value="character[0]" v-bind="character[1]" />
      </div>
    </v-container>
  </v-container>
</template>

<script>
import CharacterCard from "./CharacterCard.vue";
import CharacterToggle from "./CharacterToggle.vue";
export default {
  components: { CharacterCard, CharacterToggle },
  name: "CharacterBoard",
  props: {
    letters: Object,
  },
  computed: {
    characters() {
      return Object.entries(this.letters).filter((s) => {
        let type = s[1].type;
        if (this.activeFilter.length > 0) {
          if (this.activeFilter.includes(type)) {
            return s;
          }
        } else {
          return s;
        }
      });
    },
  },
  methods: {
    handleToggle(e) {
      this.activeFilter = e.map((s) => {
        return this.filterType[s];
      });
    },
  },
  data: function () {
    return {
      filterType: ["letter", "number", "punctuation"],
      activeFilter: [],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.board {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
</style>
