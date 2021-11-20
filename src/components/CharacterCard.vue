<template>
  <v-hover>
    <v-card class="mx-2 my-2 letter" :color="hasClass">
      <v-card-text>
        <div class="text-center">
          <div v-if="showCharacter">
            <p class="text-h1 text--primary">
              {{ value }}
            </p>
            <div class="text-h2 text--primary">
              {{ pattern }}
            </div>
          </div>
          <div v-else>
            <div class="text-h1 text--primary">
              {{ pattern }}
            </div>
          </div>
        </div>
      </v-card-text>
      <v-card-actions class="d-flex">
        <v-btn
          outlined
          text
          color="secondary"
          @click="playTone"
          :disabled="isPlaying"
          class="mr-2"
        >
          <span v-if="!isPlaying">
            <v-icon> mdi-play-circle </v-icon>
            Play Tone
          </span>
          <span v-else>
            <v-icon> mdi-play-speaker </v-icon>
            Playing
          </span>
        </v-btn>

        <div v-if="!showCharacter" class="ml-auto">
          <v-tooltip bottom v-if="!isRevealed">
            <template v-slot:activator="{ on, attrs }">
              <v-btn @click="revealAnswer" icon v-bind="attrs" v-on="on">
                <v-icon> mdi-eye-outline </v-icon>
              </v-btn>
            </template>
            <span> Click to see answer </span>
          </v-tooltip>
          <v-btn v-else text>
            {{ value }}
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
import * as Tone from "tone";

export default {
  name: "CharacterCard",
  props: {
    value: String,
    pattern: String,
    type: String,
    isCurrent: {
      type: Boolean,
      default: false,
    },
    isCorrect: {
      type: Boolean,
      default: false,
    },
    isAnswered: {
      type: Boolean,
      default: false,
    },
    showCharacter: {
      type: Boolean,
      default: true,
    },
  },
  data: () => {
    return {
      isPlaying: false,
      isRevealed: false,
    };
  },
  computed: {
    hasClass() {
      if (this.isCorrect && this.isAnswered) return "success";
      if (!this.isCorrect && this.isAnswered) return "warning";
      if (this.isCurrent) return "primary";
      return "";
    },
  },
  methods: {
    revealAnswer() {
      this.isRevealed = true;
    },
    playTone() {
      const DIT = 0.2;
      const DAH = DIT * 3;

      this.isPlaying = true;
      let synth = new Tone.Synth().toDestination();
      const arr = this.pattern.split("");
      let counter = 0;
      //convert -/. to number, keep track of timing
      const mapped = arr.map((char) => {
        const val = char === "-" ? DAH : DIT;

        let t = { duration: val, time: counter };
        counter += DIT + val;
        return t;
      });
      let c = 0;
      let t = Tone.now();
      const seq = new Tone.Part((time, { duration, time: a }) => {
        c += 1;
        if (c === arr.length) {
          this.isPlaying = false;
          Tone.Transport.stop();
          seq.dispose();
        }
        synth.triggerAttackRelease("C3", duration, t + a);
      }, mapped).start(0);
      Tone.Transport.start();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.letter {
  flex: 1 1 auto;
}
</style>
