# Contexto del proyecto — Portafolio Allan Velásquez

**Fecha de generación:** 24 de noviembre de 2026
**Destinatario:** agente de IA que tome contacto en una futura tarea (para no perder el contexto).

---

## 1. Resumen ejecutivo

Portafolio profesional estático (HTML5/CSS3/JS) del **Ingeniero Químico Industrial Allan Fernando Velasquez Corea**, posicionado para el mercado laboral español. Sitio desplegado en `https://allanvelasquez.netlify.app/` (Netlify, rama `main` del repositorio).

---

## 2. Repositorio y despliegue

- **Repo:** `/home/portales/Github/Portafolio_Web_AV`
- **Remote origin:** `git@github.com:Chucklagos/Portafolio_Web_AV.git`
- **Rama de despliegue:** `main` (solo rama activa).
- **Sitio desplegado:** `https://allanvelasquez.netlify.app/`
  - El deployed era la versión anterior (título "Allan Velásquez - Ingeniero Químico Industrial"); se reemplazó por la v2 tras pushes.
  - Verificado con `curl` que el HTML desplegado contiene las secciones nuevas (p.ej. "Ingeniería de procesos, producción y operaciones industriales").

---

## 3. Stack tecnológico

- **HTML5** semántico (`main`, `article`, `time`, `nav`, `header`, `footer`, `section`).
- **CSS3** propio en `style.css` (sin Bootstrap en la v2; el stack Bootstrap 5.3.3 del sitio original se eliminó intencionalmente para un diseño propio, sin cambio de dependencias estructurales).
- **JS propio** en `script.js` (no hay framework ni librerías de JS instaladas).
- **Iconos:** Bootstrap Icons v1.13.2 via CDN (`https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.2/font/bootstrap-icons.min.css`). Iconos usados y verificados contra el CSS del CDN: `bi-shield-check`, `bi-globe-americas`, `bi-record-circle-fill`, `bi-award`, `bi-gear`, `bi-speedometer`, `bi-building-fill`, `bi-cpu`, `bi-tools`, `bi-flask`, `bi-arrow-repeat`, `bi-person`, `bi-file-earmark-pdf-fill`, etc.
- **Tipografías:** Inter + Space Grotesk (Google Fonts via CDN).
- **CSS estático en línea?** No — `style.css` separado.

---

## 4. Inventario de archivos

| Archivo | Tamaño aprox. | Rol |
|---|---|---|
| `index.html` | ~25.6 KB | Página principal completa (todas las secciones). |
| `style.css` | ~23.3 KB | Estilos (sistema de diseño v2). |
| `script.js` | ~3.7 KB | JS: menú móvil, scroll smooth, reveal por IntersectionObserver. |
| `favicon.svg` | ~0.3 KB | Favicon del sitio. |
| `sitemap.xml` | ~0.64 KB | Sitemap (URLs: repo root + index.html + img/profile.jpeg). |
| `robots.txt` | ~0.1 KB | `User-agent: *` / Sitemap → https://allanvelasquez.netlify.app/sitemap.xml |
| `README.md` | ~1.2 KB | Documentación breve del proyecto. |
| `PROJECT_CONTEXT.md` | — | Este documento (nuevo). |
| `LICENSE` | ~35 KB | Licencia (incluida, no tocar). |
| `CvJ Allan Velasquez Farmacia.pdf` | 295.087 B | CV de Allan Fernando Velasquez Corea (ver nota abajo). |
| `img/profile.jpeg` | 1200×1600 | Foto principal (Hero). |
| `img/erlenmayer.png` | 419×480 | Icono/ilustración extra (reconocida; considerar uso futuro). |
| `img/lk.png` | 512×512 | Imagen extra sin uso actual (reconocida; considerar uso futuro). |

> Verificación del PDF realizada con `pdftotext`: título "ALLAN FERNANDO VELASQUEZ COREA — INGENIERO QUÍMICO INDUSTRIAL | PROCESOS, PRODUCCIÓN Y CALIDAD", tamaño 1 página, PDF 1.5. Es el CV propio de Allan; **no implementar "experiencia farmacéutica"** por el nombre del fichero (es un CV industrial).

---

## 5. Contenido profesional (fuente de verdad)

