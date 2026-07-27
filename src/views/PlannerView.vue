<script setup lang="ts">
import Button from 'primevue/button'
import Card from 'primevue/card'
import SelectButton from 'primevue/selectbutton'
import Tag from 'primevue/tag'
import { computed } from 'vue'

import LensCard from '@/components/LensCard.vue'
import type { PrescriptionStage } from '@/domain/model'
import { SCIENTIFIC_LENSES } from '@/domain/science'
import { isSupabaseConfigured } from '@/lib/supabase'
import { useWorkspaceStore } from '@/stores/workspace'

const workspace = useWorkspaceStore()

const stages: Array<{ label: string; value: PrescriptionStage }> = [
  { label: 'Planned', value: 'planned' },
  { label: 'Effective', value: 'effective' },
  { label: 'Performed', value: 'performed' },
]

const selectedLens = computed(
  () => SCIENTIFIC_LENSES.find((lens) => lens.id === workspace.activeLens) ?? SCIENTIFIC_LENSES[0],
)
</script>

<template>
  <section class="space-y-8">
    <div class="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
      <div>
        <Tag severity="success" value="Foundation ready" />
        <h1 class="mb-3 mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl">
          One training truth, viewed through many useful lenses.
        </h1>
        <p class="m-0 max-w-3xl text-lg leading-8 text-muted">
          This repository starts with the boundaries that keep plans, accepted adjustments,
          completed work and scientific projections understandable and traceable.
        </p>
      </div>

      <Card class="border border-line shadow-none">
        <template #title>
          <span class="text-base">Connection status</span>
        </template>
        <template #content>
          <div class="flex items-center justify-between gap-3">
            <span class="text-sm text-muted">Supabase environment</span>
            <Tag
              :severity="isSupabaseConfigured ? 'success' : 'secondary'"
              :value="isSupabaseConfigured ? 'Configured' : 'Local demo'"
            />
          </div>
        </template>
      </Card>
    </div>

    <Card class="border border-line shadow-none">
      <template #title>
        <div class="flex flex-wrap items-center justify-between gap-4">
          <span>Prescription state</span>
          <SelectButton
            :model-value="workspace.activeStage"
            :options="stages"
            option-label="label"
            option-value="value"
            :allow-empty="false"
            aria-label="Prescription state"
            @update:model-value="workspace.selectStage"
          />
        </div>
      </template>
      <template #content>
        <div class="grid gap-4 md:grid-cols-3">
          <div class="rounded-xl bg-slate-50 p-4">
            <span class="text-xs font-bold uppercase tracking-wider text-muted">Planned</span>
            <p class="mb-0 mt-2 text-sm leading-6">The original version the program produced.</p>
          </div>
          <div class="rounded-xl bg-brand-soft p-4">
            <span class="text-xs font-bold uppercase tracking-wider text-brand">Effective</span>
            <p class="mb-0 mt-2 text-sm leading-6">The accepted version that currently applies.</p>
          </div>
          <div class="rounded-xl bg-slate-50 p-4">
            <span class="text-xs font-bold uppercase tracking-wider text-muted">Performed</span>
            <p class="mb-0 mt-2 text-sm leading-6">What the athlete actually completed or reported.</p>
          </div>
        </div>
      </template>
    </Card>

    <section aria-labelledby="lenses-title">
      <div class="mb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 id="lenses-title" class="m-0 text-2xl font-bold">Scientific lenses</h2>
          <p class="mb-0 mt-2 text-muted">Choose how to organize the same underlying records.</p>
        </div>
        <Button as-child label="Read the model" text>
          <RouterLink to="/model">Read the model</RouterLink>
        </Button>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <LensCard
          v-for="lens in SCIENTIFIC_LENSES"
          :key="lens.id"
          :lens="lens"
          :active="workspace.activeLens === lens.id"
          @select="workspace.selectLens"
        />
      </div>

      <div class="mt-5 rounded-2xl border border-brand/20 bg-brand-soft p-5">
        <span class="text-xs font-bold uppercase tracking-wider text-brand">Selected lens</span>
        <h3 class="mb-1 mt-2 text-lg font-bold">{{ selectedLens?.name }}</h3>
        <p class="m-0 text-sm leading-6 text-ink/75">{{ selectedLens?.question }}</p>
      </div>
    </section>
  </section>
</template>
