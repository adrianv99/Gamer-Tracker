<template>
    <div>
        
    <v-footer
    dark
    >
        <v-card
        flat
        tile
        width="100%"
        class="lighten-1 text-center"
        >
            <v-card-text>
                <v-btn
                v-for="(link, index) in links"
                :key="index"
                color="white"
                text
                @click="openTab(link.url)"
                >
                    <div v-bind:style="{ color: activeColor }">
                        {{ link.name }}
                    </div>
                </v-btn>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                <strong 
                    v-bind:style="{ color: activeColor }" 
                > 
                    {{ new Date().getFullYear() }} — Adrian Viñas
                </strong>
            </v-card-text>
            
        </v-card>
    </v-footer>

    
    </div>
</template>

<script>
export default {
    name: "Footer",
    data(){
        return{
          links: [ 
              {
                  name: "GITHUB",
                  url: "https://github.com/adrianv99"
              },
              {
                  name: "INSTAGRAM",
                  url: "https://www.instagram.com/adrianvns/"
              },
            ]
        }
    },
    props: ['activeColor'],
    methods: {
        openTab(url){
            window.open(url);
        }
    },
}
</script>