### Person: Allan Fernando Velasquez Corea
- **Título profesional:** Ingeniero Químico Industrial | Procesos, Producción y Calidad
- **Resumen profesional:** Ingeniero Químico Industrial con equivalencia oficial al nivel de Grado en España y experiencia en supervisión de operaciones, producción industrial, control de procesos mediante sistemas SCADA, análisis fisicoquímicos y control de calidad. Experiencia en actividades de precomisionado y puesta en marcha, tratamiento de aguas, documentación técnica y aplicación de procedimientos de seguridad y calidad. Orientado a la mejora continua, la eficiencia operativa, la resolución de incidencias y el trabajo con equipos multidisciplinares.

### Experiencia profesional (timeline, ordenado de más reciente a más antiguo)
1. **Jefe de turno — Valogreene CML** (Madridejos, España) — Junio 2026 – Actualidad *(elemento con mayor protagonismo, "Actualidad" chip)*
   - Participación en precomisionado de instrumentación y pruebas funcionales de equipos.
   - Supervisión de operaciones por turnos y orientación del personal operativo.
   - Seguimiento del funcionamiento de equipos industriales.
   - Monitorización y control de variables de proceso mediante SCADA.
   - Identificación de anomalías y desviaciones operativas.
   - Identificación de oportunidades de mejora en equipos e instalaciones.
   - Elaboración de procedimientos, informes de turno y documentación técnica.
   - Tags asociados: Supervisión de turnos, Sistemas SCADA, Optimización de operaciones, Documentación técnica.
2. **Operario de producción — Biocom Energia S.L.** (Cuenca, España) — Junio 2025 – Mayo 2026
   - Monitorización/control SCADA, verificación parámetros, controles de calidad, tratamiento de aguas, desviaciones, optimización de procesos.
   - Tags: Monitorización SCADA, Control de calidad, Tratamiento de aguas, Optimización de procesos.
3. **Técnico de laboratorio químico — Inversiones Ecotek** (Colón, Honduras) — Marzo 2023 – Junio 2023
   - Gestión de reactivos/equipos, BPL e ISO/IEC 17025, análisis fisicoquímicos (pH, turbidez, dureza), métodos analíticos alternativos.
   - Tags: Laboratorio químico, Análisis fisicoquímicos, ISO/IEC 17025, Buenas Prácticas de Laboratorio.

### Formación académica
- **Ingeniería Química Industrial — Universidad Nacional Autónoma de Honduras** — Período 2015 – 2022.
- **Tarjeta de equivalencia:** "Equivalencia oficial al nivel de Grado en España — Ministerio de Ciencia, Innovación y Universidades — 2025" (destacada visualmente).

### Competencias técnicas (categorías, sin porcentajes ni barras)
- Procesos y operaciones: Supervisión de turnos, Sistemas SCADA, Control de variables de proceso, Precomisionado, Pruebas funcionales, Optimización de operaciones.
- Calidad y laboratorio: Análisis fisicoquímicos, Buenas Prácticas de Laboratorio, Trazabilidad, Documentación técnica, Tratamiento de aguas, Gestión de residuos químicos.
- Normativas y herramientas: ISO 9001, ISO 14001, ISO/IEC 17025, ISO 22000, ISO 22005, Microsoft Excel intermedio.
- Competencias profesionales: Supervisión operativa, Resolución de problemas, Mejora continua, Orientación a resultados, Trabajo en equipo, Comunicación técnica, Adaptabilidad.

### Formación complementaria
- Protocolo IFS y BRC en seguridad alimentaria (2026).
- Manipulador de alimentos (2024).
- Seguridad e higiene industrial (2022).
- Calidad total (2022).

### Contacto
- Teléfono: +34 624 81 39 13 (`href="tel:+34624813913"`).
- Correo: fercore07@gmail.com.
- LinkedIn: https://www.linkedin.com/in/allan-fernando-velasquez-corea-29a45221a/
- Formulario de contacto: **eliminado** (sin función real; evitar señal de "envío simulado").

---

## 6. Sistema de diseño (v2)

### Paleta (`style.css` `:root`)
```
--bg: #F8FAFC
--card: #FFFFFF
--card-alt: #F1F5F9
--ink: #0F172A          (texto principal)
--ink-soft: #475569
--muted: #475569
--line: #E2E8F0
--blue: #2563EB         (acento principal)
--blue-corp: #1E3A5F
--blue-dark: #0F172A
--blue-hover: #1D4ED8
--blue-light: #DBEAFE
--green: #15803D        (verde accesible con texto blanco, ≥4.5:1)
--gold: #B45309         (equivalencia de grado)
--hero-bg: linear-gradient(135deg, #0F172A 0%, #1E3A5F 60%, #133157 100%)
```
> Verificado contraste WCAG de los textos sobre fondos clave con script (≥4.5).

