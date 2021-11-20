<template>
  <v-app>
    <v-app-bar app flat>
      <router-link to="/">
        <v-app-bar-nav-icon>
          <img src="@/assets/favicon-32x32.png" />
        </v-app-bar-nav-icon>
      </router-link>
      <v-toolbar-title>ditted.codes</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon @click="changeTheme" v-bind="attrs" v-on="on">
            <v-icon>mdi-theme-light-dark</v-icon>
          </v-btn>
        </template>
        <span> Toggle dark mode </span>
      </v-tooltip>

      <v-btn icon href="https://github.com/gabehab/morselearner">
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.isDarkMode = this.$vuetify.theme.dark;
    },
  },
  created() {
    if (localStorage.isDarkMode === "true") {
      this.$vuetify.theme.dark = !!localStorage.isDarkMode;
    }
  },
};
</script>
