<script setup lang="ts">
import Button from 'primevue/button'
import Tag from 'primevue/tag'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-canvas text-ink">
    <header class="border-b border-line bg-white">
      <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <RouterLink class="flex min-w-0 items-center gap-3 no-underline" to="/">
          <span
            class="grid size-10 shrink-0 place-items-center rounded-xl bg-brand text-sm font-black text-white"
            aria-hidden="true"
          >
            OLY
          </span>
          <span class="min-w-0">
            <strong class="block truncate text-base">Oly Workout Planner</strong>
            <span class="block truncate text-xs text-muted">Scientific planning foundation</span>
          </span>
        </RouterLink>

        <nav class="flex items-center gap-2" aria-label="Main navigation">
          <Button as-child label="Planner" severity="secondary" text size="small">
            <RouterLink to="/">Planner</RouterLink>
          </Button>
          <Button as-child label="Model" severity="secondary" text size="small">
            <RouterLink to="/model">Model</RouterLink>
          </Button>
          <Tag severity="info" value="Skeleton" />
        </nav>
      </div>
    </header>

    <main class="mx-auto max-w-7xl px-5 py-8 lg:px-8">
      <slot />
    </main>
  </div>
</template>
