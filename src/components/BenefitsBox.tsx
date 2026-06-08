import { TrendingUp } from 'lucide-react'
import type { Phase } from '../data/phases'

type BenefitsBoxProps = {
  phase: Phase
}

export function BenefitsBox({ phase }: BenefitsBoxProps) {
  return (
    <section className="info-box benefits-box" aria-labelledby="benefits-heading">
      <div className="box-icon green">
        <TrendingUp size={34} aria-hidden="true" />
      </div>
      <div>
        <h2 id="benefits-heading">Beneficios</h2>
        <div className="benefits-grid">
          {phase.benefits.map((benefit) => {
            const Icon = benefit.icon

            return (
              <div className="benefit" key={benefit.label}>
                <span className="benefit-icon">
                  <Icon size={28} aria-hidden="true" />
                </span>
                <span>{benefit.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
