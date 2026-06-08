import { BookOpen } from 'lucide-react'
import { references } from '../data/phases'

export function ReferencesBox() {
  return (
    <section className="info-box references-box" aria-labelledby="references-heading">
      <div className="box-icon blue">
        <BookOpen size={34} aria-hidden="true" />
      </div>
      <div>
        <h2 id="references-heading">Referencias</h2>
        <p>
          <strong>Sector público:</strong> {references.publicSector.join(' y ')}.
        </p>
        <p>
          <strong>Sector privado:</strong> {references.privateSector.join(', ')}.
        </p>
      </div>
    </section>
  )
}
