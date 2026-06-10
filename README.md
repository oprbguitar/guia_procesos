# MAPEA - Guía dinámica de procesos

Página web interactiva de una sola vista para la guía “¿Cómo mapear los flujos de procesos de esta entidad?”. La app permite seleccionar 4 fases del flujo MAPEA y actualizar dinámicamente el panel central sin navegar, recargar ni abrir nuevas páginas.

---

## Ejecutar Offline y Autoejecutable (Fácil)

El proyecto incluye un script autoejecutable para Windows que inicia la aplicación automáticamente sin necesidad de internet ni configuraciones complejas. Solo debes hacer doble clic en el siguiente archivo en la raíz del proyecto:

```text
iniciar_guia.bat
```

Este script detectará de forma inteligente tu entorno local para iniciar la guía:
1. **Con Node.js (Recomendado):** Si tienes Node.js instalado, instalará las dependencias si faltan (`npm install`), iniciará el servidor de desarrollo offline (`npm run dev`) y abrirá automáticamente tu navegador en `http://localhost:5173`.
2. **Con Python:** Si no cuentas con Node.js pero sí con Python, iniciará un servidor web local liviano que sirve la carpeta precompilada (`dist/`) con redirección de rutas y abrirá automáticamente tu navegador en `http://localhost:8080/guia_procesos/`.

---

## Ejecutar manualmente (Instalación fácil)

Si prefieres ejecutar los comandos manualmente o te encuentras en otro sistema operativo (macOS o Linux):

### Opción A: Con Node.js (Recomendado)
1. Instala las dependencias necesarias:
   ```bash
   npm install
   ```
2. Ejecuta el servidor local de desarrollo:
   ```bash
   npm run dev
   ```
3. Abre tu navegador web en la dirección indicada por la consola (normalmente `http://localhost:5173`).

### Opción B: Con Python (Solo visualización de la compilación)
Si deseas ver la versión de producción ya compilada (`dist`) sin instalar Node.js:
1. Ejecuta el script de servidor de redirección:
   ```bash
   python serve_offline.py
   ```
2. Abre tu navegador web en `http://localhost:8080/guia_procesos/`.

---

## Compilar y previsualizar en local

Si deseas compilar la aplicación para generar los archivos listos para producción:

```bash
npm run build
npm run preview
```

---

## Estructura de Documentos Descargables (Entregables)

Los documentos fuente reales se encuentran organizados dentro de `docs/` por fase de proceso. Para que la web pueda servirlos de forma estática y permitir su descarga, están almacenados en `public/downloads/`:

```text
docs/recuperacion e informacion/  -> public/downloads/fase-1/
docs/proceso de analisis/          -> public/downloads/fase-2/
docs/resultado y documentacion/    -> public/downloads/fase-3/
docs/pasos a seguir/               -> public/downloads/fase-4/
```

### Documentos oficiales cargados:
- **Fase 1 (Recuperación de información):**
  - `01_Plantilla_Levantamiento_Procesos_PierreR.pdf`
  - `02_Guia_Entrevista_Procesos_PierreR.pdf`
  - `03_Formato_Registro_Entrevista_PierreR.pdf`
  - Kit completo: `kit-fase-1.zip`
- **Fase 2 (Proceso de análisis):**
  - `Ficha_de_Brechas.docx`
  - `Mapa_de_Proceso_AS-IS.docx`
  - `Matriz_de_Hallazgos.xlsx`
  - `Reporte_de_Analisis.docx`
  - Kit completo: `kit-fase-2.zip`
- **Fase 3 (Resultado y documentación):**
  - `Informe_Resultados.pdf`
  - `Mapa_Proceso.pdf`
  - `Excel_Matriz_Brechas.xlsx`
  - `Ficha_Indicadores.pdf`
  - Kit completo: `kit-fase-3.zip`
- **Fase 4 (Pasos a seguir):**
  - `Plan_de_Accion.docx`
  - `Cronograma_de_Implementacion.xlsx`
  - `Matriz_de_Seguimiento.xlsx`
  - `Reporte_de_Mejora.docx`
  - Kit completo: `kit-fase-4.zip`

Todos los kits completos en formato `.zip` están habilitados y listos para descarga.

---

## Editar Contenidos

Los textos, colores, entregables, pasos, beneficios y referencias se configuran en:

```text
src/data/phases.ts
```

---

## GitHub Pages

El proyecto se despliega automáticamente en GitHub Pages usando GitHub Actions cuando se hace push a la rama `main`. El archivo de workflow se encuentra en:

```text
.github/workflows/deploy.yml
```
