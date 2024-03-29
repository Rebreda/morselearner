import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);
export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: colors.blue.darken1, // #E53935
        //   secondary: colors.blueGrey.base, // #FFCDD2
        //   accent: colors.indigo.base, // #3F51B5
        },
      },
    },
  })