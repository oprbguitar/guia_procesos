import { ArrowLeft, Building2, Info, Mail, UserRound } from 'lucide-react'

export function Header() {
  return (
    <header className="hero-header">
      <a
        href="https://oprbguitar.github.io/CV/?v=6aa8181"
        className="header-back-link"
        aria-label="Retornar a mi CV"
      >
        <ArrowLeft size={18} aria-hidden="true" />
        <span>Retorno</span>
      </a>

      <div className="brand-lockup" aria-label="MAPEA Procesos que generan valor">
        <div className="brand-mark" aria-hidden="true">
          <span />
        </div>
        <div>
          <strong>MAPEA</strong>
          <small>Procesos que generan valor</small>
        </div>
      </div>

      <div className="header-center">
        <div className="author-pill">
          <UserRound size={22} aria-hidden="true" />
          <span>Guía elaborada por Pierre R.</span>
          <span className="divider" aria-hidden="true" />
          <Mail size={18} aria-hidden="true" />
          <span>correo: peru.labs.pe@gmail.com</span>
        </div>
        <h1>¿Cómo mapear los flujos de procesos de esta entidad?</h1>
        <p>Guía práctica basada en BPM, NTP-ISO 9001:2015 e ISO 9001:2015</p>
      </div>

      <aside className="guide-zone">
        <button className="guide-button" type="button" aria-label="Abrir guía informativa">
          <Info size={28} aria-hidden="true" />
          <span>Guía</span>
        </button>
        <div className="applicable">
          <Building2 size={42} aria-hidden="true" />
          <span>Aplicable a entidades públicas y privadas</span>
        </div>
      </aside>
    </header>
  )
}
