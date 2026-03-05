<template>

<div class="card">

  <img :src="imageUrl" :alt="champion.name">

  <h2>{{ champion.name }}</h2>

</div>

</template>

<script>

export default{

  props:["champion"],

  computed:{

    imageUrl(){
      return `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${this.champion.image.full}`
    }

  }

}

</script>