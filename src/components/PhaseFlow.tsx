import { ChevronRight } from 'lucide-react'
import type { CSSProperties } from 'react'
import type { Phase } from '../data/phases'

type PhaseFlowProps = {
  phases: Phase[]
  activePhase: Phase
  onSelectPhase: (phase: Phase) => void
}

export function PhaseFlow({ phases, activePhase, onSelectPhase }: PhaseFlowProps) {
  return (
    <nav className="phase-flow" aria-label="Fases del flujo MAPEA">
      {phases.map((phase, index) => {
        const Icon = phase.icon
        const isActive = phase.id === activePhase.id
        const phaseStyle = {
          '--phase-color': phase.color,
          '--phase-accent': phase.accent,
        } as CSSProperties

        return (
          <div className="phase-flow-item" key={phase.id}>
            <button
              type="button"
              className={`phase-card ${isActive ? 'active' : ''}`}
              style={phaseStyle}
              onClick={() => onSelectPhase(phase)}
              aria-pressed={isActive}
              aria-label={`Seleccionar fase ${phase.number}: ${phase.title}`}
            >
              <span className="phase-number">{phase.number}</span>
              <span className="phase-icon">
                <Icon size={38} aria-hidden="true" />
              </span>
              <span className="phase-title">{phase.shortTitle}</span>
            </button>
            {index < phases.length - 1 ? <ChevronRight className="flow-arrow" /> : null}
          </div>
        )
      })}
    </nav>
  )
}
