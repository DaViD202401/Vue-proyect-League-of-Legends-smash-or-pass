<template>

<input
class="search"
placeholder="Buscar campeón..."
v-model="store.search"
/>

</template>

<script setup>

import { useChampionStore } from '../stores/championStore'

const store = useChampionStore()

</script>