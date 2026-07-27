import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { PrescriptionStage } from '@/domain/model'
import type { ScientificLensId } from '@/domain/science'

export const useWorkspaceStore = defineStore('workspace', () => {
  const activeStage = ref<PrescriptionStage>('effective')
  const activeLens = ref<ScientificLensId>('coaching')

  function selectStage(stage: PrescriptionStage) {
    activeStage.value = stage
  }

  function selectLens(lens: ScientificLensId) {
    activeLens.value = lens
  }

  return {
    activeStage,
    activeLens,
    selectStage,
    selectLens,
  }
})
