import type { CSSProperties } from 'react'
import type { Phase } from '../data/phases'

type StepsTimelineProps = {
  phase: Phase
}

export function StepsTimeline({ phase }: StepsTimelineProps) {
  const phaseStyle = { '--phase-color': phase.color } as CSSProperties

  return (
    <ol className="steps-timeline" style={phaseStyle}>
      {phase.steps.map((step, index) => {
        const Icon = step.icon

        return (
          <li key={step.label}>
            <span className="step-index">{index + 1}</span>
            <span className="step-icon">
              <Icon size={34} aria-hidden="true" />
            </span>
            <span className="step-label">{step.label}</span>
          </li>
        )
      })}
    </ol>
  )
}
