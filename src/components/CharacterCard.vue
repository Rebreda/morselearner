<template>
  <v-hover>
    <v-card class="mx-2 my-2 letter" :color="isCurrent ? 'primary' : ''">
      <v-card-text>
        <div class="text-center">
          <p class="text-h1 text--primary" v-if="showCharacter">
            {{ value }}
          </p>
          <div class="text-h2 text--primary">
            {{ pattern }}
          </div>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="deep-purple accent-4"
          @click="playTone"
          :disabled="isPlaying"
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
    showCharacter: {
      type: Boolean,
      default: true,
    },
  },
  data: () => {
    return {
      isPlaying: false,
    };
  },
  methods: {
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
