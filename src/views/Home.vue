<template>

  <div class="container">

    <h1>¿Te gusta este campeón?</h1>

    <VsSection
      v-if="currentChampion"
      :champion="currentChampion"
      :likes="likes"
      :dislikes="dislikes"
      @like="voteLike"
      @dislike="voteDislike"
    />

  </div>

</template>

<script>

import VsSection from "../components/VsSection.vue"

export default {

  components:{ VsSection },

  data(){
    return{
      champions:[],
      currentChampion:null,
      currentIndex:0,
      likes:0,
      dislikes:0
    }
  },

  methods:{

    nextChampion(){

      this.currentIndex++

      if(this.currentIndex >= this.champions.length){
        this.currentIndex = 0
      }

      this.currentChampion = this.champions[this.currentIndex]

    },

    voteLike(){
      this.likes++
      this.nextChampion()
    },

    voteDislike(){
      this.dislikes++
      this.nextChampion()
    }

  },

  mounted(){

    fetch("https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json")
    .then(res => res.json())
    .then(data => {

      this.champions = Object.values(data.data)

      this.currentChampion = this.champions[0]

    })

  }

}

</script>