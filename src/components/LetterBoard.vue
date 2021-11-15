<template>
  <div class="">
    <v-container>
      <div
        class="board"
        v-for="character in Object.entries(letters)"
        :key="character[0]"
      >
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
  created() {
    console.log(this.letters);
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
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
</style>
