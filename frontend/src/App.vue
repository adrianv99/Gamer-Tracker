<template>
  <v-app id="app">
    <v-content>
     
          <router-view></router-view>
    
    </v-content>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {

  },

  data: () => ({
    
  }),
};
</script>


<style>
#app {
    background-color: rgb(66, 66, 65);
}
</style>