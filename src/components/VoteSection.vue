<template>

<div class="vote-container">

  <ChampionCard :champion="champion"/>

  <div class="vote-buttons">

    <button
      class="btn btn-success btn-lg"
      @click="store.likeChampion(champion.id)"
    >
      💓 Smash
    </button>

    <button
      class="btn btn-danger btn-lg"
      @click="store.dislikeChampion(champion.id)"
    >
      ❌ Pass
    </button>

    <button
      class="btn btn-warning btn-lg"
      @click="store.toggleFavorite(champion.id)"
    >
      ⭐ Favorito
    </button>

  </div>

</div>

</template>

<script setup>

import { computed } from 'vue'
import { useChampionStore } from '../stores/championStore'
import ChampionCard from './ChampionCard.vue'

const store = useChampionStore()

const champion = computed(()=> store.currentChampion)

</script>