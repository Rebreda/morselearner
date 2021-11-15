<template>
  <v-btn-toggle v-model="characterToggle" v-on:change="onToggle" multiple>
    <v-btn>
      <v-icon>mdi-alphabetical-variant</v-icon>
      <span class="hidden-sm-and-down"> Letters </span>
    </v-btn>
    <v-btn>
      <v-icon>mdi-numeric</v-icon>
      <span class="hidden-sm-and-down"> Numbers </span>
    </v-btn>
    <v-btn>
      <v-icon>mdi-exclamation-thick</v-icon>
      <span class="hidden-sm-and-down">Punctuation</span>
    </v-btn>
  </v-btn-toggle>
</template>

<script>
export default {
  methods: {
    onToggle(e) {
      this.$emit("change", e);
    },
  },
  data: () => {
    return {
      characterToggle: [],
    };
  },
};
</script>