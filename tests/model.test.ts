import { describe, expect, it } from 'vitest'

import {
  applySessionAdjustment,
  chooseCurrentPrescription,
  type SessionPrescription,
} from '@/domain/model'
import { SCIENTIFIC_LENSES, SCIENTIFIC_LENS_IDS } from '@/domain/science'

const planned: SessionPrescription = {
  id: 'session-1:v1',
  name: 'Snatch + lower-body strength',
  scheduledDate: '2026-07-28',
  stage: 'planned',
  version: 1,
  activities: [
    {
      id: 'snatch',
      activityId: 'activity:snatch',
      name: 'Snatch',
      dose: { sets: 5, reps: 2, rpeTarget: 7 },
    },
    {
      id: 'accessory',
      activityId: 'activity:split-squat',
      name: 'Rear-foot-elevated split squat',
      dose: { sets: 3, reps: 8, rpeTarget: 8 },
      optional: true,
    },
  ],
}

describe('prescription history', () => {
  it('creates an effective version without mutating the planned version', () => {
    const effective = applySessionAdjustment(planned, {
      id: 'decision-tired-day',
      reason: 'readiness',
      note: 'Remove optional work after the warm-up check.',
      removeActivityIds: ['accessory'],
    })

    expect(planned.stage).toBe('planned')
    expect(planned.activities).toHaveLength(2)
    expect(effective.stage).toBe('effective')
    expect(effective.sourcePrescriptionId).toBe(planned.id)
    expect(effective.activities.map((activity) => activity.id)).toEqual(['snatch'])
  })

  it('prefers the accepted effective version while preserving the original', () => {
    const effective = applySessionAdjustment(planned, {
      id: 'decision-time-cap',
      reason: 'time',
      note: 'Fit the session into the available time.',
      removeActivityIds: ['accessory'],
    })

    expect(chooseCurrentPrescription(planned)).toBe(planned)
    expect(chooseCurrentPrescription(planned, effective)).toBe(effective)
  })
})

describe('scientific lenses', () => {
  it('keeps one stable definition for every developer-facing lens id', () => {
    expect(SCIENTIFIC_LENSES.map((lens) => lens.id)).toEqual(SCIENTIFIC_LENS_IDS)
    expect(new Set(SCIENTIFIC_LENS_IDS).size).toBe(SCIENTIFIC_LENS_IDS.length)
  })
})
