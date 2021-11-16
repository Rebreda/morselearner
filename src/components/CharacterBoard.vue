<template>
  <v-container>
    <v-row>
      <character-board-filter @onFilter="handleToggle" />
    </v-row>
    <v-row>
      <v-slide-x-transition class="board" group tag="div">
        <template v-for="character in characters">
          <character-card
            :value="character[0]"
            v-bind="character[1]"
            :key="character[0]"
          />
        </template>
      </v-slide-x-transition>
    </v-row>
  </v-container>
</template>

<script>
import CharacterBoardFilter from "./CharacterBoardFilter.vue";
import CharacterCard from "./CharacterCard.vue";
export default {
  components: { CharacterCard, CharacterBoardFilter },
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
    handleSearch() {},
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
