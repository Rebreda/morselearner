import * as Tone from "tone"
const DIT = 0.2;
const DAH = DIT * 3;
/**
 * 
 * @param {string} pattern
 * @returns object 
 */
const makeCharacter = (pattern) => {

    let synth = new Tone.Synth().toDestination();
    const arr = pattern.split("");
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
      this.currentCharacterIndex = c;
      c += 1;
      if (c === arr.length) {
        this.isPlaying = false;
        Tone.Transport.stop();
        seq.dispose();
      }

      synth.triggerAttackRelease("C3", duration, t + a);
    }, mapped).start(0);
    Tone.Transport.start();
}

export default makeCharacter