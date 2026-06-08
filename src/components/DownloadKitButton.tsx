import { ChevronRight, Download } from 'lucide-react'
import type { Phase } from '../data/phases'

type DownloadKitButtonProps = {
  phase: Phase
}

export function DownloadKitButton({ phase }: DownloadKitButtonProps) {
  const handleClick = () => {
    window.alert('Kit en preparación. Los documentos serán incorporados en la siguiente versión.')
  }

  return (
    <button
      className="kit-button"
      type="button"
      onClick={handleClick}
      aria-label={`Descargar kit de la fase ${phase.number}: ${phase.title}`}
    >
      <span className="kit-icon">
        <Download size={44} aria-hidden="true" />
      </span>
      <span>Descargar kit de la fase</span>
      <ChevronRight size={46} aria-hidden="true" />
    </button>
  )
}
