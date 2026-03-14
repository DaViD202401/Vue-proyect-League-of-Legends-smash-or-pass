<template>

<div class="card champion-card shadow">

  <img
    :src="img"
    class="card-img-top"
  />

  <div class="card-body text-center">

    <h4 class="card-title">
      {{champion.name}}
    </h4>

  </div>

</div>

</template>

<script setup>

import { computed } from 'vue'

const props = defineProps(['champion'])

const img = computed(() =>
`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${props.champion.image.full}`
)

</script>