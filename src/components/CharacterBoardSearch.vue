<template>
  <v-text-field label="Search Characters" prepend-icon="mdi-magnify" />
</template>


<script>
export default {
  props: {
    characters: Object,
  },
  data() {
    return {
      searchText: "",
    };
  },
};
</script>