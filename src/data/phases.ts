import {
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileChartColumn,
  FilePenLine,
  FileSearch,
  FileText,
  FolderSearch,
  Lightbulb,
  ListChecks,
  Rocket,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Deliverable = {
  label: string
  path: string
}

export type Step = {
  label: string
  icon: LucideIcon
}

export type Benefit = {
  label: string
  icon: LucideIcon
}

export type Phase = {
  id: string
  number: number
  title: string
  shortTitle: string
  color: string
  accent: string
  objective: string
  whatIsDone: string[]
  methodology: string[]
  deliverables: Deliverable[]
  steps: Step[]
  benefits: Benefit[]
  references: string[]
  icon: LucideIcon
  kitPath: string
  kitReady?: boolean
}

export const references = {
  publicSector: ['Ley N.° 27658', 'D.S. N.° 004-2013-PCM'],
  privateSector: ['NTP-ISO 9001:2015', 'ISO 9001:2015', 'BPM CBOK'],
}

export const phases: Phase[] = [
  {
    id: 'fase-1',
    number: 1,
    title: 'Recuperación de información',
    shortTitle: 'Recuperación de información',
    color: '#07998f',
    accent: '#e9fffb',
    objective: 'Obtener información clave del proceso.',
    whatIsDone: [
      'Revisar documentos',
      'Entrevistar responsables',
      'Recolectar datos clave',
    ],
    methodology: [
      'BPM',
      'NTP-ISO 9001:2015',
      'ISO 9001:2015',
      'Enfoque por procesos',
    ],
    deliverables: [
      {
        label: 'Plantilla de levantamiento',
        path: '/downloads/fase-1/01_Plantilla_Levantamiento_Procesos_PierreR.pdf',
      },
      {
        label: 'Guía de entrevistas',
        path: '/downloads/fase-1/02_Guia_Entrevista_Procesos_PierreR.pdf',
      },
      {
        label: 'Formato de registro',
        path: '/downloads/fase-1/03_Formato_Registro_Entrevista_PierreR.pdf',
      },
    ],
    steps: [
      { label: 'Identificar', icon: Search },
      { label: 'Revisar', icon: FileText },
      { label: 'Entrevistar', icon: Users },
      { label: 'Validar', icon: ShieldCheck },
      { label: 'Documentar', icon: ClipboardCheck },
    ],
    benefits: [
      { label: 'Claridad del proceso', icon: Lightbulb },
      { label: 'Mejora continua', icon: TrendingUp },
      { label: 'Estandarización', icon: CheckCircle2 },
      { label: 'Mejor toma de decisiones', icon: Users },
    ],
    references: [
      'Ley N.° 27658',
      'D.S. N.° 004-2013-PCM',
      'NTP-ISO 9001:2015',
      'ISO 9001:2015',
      'BPM CBOK',
    ],
    icon: FolderSearch,
    kitPath: '/downloads/fase-1/kit-fase-1.zip',
    kitReady: true,
  },
  {
    id: 'fase-2',
    number: 2,
    title: 'Proceso de análisis',
    shortTitle: 'Proceso de análisis',
    color: '#075bd8',
    accent: '#eef5ff',
    objective:
      'Analizar la información levantada para identificar problemas, oportunidades y mejoras del proceso.',
    whatIsDone: [
      'Organizar la información recopilada',
      'Analizar tiempos, roles y actividades',
      'Identificar cuellos de botella y brechas',
      'Priorizar hallazgos relevantes',
    ],
    methodology: [
      'BPM',
      'Análisis AS-IS',
      'NTP-ISO 9001:2015',
      'Enfoque por procesos',
    ],
    deliverables: [
      { label: 'Matriz de hallazgos', path: '/downloads/fase-2/matriz-hallazgos.txt' },
      { label: 'Mapa de proceso AS-IS', path: '/downloads/fase-2/mapa-proceso-as-is.txt' },
      { label: 'Ficha de brechas', path: '/downloads/fase-2/ficha-brechas.txt' },
      { label: 'Reporte de análisis', path: '/downloads/fase-2/reporte-analisis.txt' },
    ],
    steps: [
      { label: 'Consolidar', icon: Database },
      { label: 'Analizar', icon: BarChart3 },
      { label: 'Detectar brechas', icon: FileSearch },
      { label: 'Priorizar', icon: Target },
      { label: 'Validar', icon: ShieldCheck },
    ],
    benefits: [
      { label: 'Visión crítica', icon: Search },
      { label: 'Detección de mejoras', icon: Lightbulb },
      { label: 'Priorización', icon: ListChecks },
      { label: 'Mejor decisión', icon: Users },
    ],
    references: [
      'Ley N.° 27658',
      'D.S. N.° 004-2013-PCM',
      'NTP-ISO 9001:2015',
      'ISO 9001:2015',
      'BPM CBOK',
    ],
    icon: BarChart3,
    kitPath: '/downloads/fase-2/kit-fase-2.zip',
  },
  {
    id: 'fase-3',
    number: 3,
    title: 'Resultado y documentación',
    shortTitle: 'Resultado y documentación',
    color: '#6b31c9',
    accent: '#f5efff',
    objective:
      'Consolidar los hallazgos y documentar de forma clara el proceso, los resultados y las oportunidades de mejora.',
    whatIsDone: [
      'Consolidar hallazgos del análisis',
      'Documentar el proceso actual y sus brechas',
      'Redactar conclusiones y evidencias',
      'Preparar la propuesta de mejora',
    ],
    methodology: [
      'BPM',
      'Gestión documental',
      'NTP-ISO 9001:2015',
      'Enfoque por procesos',
    ],
    deliverables: [
      { label: 'Informe de resultados', path: '/downloads/fase-3/Informe_Resultados.pdf' },
      {
        label: 'Mapa del proceso documentado',
        path: '/downloads/fase-3/Mapa_Proceso.pdf',
      },
      { label: 'Matriz de brechas', path: '/downloads/fase-3/Excel_Matriz_Brechas.xlsx' },
      { label: 'Ficha de indicadores', path: '/downloads/fase-3/Ficha_Indicadores.pdf' },
    ],
    steps: [
      { label: 'Consolidar', icon: FileChartColumn },
      { label: 'Redactar', icon: FilePenLine },
      { label: 'Diagramar', icon: ListChecks },
      { label: 'Revisar', icon: Search },
      { label: 'Aprobar', icon: CheckCircle2 },
    ],
    benefits: [
      { label: 'Trazabilidad', icon: TrendingUp },
      { label: 'Estandarización', icon: ShieldCheck },
      { label: 'Claridad documental', icon: FileText },
      { label: 'Base para mejora', icon: BarChart3 },
    ],
    references: [
      'Ley N.° 27658',
      'D.S. N.° 004-2013-PCM',
      'NTP-ISO 9001:2015',
      'ISO 9001:2015',
      'BPM CBOK',
    ],
    icon: FileChartColumn,
    kitPath: '/downloads/fase-3/kit-fase-3.zip',
    kitReady: true,
  },
  {
    id: 'fase-4',
    number: 4,
    title: 'Pasos a seguir',
    shortTitle: 'Pasos a seguir',
    color: '#ff6b00',
    accent: '#fff3e8',
    objective:
      'Definir acciones de mejora, responsables, plazos e implementación para optimizar el proceso.',
    whatIsDone: [
      'Definir acciones de mejora',
      'Asignar responsables y recursos',
      'Establecer cronograma y prioridades',
      'Implementar y hacer seguimiento',
    ],
    methodology: [
      'BPM',
      'Plan de acción',
      'NTP-ISO 9001:2015',
      'Enfoque de mejora continua',
    ],
    deliverables: [
      { label: 'Plan de acción', path: '/downloads/fase-4/plan-accion.txt' },
      {
        label: 'Cronograma de implementación',
        path: '/downloads/fase-4/cronograma-implementacion.txt',
      },
      { label: 'Matriz de seguimiento', path: '/downloads/fase-4/matriz-seguimiento.txt' },
      { label: 'Reporte de mejora', path: '/downloads/fase-4/reporte-mejora.txt' },
    ],
    steps: [
      { label: 'Definir', icon: Target },
      { label: 'Asignar', icon: Users },
      { label: 'Programar', icon: CalendarDays },
      { label: 'Ejecutar', icon: Rocket },
      { label: 'Monitorear', icon: BarChart3 },
    ],
    benefits: [
      { label: 'Acciones claras', icon: ClipboardCheck },
      { label: 'Mejora continua', icon: TrendingUp },
      { label: 'Seguimiento', icon: Search },
      { label: 'Mejor toma de decisiones', icon: Users },
    ],
    references: [
      'Ley N.° 27658',
      'D.S. N.° 004-2013-PCM',
      'NTP-ISO 9001:2015',
      'ISO 9001:2015',
      'BPM CBOK',
    ],
    icon: ClipboardCheck,
    kitPath: '/downloads/fase-4/kit-fase-4.zip',
  },
]
