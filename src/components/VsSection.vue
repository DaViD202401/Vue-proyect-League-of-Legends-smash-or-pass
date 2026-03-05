<template>

<div class="vs-container">

  <ChampionCard :champion="champion" />

  <div class="buttons">

    <div class="vote-block">

      <button class="like" @click="$emit('like')">
        💓 Smash
      </button>

      <p class="counter">{{ likes }}</p>

    </div>

    <div class="vote-block">

      <button class="dislike" @click="$emit('dislike')">
        ✖️ Pass
      </button>

      <p class="counter">{{ dislikes }}</p>

    </div>

  </div>

</div>

</template>

<script>

import ChampionCard from "./ChampionCard.vue"

export default{

  props:[
    "champion",
    "likes",
    "dislikes"
  ],

  components:{
    ChampionCard
  }

}

</script>