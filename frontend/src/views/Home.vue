<template>
  <div class="home">
      <Nav activeColor="white" ></Nav>
      <v-container>

        <h1 class="white--text my-5 text-center font-weight-bold display-2">
          Gamer Tracker
        </h1>
        <v-layout wrap class="text-center secon--text">
          <v-flex md3 xs12 sm12 class="mx-12">
            <v-icon x-large class="pa-5 display-2" color="secon">
              mdi-gamepad
            </v-icon>
            <p class="secon--text">Pick a game.</p>
          </v-flex>
          <v-flex md3 xs12 sm12 class="mx-12">
            <v-icon x-large class="pa-5 display-2" color="secon">
              mdi-account
            </v-icon>
            <p class="secon--text">Enter your gamertag.</p>
          </v-flex>
          <v-flex md3 xs12 sm12 class="mx-12">
            <v-icon x-large class="pa-5 display-2" color="secon">
              mdi-chart-bar
            </v-icon>
            <p class="secon--text">See your stats.</p>
          </v-flex>
        </v-layout>

        <v-divider class="secon my-12"></v-divider>

        <h1 class="white--text my-5 text-center font-weight-bold display-2 ">
          Available games
        </h1>
        <v-carousel
          cycle
          height="500"
          hide-delimiter-background
          show-arrows-on-hover
          style="border-radius: 5px;"
        >
          <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div color="secondary"> 
                <v-btn text x-large color="secon" :to='item.link'>
                  <h2 >{{item.title}}</h2>
                </v-btn>
               </div>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-container>

      <Footer activeColor="white"></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default {
  name: 'Home',
  components: {
    Nav,
    Footer
  },
  data(){
    return{
      items: [
          {
            src: require('@/assets/apex.jpg'),
            title: 'Apex Legends',
            link: '/apex'
          },
          {
            src: require('@/assets/overwatch.jpg'),
            title: 'Overwatch',
            link: '/overwatch'
          },
          {
            src: require('@/assets/division2.jpg'),
            title: "The Division 2",
            link: '/division2'
          }
        ],
    }
  }
}
</script>


<style  scoped>

</style>