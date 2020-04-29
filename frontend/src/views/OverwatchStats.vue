<template>
    <div>
    <Nav activeColor="#218ffe" ></Nav>

    <v-container>
        <v-layout justify-center aling-center mt-12>
            <v-flex md12>
                <div v-if="Loading" class="text-center mt-12">
                    <v-progress-circular 
                    indeterminate
                    color="overwatch"
                    >
                    </v-progress-circular>
                </div>

                <div v-if="NotFound" >
                    <v-alert
                    border="right"
                    colored-border
                    type="error"
                    color="overwatch"
                    elevation="2"
                    dark
                    >
                    Player not found...
                    </v-alert>

                    <v-btn x-large dark class="mt-5" @click="goBack" >Go back</v-btn>
                </div>
            </v-flex>
        </v-layout>
    </v-container>


    <v-container>
        <v-layout >
            <v-flex >
                <v-card dark class="pa-8" v-if="Profile">
                    <v-layout wrap>
                        <v-flex sm12 >
                            <h1 class="text-center overwatch--text" >{{ Profile.platformInfo.platformUserHandle }}</h1>
                        </v-flex>
                    </v-layout>
                    <v-layout class="mt-12" wrap>
                        <v-flex  xs6 class="pa-5">
                            <h2 class="text-center grey--text ">Eliminations: <span class="overwatch--text">{{Profile.segments[0].stats.eliminations.displayValue}}</span></h2>
                        </v-flex>
                        <v-flex  xs6 class="pa-5">
                            <h2 class="text-center grey--text ">Medals: <span class="overwatch--text">{{Profile.segments[0].stats.medals.displayValue}}</span></h2>
                        </v-flex>
                        <v-flex  xs6 class="pa-5">
                            <h2 class="text-center grey--text ">Cards: <span class="overwatch--text">{{Profile.segments[0].stats.cards.displayValue}}</span></h2>
                        </v-flex>
                        <v-flex  xs6 class="pa-5">
                            <h2 class="text-center grey--text ">Healing done: <span class="overwatch--text">{{Profile.segments[0].stats.healingDone.displayValue}}</span></h2>
                        </v-flex>
                        <v-flex  xs6 class="pa-5">
                            <h2 class="text-center grey--text ">Damage done: <span class="overwatch--text">{{Profile.segments[0].stats.damageDone.displayValue}}</span></h2>
                        </v-flex>
                        <v-flex  xs6 class="pa-5">
                            <h2 class="text-center grey--text ">Deaths: <span class="overwatch--text">{{Profile.segments[0].stats.deaths.displayValue}}</span></h2>
                        </v-flex>
                        <v-flex  xs6 class="pa-5">
                            <h2 class="text-center grey--text ">Wins: <span class="overwatch--text">{{Profile.segments[0].stats.wins.displayValue}}</span></h2>
                        </v-flex>
                        <v-flex  xs6 class="pa-5">
                            <h2 class="text-center grey--text ">Time played: <span class="overwatch--text">{{Profile.segments[0].stats.timePlayed.displayValue}}</span></h2>
                        </v-flex>
                        <v-flex  xs6 class="pa-5">
                            <v-btn x-large dark  class="mt-5" @click="goBack" >Go back</v-btn>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>


    <div class="spacer-footer">
      <Footer activeColor="#218ffe"></Footer>
    </div>

    </div>
</template>


<script>
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import axios from 'axios';

//toxc_dj05
export default {
  name: 'Home',
  components: {
    Nav,
    Footer
  },
  data(){
    return{
        Loading: false,
        NotFound: false,
        Profile: null
    }
  },
  methods: {
    goBack(){
        this.$router.push('/overwatch');
    }
  },
  async created(){
      this.Loading = true;
       try{
           const response = await axios.get(`/api/overwatch/${this.$route.params.platform}/${this.$route.params.gamertag}`);
           this.Profile = response.data.data;
           console.log(this.Profile);
           this.Loading = false;
       }catch(error){
           console.log(error);
            this.Loading = false;
            this.NotFound = true;
       }
  }
}
</script>


<style scoped>
.spacer-footer{
    margin-top: 450px;
  }
</style>