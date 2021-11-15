<template>
  <div class="letter">
    <div class="text-h1">
      {{ value }}
    </div>
    <button @click="playTone">Play tone</button>
  </div>
</template>

<script>
import * as Tone from "tone";
// import Tone from 'tone'
export default {
  name: "HelloWorld",
  props: {
    value: String,
    tonePattern: Array,
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
