<template>
  <div class="apex">

  <Nav activeColor="#ed3b3b" ></Nav>
    
    <v-container>

      <v-snackbar
      v-model="errorAlert"
      top
    >
      <h2>Fill the whole form</h2> 
      <v-btn
        color="red"
        text
        @click="errorAlert = false"
      >
        Close
      </v-btn>
    </v-snackbar>

      <v-layout wrap mt-12>
        <v-flex md8 sm8 offset-md-2>
          <v-card dark class="pa-12">
            <v-form @submit.prevent="submitForm">

              <h1 color="success">Track an apex player</h1>
              <v-divider
                class="mx-4 my-5"
                vertical
                ></v-divider>

              <v-text-field
                v-model="gamertag"
                label="Gamertag"
                required
                outlined
                ></v-text-field>

              <v-select
                :items="items"
                item-text="text"
                item-value="value"
                label="Platform"
                required
                outlined
                item-color="error"
                v-model="platform"
              ></v-select>

              <v-card-actions>
                <v-btn
                  color="error"
                  text
                  x-large
                  type="submit"
                >
                  SUBMIT
                </v-btn>
              </v-card-actions>
            </v-form>
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

export default {
  name: 'Home',
  components: {
    Nav,
    Footer
  },
  data(){
    return{
      errorAlert: false,
      gamertag: '',
      platform: '',
      items: [
        { text:'PlayStation', value:'psn'},
        { text:'Xbox', value:'xbl'},
        { text:'Origin', value:'Origin'}
      ]
    }
  },
  methods: {
    submitForm(){
        if(!this.gamertag || !this.platform){
          this.errorAlert = true;
        }
        else{
          this.$router.push(`/apex/${this.gamertag}/${this.platform}`)
        }
    }
  },
}
</script>


<style  scoped>
  .spacer-footer{
    margin-top: 105px;
  }
</style>