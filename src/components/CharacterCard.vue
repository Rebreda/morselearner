<template>
  <v-card class="mx-2 my-2 letter">
    <v-card-text>
      <div>
        <v-chip class="ma-2" color="pink" label text-color="white">
          <v-icon left> mdi-label </v-icon>
          {{ type }}
        </v-chip>
      </div>
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
        Play Tone
      </v-btn>
    </v-card-actions>
  </v-card>
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
      // synth.triggerAttackRelease("G4", "4n");
      const arr = this.pattern.split("");
      let now = this.$Tone.now();
      arr.forEach((s, index) => {
        now += 1;
        const note = s;
        const duration = note === "-" ? "8n" : "32n";
        console.log(duration, index, note);
        synth.triggerAttackRelease("B3", duration, now);
      });
      console.log(this.$Tone.Transport);
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
