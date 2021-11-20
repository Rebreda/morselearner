<template>
  <div>
    <v-main>
      <v-container>
        <character-set :characters="word" class="my-2" />
        <answer-input @answerChange="handleAnswer" />
        <v-btn> Generate Challenge </v-btn>
        <v-btn> Submit Answer </v-btn>
        <p class="text-h1">
          {{ answer }}
        </p>
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
  },
  components: {
    CharacterSet,
    AnswerInput,
  },
  methods: {
    handleAnswer(e) {
      this.answer = e;
      const ansLength = this.answer.length;
      const reset = {
        isCorrect: false,
        isCurrent: true,
        isAnswered: false,
      };

      if (ansLength < 1) {
        this.$set(this.word, 0, { ...this.word[0], ...reset });
        return;
      }

      const currentCharacter = this.answer[ansLength - 1];
      const currentQuestion = this.word[ansLength - 1];
      if (currentCharacter === currentQuestion.value) {
        const t = {
          ...currentQuestion,
          isCorrect: true,
          isCurrent: false,
          isAnswered: true,
        };
        this.$set(this.word, ansLength - 1, t);
      } else {
        const t = {
          ...currentQuestion,
          isCorrect: false,
          isCurrent: true,
          isAnswered: true,
        };
        this.$set(this.word, ansLength - 1, t);
      }
    },
    generateWord(chars) {
      return (Math.random() + 1)
        .toString(36)
        .substring(7)
        .split("")
        .map((s, i) => {
          const questionCharacter = {
            isAnswered: false,
            isCorrect: false,
            isCurrent: false,
          };
          if (i === 0) {
            questionCharacter.isCurrent = true;
          }
          return { ...chars[s], ...questionCharacter };
        });
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
