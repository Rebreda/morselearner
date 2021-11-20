<template>
  <v-slide-x-transition class="character-set d-flex" group tag="div">
    <template v-for="(char, index) in characters">
      <character-card
        :key="char.value + index"
        :value="char.value"
        :pattern="char.pattern"
        :type="char.type"
      />
    </template>
  </v-slide-x-transition>
</template>

<script>
import CharacterCard from "../CharacterCard.vue";

export default {
  components: { CharacterCard },
  props: {
    characters: {
      type: Array,
    },
  },
};
</script>