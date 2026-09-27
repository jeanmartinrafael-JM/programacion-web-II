# Programación Web II — Consumo de API con TypeScript

Aplicación web que consume la API pública JSONPlaceholder para mostrar
una lista de usuarios dinámicamente en el navegador. El proyecto fue
desarrollado con TypeScript, usando fetch() para las peticiones
HTTP e interfaces para tipar los datos.

## Tecnologías usadas

- TypeScript
- HTML5 + CSS (Bootstrap 5 vía CDN)
- pnpm (gestor de paquetes)
- API: [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

## Estructura del proyecto

- `src/main.ts` → lógica principal (fetch + renderizado).
- `src/interfaces/user.interface.ts` → interfaces que describen al usuario.
- `dist/` → archivos JavaScript compilados.
- `index.html` → página principal.
- `tsconfig.json` → configuración de TypeScript.

 Cómo ejecutar el proyecto

1. Clonar el repositorio:
   git clone https://github.com/jeanmartinrafael-JM/programacion-web-II.git

2. Entrar a la carpeta:
   cd programacion-web-II

3. Instalar dependencias:
   pnpm install

4. Compilar TypeScript:
   pnpm build

5. Abrir `index.html` con Live Server en VS Code
   (o cualquier servidor HTTP local).

Endpoint usado

GET https://jsonplaceholder.typicode.com/users

Autor

Jean Martin 