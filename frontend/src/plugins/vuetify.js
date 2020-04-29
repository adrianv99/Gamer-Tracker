import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#ee44aa',
        secon: '#ebebeb',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        overwatch: '#218ffe',
        division2: '#FF6D10',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
});
