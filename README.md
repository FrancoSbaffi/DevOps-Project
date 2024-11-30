# Proyecto Integrador

Este repositorio contiene un proyecto que integra los siguientes temas abordados en clase y a su vez se explica el funcionamiento de:

• Balanceo de cargas y Proxy reverso
• Almacenamiento por bloques
• Creación y despliegue de imágenes Docker
• El uso de Ramas

---

## Requisitos Previos
Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu sistema:

• Docker: Para construir y ejecutar los contenedores.
• Docker Compose: Para facilitar el despliegue de múltiples servicios.
• Git: Para clonar el repositorio y gestionar las ramas del proyecto.

---

Para verificar que tenés las herramientas instaladas, ejecutá estos comandos:

```bash
docker --version
docker-compose --version
git --version
```
---

# Configuración del proyecto

1. Tenés que clonar el repositorio a tu maquina local

```bash
git clone https://github.com/FrancoSbaffi/Proyecto-Integrador.git
cd Proyecto-Integrador
```
2. Ramas, este proyecto utiliza dos ramas principales:

• DEVELOP: Para el desarrollo y prueba de nuevas características.
• MASTER: Exclusiva para producción

(Una vez los cambios son probados en develop, se hace un pull request para poder mergear a master)

3. Balanceo de Cargas y Proxy Reverso:

El balanceo de cargas se implementa con NGINX como proxy reverso, redirigiendo el tráfico a dos aplicaciones (app1 y app2). La configuración de NGINX se encuentra en el archivo nginx/nginx.conf:

```bash
events {}

http {
    server {
        listen 80;

        # Configuración para servir el archivo site.html
        location / {
            root /usr/share/nginx/html;
            index site.html;
        }

        # Configuración para redirigir las rutas de App1
        location /app1 {
            proxy_pass http://app1:3000;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }

        # Configuración para redirigir las rutas de App2
        location /app2 {
            proxy_pass http://app2:3001;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
    }
}
```

Para personalizar el contenido de http://localhost/, se utiliza el archivo nginx/site.html.

4. Creación y despliegue de imágenes Docker

Cada aplicación y el servidor NGINX tienen su propio Dockerfile para la construcción de imágenes. El despliegue se realiza mediante Docker Compose. La configuración está en el archivo docker-compose.yml:

```bash
version: '3.8'

services:
  app1:
    build:
      context: ./app
    environment:
      - PORT=3000
    ports:
      - "3000:3000"

  app2:
    build:
      context: ./app
    environment:
      - PORT=3001
    ports:
      - "3001:3001"

  nginx:
    build:
      context: ./nginx
    ports:
      - "80:80"
    depends_on:
      - app1
      - app2
    volumes:
      - ./app/index.html:/usr/share/nginx/html/index.html
```
Para construir y levantar los servicios, ejecutá:

```bash
docker-compose build
docker-compose up -d
```

Importante, siempre usar los comandos cuando estemos dentro de la carpeta "docker".

5. Almacenamiento por Bloques

El almacenamiento por bloques se maneja específicamente en el archivo docker-compose.yml. Este archivo configura un volumen Docker que se utiliza para persistir datos de las aplicaciones.

En este archivo se define un volumen llamado docker_app_data. Este volumen se utiliza para persistir los datos necesarios para el funcionamiento de las aplicaciones.

```bash
volumes:
  app_data:
```
En el servicio app1 y app2, aunque los datos de las aplicaciones no están explícitamente asociados a este volumen en el código actual, podés configurarlo si deseas persistir datos para estas aplicaciones. Por ejemplo:

```bash
services:
  app1:
    volumes:
      - app_data:/var/www/html
  app2:
    volumes:
      - app_data:/var/www/html

```

Docker Engine: Docker automáticamente gestiona el volumen bajo el nombre docker_app_data, asegurando que los datos no se pierdan cuando los contenedores se detienen o eliminan.

---

# Acceso a la Aplicación

Una vez desplegado el proyecto:

Inicio: Visita http://localhost/ para acceder al sitio principal.
App1: Visita http://localhost/app1.
App2: Visita http://localhost/app2.

---

# Verificación del estado

Si querés verificar el estado de los contenedores:

```bash
docker ps
```

Para consultar los logs de un servicio:

```bash
docker logs <nombre-del-contenedor>
```

# Créditos

Este proyecto fue desarrollado como parte de la integración de conceptos clave aprendidos en clase. Autor: Franco Sbaffi.
