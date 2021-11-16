<template>
  <v-hover>
    <v-card class="mx-2 my-2 letter">
      <v-card-text>
        <div></div>
        <div class="text-center">
          <p class="text-h1 text--primary">
            {{ value }}
          </p>
          <div class="text-h2 text--primary">
            {{ pattern }}
          </div>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="deep-purple accent-4" @click="playTone">
          <v-icon> mdi-play-circle </v-icon>
          Play Tone
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "CharacterCard",
  props: {
    value: String,
    pattern: String,
    type: String,
  },
  methods: {
    playTone() {
      // create a new synth
      this.$Tone.Transport.stop();
      let synth = new this.$Tone.Synth().toDestination();
      const arr = this.pattern.split("");
      let now = this.$Tone.now();
      arr.forEach((note) => {
        now += 1;
        const duration = note === "-" ? "8n" : "32n";
        synth.triggerAttackRelease("B3", duration, now);
      });
      this.$Tone.Transport.start();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.letter {
  min-width: 300px;
  max-width: 400px;
  flex: 1 1 auto;
}
</style>
