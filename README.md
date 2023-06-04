# Proyecto de Reto

Este proyecto contiene una solución para el reto planteado, que consiste en una aplicación de backend desarrollada en Nest con TypeScript y MongoDB, así como una aplicación de frontend desarrollada en ViteJS, React, TypeScript y React Router DOM.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **sql**: Directorio que contiene archivos relacionados con consultas SQL.
  - **query.sql**: Archivo con la consulta solicitada para el reto.
  - **README.md**: Archivo con la descripción de la solución del reto.

- **backend**: Directorio que contiene la aplicación de backend desarrollada en Nest con TypeScript y MongoDB.
  - **docker-compose.yaml**: Archivo de configuración para ejecutar la aplicación antes de lanzarla con `pnpm start:dev`.

- **frontend**: Directorio que contiene la aplicación de frontend desarrollada en ViteJS, React, TypeScript y React Router DOM.
  - Antes de lanzar la aplicación de frontend, asegúrate de haber lanzado primero el backend.

## Instrucciones de Uso

1. Clona este repositorio en tu máquina local.
2. Acceder a las carpetas "backend" y "frontend" y ejecutar el comando `pnpm install` en cada una de ellas.
3. Nota: la versión del pnpm y no es
```bash
pnpm -v
8.6.0
node -v
v16.17.0
```
4. Configura y ejecuta la aplicación de backend siguiendo las instrucciones en el directorio "backend".
5. Asegúrate de que la aplicación de backend esté en funcionamiento antes de continuar.
6. Configura y ejecuta la aplicación de frontend siguiendo las instrucciones en el directorio "frontend".
7. Accede a la aplicación de frontend en tu navegador y comienza a utilizarla.
