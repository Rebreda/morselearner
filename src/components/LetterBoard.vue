<template>
  <div class="">
    <v-container class="board">
      <div v-for="character in Object.entries(letters)" :key="character[0]">
        <morse-letter :value="character[0]" v-bind="character[1]" />
      </div>
    </v-container>
  </div>
</template>

<script>
import MorseLetter from "./MorseLetter.vue";
export default {
  components: { MorseLetter },
  name: "HelloWorld",
  props: {
    letters: Object,
  },
  computed: {
    characters() {
      return Object.entries(this.letters);
    },
    cols() {
      return Math.ceil(this.letters.length / 6);
    },
  },
  data: function () {
    return {};
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
