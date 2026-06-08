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

Los documentos fuente pueden organizarse en `docs/` por carpeta de proceso. Para que GitHub Pages pueda descargarlos, deben existir también dentro de `public/downloads/`, que es la carpeta pública servida por Vite:

```text
docs/recuperacion e informacion/
docs/resultado y documentacion/

public/downloads/fase-1/
public/downloads/fase-2/
public/downloads/fase-3/
public/downloads/fase-4/
```

Actualmente las fases 1 y 3 usan documentos reales:

```text
public/downloads/fase-1/01_Plantilla_Levantamiento_Procesos_PierreR.pdf
public/downloads/fase-1/02_Guia_Entrevista_Procesos_PierreR.pdf
public/downloads/fase-1/03_Formato_Registro_Entrevista_PierreR.pdf

public/downloads/fase-3/Informe_Resultados.pdf
public/downloads/fase-3/Mapa_Proceso.pdf
public/downloads/fase-3/Excel_Matriz_Brechas.xlsx
public/downloads/fase-3/Ficha_Indicadores.pdf
```

Las fases 2 y 4 conservan placeholders `.txt` con el mensaje:

```text
Archivo preliminar. Será reemplazado por la documentación oficial proporcionada por Pierre R.
```

Cuando existan los documentos finales de otra fase, colócalos en `docs/` para respaldo, cópialos a `public/downloads/fase-n/` para publicación y actualiza la propiedad `path` de cada entregable en `src/data/phases.ts`. Por ejemplo:

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
