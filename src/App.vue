<template>
  <v-app>
    <v-app-bar app>
      <router-link to="/">
        <v-app-bar-nav-icon>
          <img src="@/assets/favicon-32x32.png" />
        </v-app-bar-nav-icon>
      </router-link>
      <v-toolbar-title>Ditted.codes</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <v-btn icon @click="changeTheme">
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
        <span> Toggle dark and light mode </span>
      </v-tooltip>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
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
    },
  },
};
</script>
