# Belentani — Judas Era

> Portfolio visual de Belentani: dark pop, R&B y dirección visual. La Judas Era, un universo de cristal, neón y voz.

Sitio web estático (HTML + CSS + JS vanilla) sin dependencias. Incluye estética cyberpunk/espacial, escenas visuales y capa de presentación.

## Inicio rápido

```bash
# Sirve la carpeta con cualquier servidor estático
npx serve .
# o
python -m http.server 8080
```

Abre `http://localhost:8080`.

## Despliegue

Proyecto estático: compatible con Vercel, Netlify o GitHub Pages.

- **Vercel:** `npx vercel --prod`
- **Netlify:** arrastra la carpeta al dashboard o `npx netlify deploy --prod --dir=.`
- **GitHub Pages:** publica la rama `main` (carpeta raíz).

## Estructura

```
belentani-es-neon/
├── index.html      # Página principal
├── main.js         # Punto de entrada JS
├── styles.css      # Estilos
├── assets/         # Íconos, imágenes y media
└── original/       # Versión completa original (referencia)
```

## Licencia

[MIT](LICENSE) © 2026 Pedro Belentani
