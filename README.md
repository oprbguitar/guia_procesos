# MAPEA - Guía dinámica de procesos

Página web interactiva de una sola vista para la guía “¿Cómo mapear los flujos de procesos de esta entidad?”. La app permite seleccionar 4 fases del flujo MAPEA y actualizar dinámicamente el panel central sin navegar, recargar ni abrir nuevas páginas.

## Ejecutar el proyecto

```bash
npm install
npm run dev
```

## Compilar y previsualizar

```bash
npm run build
npm run preview
```

## Editar contenidos

Los textos, colores, entregables, pasos internos, beneficios y referencias por fase están en:

```text
src/data/phases.ts
```

Cada fase usa estos campos principales:

```text
id, number, title, shortTitle, color, accent, objective,
whatIsDone, methodology, deliverables, steps, benefits, references
```

Para cambiar el color de una fase, edita `color` y `accent` en el objeto correspondiente. La interfaz usa esos valores para resaltar la tarjeta activa, el panel lateral, viñetas y línea de pasos.

## Reemplazar documentos descargables

Los archivos preliminares están organizados en:

```text
public/downloads/fase-1/
public/downloads/fase-2/
public/downloads/fase-3/
public/downloads/fase-4/
```

Actualmente son placeholders `.txt` con el mensaje:

```text
Archivo preliminar. Será reemplazado por la documentación oficial proporcionada por Pierre R.
```

Cuando existan los documentos finales, colócalos en esas carpetas y actualiza la propiedad `path` de cada entregable en `src/data/phases.ts`. Por ejemplo:

```ts
{
  label: 'Plantilla de levantamiento',
  path: '/downloads/fase-1/plantilla-levantamiento.docx',
}
```

## Kits por fase

Cada fase tiene una ruta preparada para ZIP:

```text
/downloads/fase-1/kit-fase-1.zip
/downloads/fase-2/kit-fase-2.zip
/downloads/fase-3/kit-fase-3.zip
/downloads/fase-4/kit-fase-4.zip
```

Mientras los ZIP no existan, el botón “Descargar kit de la fase” muestra el mensaje: “Kit en preparación. Los documentos serán incorporados en la siguiente versión.”

## GitHub Pages

El proyecto está preparado para GitHub Pages con Vite. En local usa base `/`; en GitHub Actions usa `/guia_procesos/`.

El workflow está en:

```text
.github/workflows/deploy.yml
```

Se ejecuta al hacer push a `main`, instala dependencias, compila el proyecto y publica `dist` en GitHub Pages.