### Tipografía
- Cuerpo: `var(--font-body)` = "Inter" (+ fallbacks).
- Títulos: `var(--font-display)` = "Space Grotesk" (+ fallbacks).
- Sizes: `h1.hero-name` clamp(2.2rem, 6vw, 3.75rem); `h2` clamp(1.5rem, 3.5vw, 2.2rem); `h3` 1.18rem.

### Grid/padding
- `--max-w: 1180px`, `--pad-y: clamp(2.25rem, 5vw, 3.5rem)`, `--pad-x: clamp(1rem, 3vw, 1.5rem)`.
- Queries: ≤1023px (1 col, áreas 3-col), ≤768px (menú móvil, áreas 2-col, cards 2-col), ≤640px (iconos md/lg reducidos), ≤420px (1 col final).

### Componentes con reglas importantes
- `.icon-wrap` — `display: grid; place-items: center; line-height: 1;` (centrado de iconos resp. cajas).
- `.reveal` — animación scroll; **guardado con `body.js-loaded`**: sin JS, todo visible (opacidad 1); con JS, visible al entrar en viewport.
- `.timeline` (OL) reset de listas — sin marcadores (`list-style: none`).
- `ul, ol` reset global: `list-style: none; padding: 0; margin: 0`.

---

## 7. JavaScript (`script.js`)
- Menú móvil toggle (`aria-expanded`).
- Scroll smooth entre anclas + activación `aria-current` de nav.
- Sombra del hero al hacer scroll (`.is-scrolled`).
- IntersectionObserver scroll-reveal (solo si `prefers-reduced-motion: reduce` no está activo).
- Se añade clase `js-loaded` a `<body>` para el guard de `.reveal`.

---

## 8. SEO y datos estructurados

- **meta description** actualizada a 2026 (menta nuevos términos de búsqueda: Jefe de turno, Supervisión industrial).
- **Open Graph:** title, description, type=website, locale es_ES, site_name, url, image (https://allanvelasquez.netlify.app/img/profile.jpeg, 1200×1600), image width/height.
- **Twitter Card:** summary_large_image.
- **canonical:** https://allanvelasquez.netlify.app/
- **Schema.org Person:** name, givenName, familyName, url, image, jobTitle, description, email, telephone, address (PostalAddress ES), sameAs (LinkedIn + GitHub).
- **robots.txt** → sitemap en https://allanvelasquez.netlify.app/sitemap.xml
- **meta keywords** incluye las cláusulas: Ingeniero químico industrial en España, Ingeniero de procesos, Supervisor de producción industrial, Jefe de turno industrial, Control de procesos SCADA, Ingeniero de producción, Control de calidad industrial, Ingenieroindustrial, Portafolio Allan Velásquez, CV Allan Velásquez.

---

## 9. Notas y estado pendiente

1. **PDF:** disponible y verificado como CV propio. Reemplazo futuro si Allan decide subir versión "Ingeniero Químico Industrial" actualizada.
2. **Formulario de contacto:** eliminado (sin función real). Contacto real vía mailto/tel/LinkedIn.
3. **Herramientas de verificación:**
   - `node --check script.js` (sintaxis JS).
   - Parser de HTML propio/script de comprobación de etiquetas, ids duplicados y hrefs de ancla (salida: "HTML well-formedness: OK").
   - Balance de llaves/paréntesis en CSS.
   - Smoke test local con `python3 -m http.server` + `curl`.
4. **Atención futura:** mantener alineación de los iconos en `.area-card` (flex columna), reset de `ul/ol` en nav, usar `--green: #15803D` (contraste WCAG verificado).

---

## 10. Historial de commits (main → origin)

- `c456dbc` — Actualiza el LinkedIn a la URL correcta (`.in/allan-fernando-velasquez-corea-29a45221a/`).
- `bedae58` — Responsive exhaustivo: reset ul/ol, iconos centrados, eliminación del formulario de contacto.
- `5eb7bcd` — Mejoras responsivas: centrados de iconos, timeline móvil, hero-graphic sin desborde.
- `3622181` — Iteración 2.1: entrada animada en scroll con guardia js-loaded.
- `c8880db` — Iteración 2 de diseño: hero profesional, sistema de diseño (paleta #0F172A, #1E3A5F, #2563EB), Sobre mí 2 columnas, Áreas sección oscura, timeline, Formación con tarjeta de equivalencia, Competencias 2x2.
- `235b155` — Portafolio profesional: Actualización completa + URLs de SEO con allanvelasquez.netlify.app.
- `fc1210e` — reestructuración completa de la landing page (v1 Bootstrap).
