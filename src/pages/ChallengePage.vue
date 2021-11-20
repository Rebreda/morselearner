<template>
  <div>
    <v-main>
      <v-container>
        <character-set :characters="word" class="my-2" />
        <answer-input @answerChange="handleAnswer" />
        <v-btn> Generate Challenge </v-btn>
        <v-btn> Submit Answer </v-btn>
        {{ answer }}
      </v-container>
    </v-main>
  </div>
</template>

<script>
import AnswerInput from "../components/challenge/AnswerInput.vue";
import CharacterSet from "../components/challenge/CharacterSet.vue";
import morse from "../data/morse.json";
import { transformData } from "../utils/transformer.js";

export default {
  name: "ChallengePage",
  data() {
    return {
      word: [],
      chars: {},
      answer: "",
    };
  },
  created() {
    this.chars = transformData(morse);
    this.word = this.generateWord(this.chars);
    // this.chars = transformData(morse);
    console.log("created", this.chars, this.word);
  },
  components: {
    CharacterSet,
    AnswerInput,
  },
  methods: {
    handleAnswer(e) {
      this.answer = e;
    },
    generateWord(chars) {
      return (Math.random() + 1)
        .toString(36)
        .substring(7)
        .split("")
        .map((s) => chars[s]);
    },
  },
  metaInfo() {
    return {
      title: "Ditted.codes - Learn morse code",
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
