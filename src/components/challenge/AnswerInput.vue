<template>
  <div class="character-set d-flex">
    <v-text-field
      label="Answers"
      class="answer"
      placeholder="Write what you see & hear here"
      @input="emitAnswer"
      solo
      single-line
      height="120px"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  props: {
    characters: {
      type: Array,
    },
  },
  methods: {
    emitAnswer(e) {
      this.$emit("answerChange", e);
    },
  },
};
</script>

<style scoped>
</style>