<template>
<div>

    <v-card
        color="grey lighten-4"
        flat
        tile
    >
        <v-toolbar dense height="85px" dark fixed>
        
            <v-btn text to="/">
                <v-toolbar-title v-bind:style="{ color: activeColor }" >
                    Gamer Tracker
                </v-toolbar-title>
            </v-btn>


            <v-spacer></v-spacer>

            <div class="hidden-sm-and-down" v-for="(item, index0) in menu" :key="index0">
                <v-btn text class="mx-5" :to="item.link">
                    <h2 v-bind:style="{ color: activeColor }" > {{item.title}} </h2>
                </v-btn>
            </div>
            <div class="hidden-md-and-up">
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            </div>

        </v-toolbar>
        
    </v-card>

    <v-navigation-drawer
    v-model="drawer"
    absolute
    dark
    temporary
    >
        <div v-for="(item, index2) in menu" :key="index2">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>
                        <v-btn text class="mx-5" :to="item.link">
                            <h2 v-bind:style="{ color: activeColor }" > {{item.title}} </h2>
                        </v-btn>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
        </div>
    </v-navigation-drawer>

</div>
</template>


<script>
export default {
    name: "Nav",
    data(){
        return{
        //nav menu
          menu: [
            { link: '/apex', title: 'APEX' },
            { link: '/overwatch', title: 'OVERWATCH' },
            { link: '/division2', title: 'DIVISION 2' }
        ],
        drawer: false
        }
    },
    props: ['activeColor'],
}
</script>
