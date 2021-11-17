<template>
  <div>
    <v-main>
      <v-container fluid>
        <v-row class="prompt-row">
          <v-card
            disabled
            hover
            to="/challenge"
            class="prompt text-center py-10 px-2 my-2"
            max-width="400"
            outlined
          >
            <v-icon size="72"> mdi-gamepad </v-icon>
            <div class="mt-2 text-center">
              <h5 class="text-h5">Game Mode</h5>
            </div>
            <v-card-text
              >Learn by doing - get challenged by prompts of morse code. Make
              mistakes, practice and have fun doing so.
            </v-card-text>

            <v-card-actions>
              <v-btn outlined text class="mx-auto"> Play now </v-btn>
            </v-card-actions>
          </v-card>

          <v-card
            hover
            to="/review"
            class="prompt text-center py-10 px-2 my-2"
            max-width="400"
            outlined
          >
            <v-icon size="72"> mdi-book-open-blank-variant </v-icon>
            <div class="mt-2 text-center">
              <h5 class="text-h5">Morse Code Alphabet</h5>
            </div>
            <v-card-text>
              Quickly check out all symbols and patterns of morse code with
              tones and easy to understand visuals.
            </v-card-text>
            <v-card-actions class="text-center">
              <v-btn outlined text class="mx-auto"> Learn more </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {};
  },
  components: {},
  metaInfo() {
    return {
      title: "MorseLearner - Learn morse code",
      meta: [
        {
          vmid: "Learn morse code easily",
          name: "Learn morse code easily",
          content: "Learn morse code easily",
        },
      ],
    };
  },
};
</script>

<style scoped>
.prompt-row {
  justify-content: center;
  margin: 8% 0;
}
.prompt {
  flex: 1 1 auto;
  margin: 0 2%;
}
</style>