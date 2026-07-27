<script setup lang="ts">
import Card from 'primevue/card'

import type { ScientificLensDefinition } from '@/domain/science'

defineProps<{
  lens: ScientificLensDefinition
  active?: boolean
}>()

const emit = defineEmits<{
  select: [lensId: ScientificLensDefinition['id']]
}>()
</script>

<template>
  <button
    class="h-full w-full cursor-pointer rounded-2xl text-left outline-none ring-brand transition focus-visible:ring-2"
    type="button"
    :aria-pressed="active"
    @click="emit('select', lens.id)"
  >
    <Card
      class="h-full border transition"
      :class="active ? 'border-brand shadow-md' : 'border-line shadow-none hover:border-brand/50'"
    >
      <template #title>
        <span class="text-base">{{ lens.name }}</span>
      </template>
      <template #content>
        <p class="m-0 text-sm leading-6 text-muted">{{ lens.question }}</p>
      </template>
    </Card>
  </button>
</template>
