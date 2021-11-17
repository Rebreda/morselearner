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

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
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
};
</script>
