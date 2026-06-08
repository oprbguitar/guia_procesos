import { Download } from 'lucide-react'
import type { Deliverable } from '../data/phases'

type DeliverablesListProps = {
  deliverables: Deliverable[]
}

export function DeliverablesList({ deliverables }: DeliverablesListProps) {
  return (
    <div className="deliverables-list">
      {deliverables.map((deliverable) => (
        <a className="download-row" href={deliverable.path} download key={deliverable.path}>
          <span>{deliverable.label}</span>
          <Download size={22} aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}
