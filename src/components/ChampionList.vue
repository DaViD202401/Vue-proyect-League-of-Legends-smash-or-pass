<template>

<div class="list">

<ChampionCard
v-for="c in store.filteredChampions"
:key="c.id"
:champion="c"
/>

</div>

</template>

<script setup>

import { useChampionStore } from '../stores/championStore'
import ChampionCard from './ChampionCard.vue'

const store = useChampionStore()

</script>