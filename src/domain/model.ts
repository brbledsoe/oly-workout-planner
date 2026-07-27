export type PrescriptionStage = 'planned' | 'effective' | 'performed'

export type KnowledgeStatus = 'known' | 'unknown' | 'not_applicable'

export type AdjustmentReason = 'readiness' | 'time' | 'safety' | 'equipment'

export interface ActivityDose {
  sets?: number
  reps?: number
  durationMinutes?: number
  intensityPct1Rm?: number
  rpeTarget?: number
}

export interface ActivityPrescription {
  id: string
  activityId: string
  name: string
  dose: ActivityDose
  optional?: boolean
}

export interface SessionPrescription {
  id: string
  name: string
  scheduledDate: string
  stage: PrescriptionStage
  version: number
  activities: readonly ActivityPrescription[]
  sourcePrescriptionId?: string
  decisionIds?: readonly string[]
}

export interface SessionAdjustment {
  id: string
  reason: AdjustmentReason
  note: string
  removeActivityIds: readonly string[]
}

export interface ProjectionAssertion {
  id: string
  lensId: string
  conceptId: string
  sourceFactIds: readonly string[]
  sourceStage: PrescriptionStage
  status: KnowledgeStatus
  value?: number
  unit?: string
  confidence?: number
  modelVersion?: string
}

export function applySessionAdjustment(
  source: SessionPrescription,
  adjustment: SessionAdjustment,
): SessionPrescription {
  const removed = new Set(adjustment.removeActivityIds)

  return {
    ...source,
    id: `${source.id}:effective:${adjustment.id}`,
    stage: 'effective',
    version: source.version + 1,
    sourcePrescriptionId: source.id,
    decisionIds: [...(source.decisionIds ?? []), adjustment.id],
    activities: source.activities.filter((activity) => !removed.has(activity.id)),
  }
}

export function chooseCurrentPrescription(
  planned: SessionPrescription,
  effective?: SessionPrescription,
): SessionPrescription {
  return effective ?? planned
}
