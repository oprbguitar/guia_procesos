import { ClipboardList, FileDown, Settings, Target } from 'lucide-react'
import type { CSSProperties } from 'react'
import type { Phase } from '../data/phases'
import { DeliverablesList } from './DeliverablesList'
import { StepsTimeline } from './StepsTimeline'

type PhasePanelProps = {
  phase: Phase
}

export function PhasePanel({ phase }: PhasePanelProps) {
  const phaseStyle = {
    '--phase-color': phase.color,
    '--phase-accent': phase.accent,
  } as CSSProperties

  return (
    <section
      className="phase-panel"
      style={phaseStyle}
      aria-live="polite"
    >
      <aside className="current-phase">
        <span className="current-number">{phase.number}</span>
        <span className="current-label">Fase actual</span>
        <h2>{phase.title}</h2>
        <div className="objective">
          <Target size={42} aria-hidden="true" />
          <p>
            <strong>Objetivo:</strong> {phase.objective}
          </p>
        </div>
      </aside>

      <div className="panel-main" key={phase.id}>
        <div className="panel-columns">
          <article className="panel-column">
            <div className="section-title colored">
              <ClipboardList size={38} aria-hidden="true" />
              <h3>¿Qué se hace?</h3>
            </div>
            <ul>
              {phase.whatIsDone.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="panel-column">
            <div className="section-title blue-title">
              <Settings size={38} aria-hidden="true" />
              <h3>Metodología</h3>
            </div>
            <ul>
              {phase.methodology.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="panel-column deliverables-column">
            <div className="section-title green-title">
              <FileDown size={38} aria-hidden="true" />
              <h3>Entregables</h3>
            </div>
            <DeliverablesList deliverables={phase.deliverables} />
          </article>
        </div>

        <StepsTimeline phase={phase} />
      </div>
    </section>
  )
}
