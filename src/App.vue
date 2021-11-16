<template>
  <v-app>
    <v-navigation-drawer app>
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <character-board :letters="alphabet" />
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import CharacterBoard from "./components/CharacterBoard.vue";
import morse from "./data/morse.json";

export default {
  name: "App",
  data() {
    return {
      alphabet: morse,
    };
  },
  components: {
    CharacterBoard,
  },
};
</script>
