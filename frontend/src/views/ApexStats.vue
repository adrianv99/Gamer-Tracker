<template>
    <div>
    <Nav activeColor="#ed3b3b" ></Nav>

    <v-container>
        <v-layout justify-center aling-center mt-12>
            <v-flex md12>
                <div v-if="Loading" class="text-center mt-12">
                    <v-progress-circular 
                    indeterminate
                    color="red"
                    >
                    </v-progress-circular>
                </div>

                <div v-if="NotFound" >
                    <v-alert
                    border="right"
                    colored-border
                    type="error"
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
                            <h1 class="text-center red--text" >{{ Profile.platformInfo.platformUserHandle }}</h1>
                        </v-flex>
                    </v-layout>
                    <v-layout class="mt-12" wrap v-if="Profile">
                        <v-flex  xs6 class="pa-5">
                            <h2 class="text-center grey--text ">Level: <span class="red--text">{{Profile.segments[0].stats.level.displayValue}}</span></h2>
                        </v-flex>
                        <v-flex  xs6 class="pa-5">
                            <h2 class="text-center grey--text ">Kills: <span class="red--text">{{Profile.segments[0].stats.kills.displayValue}}</span></h2>
                        </v-flex>
                        <v-flex  xs6 class="pa-5" v-if="Profile.segments[0].stats.season3Wins.displayValue">
                            <h2 class="text-center grey--text ">Season 3 wins: <span class="red--text">{{Profile.segments[0].stats.season3Wins.displayValue}}</span></h2>
                        </v-flex>
                        <v-flex  xs6 class="pa-5" v-if="Profile.segments[0].stats.season4Wins.displayValue">
                            <h2 class="text-center grey--text ">Season 4 wins: <span class="red--text">{{Profile.segments[0].stats.season4Wins.displayValue}}</span></h2>
                        </v-flex>
                        <v-flex  xs6 class="pa-5">
                            <h2 class="text-center grey--text ">Rank score: <span class="red--text">{{Profile.segments[0].stats.rankScore.displayValue}}</span> 
                                <v-avatar size="62" class="ml-3">
                                    <img :src="Profile.segments[0].stats.rankScore.metadata.iconUrl" alt="">
                                </v-avatar>             
                            </h2>
                        </v-flex>
                        <v-flex  xs6 class="pa-5">
                            <h2 class="text-center grey--text ">Active lengend: <span class="red--text">{{Profile.metadata.activeLegendName}}</span> </h2>
                        </v-flex>
                        <v-flex  xs12 class="text-center">
                            <v-avatar size="300">
                                <img :src="Profile.segments[1].metadata.imageUrl" alt="">
                            </v-avatar>   
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
      <Footer activeColor="#ed3b3b"></Footer>
    </div>

    </div>
</template>


<script>
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import axios from 'axios';

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
        this.$router.push('/apex');
    }
  },
  async created(){
      this.Loading = true;
       try{
           const response = await axios.get(`/api/apex/${this.$route.params.platform}/${this.$route.params.gamertag}`);
           this.Profile = response.data.data;
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