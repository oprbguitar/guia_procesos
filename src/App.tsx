import { useState } from 'react'
import './App.css'
import { BenefitsBox } from './components/BenefitsBox'
import { DownloadKitButton } from './components/DownloadKitButton'
import { Header } from './components/Header'
import { PhaseFlow } from './components/PhaseFlow'
import { PhasePanel } from './components/PhasePanel'
import { ReferencesBox } from './components/ReferencesBox'
import { phases } from './data/phases'
import type { Phase } from './data/phases'

function App() {
  const [activePhase, setActivePhase] = useState<Phase>(phases[0])

  return (
    <main className="app-shell">
      <Header />
      <div className="content-shell">
        <PhaseFlow
          phases={phases}
          activePhase={activePhase}
          onSelectPhase={setActivePhase}
        />
        <PhasePanel phase={activePhase} />
        <div className="bottom-grid">
          <BenefitsBox phase={activePhase} />
          <ReferencesBox />
          <DownloadKitButton phase={activePhase} />
        </div>
      </div>
    </main>
  )
}

export default App
