<template>
  <v-slide-x-transition class="character-set d-flex" group tag="div">
    <div v-for="(char, index) in characters" :key="char.value + index">
      <character-card
        :value="char.value"
        :pattern="char.pattern"
        :type="char.type"
        :isCurrent="char.isCurrent"
        :isCorrect="char.isCorrect"
        :isAnswered="char.isAnswered"
        :showCharacter="false"
        v-if="char.isAnswered || char.isCurrent"
      />
    </div>
  </v-slide-x-transition>
</template>

<script>
import CharacterCard from "../CharacterCard.vue";

export default {
  components: { CharacterCard },
  props: {
    current: {
      type: String,
    },
    characters: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.character-set {
  overflow-x: auto;
}
</style>