<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const category = route.name
</script>

<template>
  <div>
    <h1>{{ category }}</h1>
  </div>
</template>
