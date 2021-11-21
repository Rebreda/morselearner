<template>
  <div class="character-set d-flex">
    <v-text-field
      label="Outlined"
      placeholder="Placeholder"
      outlined
      @input="emitAnswer"
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