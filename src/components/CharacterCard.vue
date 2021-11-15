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
      <v-btn text color="deep-purple accent-4"> Play Tone </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import * as Tone from "tone";
export default {
  name: "CharacterCard",
  props: {
    value: String,
    pattern: String,
    type: String,
  },
  methods: {
    playTone() {
      const osc = new Tone.Oscillator().toDestination();
      // repeated event every 8th note
      Tone.Transport.scheduleRepeat((time) => {
        // use the callback time to schedule events
        osc.start(time).stop(time + 0.1);
      }, "8n");
      // transport must be started before it starts invoking events
      Tone.Transport.start();
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
