<template>

<div class="controls">

<select v-model="store.filter">
<option value="all">Todos</option>
<option value="favorites">Favoritos</option>
</select>

<select v-model="store.sort">
<option value="name-asc">Nombre A-Z</option>
<option value="name-desc">Nombre Z-A</option>
</select>

</div>

</template>

<script setup>

import { useChampionStore } from '../stores/championStore'

const store = useChampionStore()

</script>