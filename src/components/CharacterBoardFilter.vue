<template>
  <div class="d-flex mx-2 my-2">
    <!-- <character-board-search @change="handleChange" /> -->
    <character-toggle @change="handleChange"/>
    <v-divider class="mb-4"></v-divider>
  </div>
</template>

<script>
// import CharacterBoardSearch from "./CharacterBoardSearch.vue";
import CharacterToggle from "./CharacterToggle.vue";

export default {
  components: { CharacterToggle },
  methods: {
    handleChange(e) {
      this.$emit("onFilter", e);
    },
  },
};
</script>