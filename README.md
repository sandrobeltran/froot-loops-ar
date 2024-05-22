# Edugami - AR

## Pasos para desplegar proyecto de Astro

Al ser Astro un generador de sitios estáticos, el proceso de despliegue es muy sencillo, ya que cualquier servidor puede entregar estos archivos con facilidad. Primero compilamos el proyecto con el comando `npm run build`. Seguido de esto veremos que se creará una nueva carpeta llamada `dist` en la raíz del proyecto, esta carpeta contiene los archivos estáticos generados por astro de manera compacta. En la carpeta `dist` está el archivo `index.html` que es la entrada de la plataforma y la página que se renderizará cuando se acceda a la ruta `/` . Una vez completado lo anterior solo es cuestión de desplegar esos archivos en un servidor para que estén disponibles desde cualquier lugar.