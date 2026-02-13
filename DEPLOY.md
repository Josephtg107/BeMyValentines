# Cómo publicar tu página de San Valentín ❤️

¡Todo está listo! Aquí tienes las formas más fáciles de poner tu página en internet para que ella la vea.

## Opción 1: Vercel (Recomendado y más rápido) 🚀

Es la mejor opción para aplicaciones React como esta.

1.  **Abre la terminal** en esta carpeta (si no estás ya).
2.  Si no tienes Vercel instalado, ejecuta:
    ```bash
    npm install -g vercel
    ```
3.  Una vez instalado, ejecuta:
    ```bash
    vercel login
    ```
    (Sigue los pasos para iniciar sesión con GitHub, GitLab o tu correo).
4.  Finalmente, publica tu página con:
    ```bash
    vercel
    ```
5.  Presiona `Enter` a todas las preguntas (acepta los valores por defecto).
6.  ¡Listo! En unos segundos te dará un link (ej: `bemyvalentines.vercel.app`) para enviárselo.

## Opción 2: Netlify Drop (Sin consola) 📂

Si prefieres no usar comandos.

1.  Ya he generado la carpeta **`dist`** en tu proyecto con el comando de construcción.
2.  Entra a [https://app.netlify.com/drop](https://app.netlify.com/drop).
3.  Arrastra la carpeta `dist` (que está dentro de tu carpeta `BeMyValentines`) y suéltala en el navegador.
4.  Se subirá inmediatamente y te dará un link que puedes copiar y compartir.

## Opción 3: GitHub Pages (Más técnico) 🐙

1.  Sube este proyecto a un nuevo repositorio en tu cuenta de GitHub llamado `BeMyValentines`.
2.  Entra a la configuración del repositorio (`Settings`).
3.  Ve a `Pages` en el menú lateral.
4.  En **Build and deployment** > **Source**, asegúrate de que esté en "Deploy from a branch".
5.  En **Branch**, selecciona `main` y en la carpeta elige `/ (root)`.
6.  **IMPORTANTE**: Como es una aplicación React (Vite), GitHub Pages intentará servir el `index.html` de la raíz, pero el real está en la carpeta `dist`.
    -   **Recomendación**: Usa el comando `npm install gh-pages --save-dev` y configura el script `"deploy": "gh-pages -d dist"` en tu `package.json` para subirlo fácilmente.

---
**¡Mucha suerte!** Espero que diga que sí (aunque con esta página es seguro). 💘
