<template>

<div class="container py-4">

<h1 class="text-center mb-4">
League Champion Voting
</h1>

<SearchBar />

<FilterSort />

<div v-if="store.loading" class="text-center mt-4">
  Cargando campeones...
</div>

<div v-if="store.error" class="alert alert-danger">
  {{store.error}}
</div>

<div class="vote-center">
  <VoteSection v-if="store.currentChampion"/>
</div>

<ChampionList/>

</div>

</template>

<script setup>

import { onMounted } from 'vue'
import { useChampionStore } from '../stores/championStore'

import SearchBar from '../components/SearchBar.vue'
import FilterSort from '../components/FilterSort.vue'
import VoteSection from '../components/VoteSection.vue'
import ChampionList from '../components/ChampionList.vue'

const store = useChampionStore()

onMounted(()=>{
  store.fetchChampions()
})

</script>