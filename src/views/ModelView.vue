<script setup lang="ts">
import Card from 'primevue/card'
import Tag from 'primevue/tag'

import { SCIENTIFIC_INVARIANTS } from '@/domain/science'
</script>

<template>
  <section class="space-y-8">
    <div>
      <Tag severity="info" value="Architecture boundary" />
      <h1 class="mb-3 mt-4 text-4xl font-black tracking-tight">The simple mental model</h1>
      <p class="m-0 max-w-3xl text-lg leading-8 text-muted">
        Complexity belongs inside versioned scientific mappings. Product code should mostly work
        with prescriptions, observations, decisions and projections.
      </p>
    </div>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <Card
        v-for="item in [
          ['1', 'Intent', 'Goals, constraints and session purpose'],
          ['2', 'Prescription', 'Planned and accepted effective work'],
          ['3', 'Reality', 'Performed work and athlete observations'],
          ['4', 'Projection', 'Traceable scientific interpretations'],
        ]"
        :key="item[0]"
        class="border border-line shadow-none"
      >
        <template #title>
          <span class="text-base">{{ item[0] }}. {{ item[1] }}</span>
        </template>
        <template #content>
          <p class="m-0 text-sm leading-6 text-muted">{{ item[2] }}</p>
        </template>
      </Card>
    </div>

    <Card class="border border-line shadow-none">
      <template #title>Scientific guardrails</template>
      <template #content>
        <ul class="m-0 grid gap-3 pl-5 md:grid-cols-2">
          <li v-for="invariant in SCIENTIFIC_INVARIANTS" :key="invariant" class="leading-6">
            {{ invariant }}
          </li>
        </ul>
      </template>
    </Card>
  </section>
</template>
