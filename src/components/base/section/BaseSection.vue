<script setup lang="ts">
type Props = {
  title: string
}

defineProps<Props>()
</script>

<template>
  <section class="container my-16">
    <h2 class="text-4xl mb-8">{{ title }}</h2>
    <div>
      <slot />
    </div>
  </section>
</template>
