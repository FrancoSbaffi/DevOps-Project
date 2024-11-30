
```markdown
# 🚀 Proyecto Integrador

Este repositorio presenta un proyecto que integra los principales temas abordados en clase. En él se explican y aplican los conceptos de:

- 🌐 **Balanceo de cargas y Proxy reverso**  
- 💾 **Almacenamiento por bloques**  
- 🐳 **Creación y despliegue de imágenes Docker**  
- 🌱 **Uso de ramas para desarrollo y producción**  

---

## ✅ **Requisitos Previos**

Asegúrate de tener instalados los siguientes programas:

- **Docker**: Para construir y ejecutar contenedores.  
- **Docker Compose**: Para desplegar múltiples servicios fácilmente.  
- **Git**: Para clonar el repositorio y gestionar las ramas del proyecto.  

Verificá que tenés todo instalado ejecutando:

```bash
docker --version
docker-compose --version
git --version
```

---

## 🚀 **Configuración del Proyecto**

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/FrancoSbaffi/Proyecto-Integrador.git
cd Proyecto-Integrador
```

### 2️⃣ Uso de ramas
Este proyecto utiliza dos ramas principales:

- **`develop`**: Para desarrollo y pruebas de nuevas características.  
- **`master`**: Exclusiva para producción.  

ℹ️ *Los cambios realizados en la rama `develop` deben ser probados y luego mergeados a `master` mediante un pull request.*

---

## 🌐 **Balanceo de Cargas y Proxy Reverso**

El balanceo de cargas se implementa usando **NGINX** como proxy reverso. Redirige el tráfico entre dos aplicaciones (`app1` y `app2`) para distribuir la carga. 

📁 **Archivo de configuración**: `nginx/nginx.conf`  
📁 **Página inicial**: `nginx/site.html`  

```bash
http {
    server {
        listen 80;

        # Página inicial
        location / {
            root /usr/share/nginx/html;
            index site.html;
        }

        # Redirección a App1
        location /app1 {
            proxy_pass http://app1:3000;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }

        # Redirección a App2
        location /app2 {
            proxy_pass http://app2:3001;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
    }
}
```

---

## 🐳 **Creación y Despliegue de Imágenes Docker**

Cada aplicación (y el servidor NGINX) tiene su propio **Dockerfile**. El despliegue se realiza con **Docker Compose**.

📁 **Archivo Docker Compose**: `docker-compose.yml`  
Ejemplo:

```yaml
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
```

Para construir y levantar los servicios:

```bash
docker-compose build
docker-compose up -d
```

⚠️ Asegúrate de estar en la carpeta `docker` antes de ejecutar estos comandos.

---

## 💾 **Almacenamiento por Bloques**

El almacenamiento por bloques se configura automáticamente con volúmenes Docker en el archivo `docker-compose.yml`.

Ejemplo de configuración de volúmenes:

```yaml
volumes:
  app_data:
```

Para persistir datos, podés asociar el volumen `app_data` a tus aplicaciones:

```yaml
services:
  app1:
    volumes:
      - app_data:/var/www/html
  app2:
    volumes:
      - app_data:/var/www/html
```

---

## 📄 **Acceso a la Aplicación**

Una vez desplegado, accedé a:

- 🏠 **Inicio**: [http://localhost/](http://localhost/)  
- 🖥️ **App1**: [http://localhost/app1](http://localhost/app1)  
- 🖥️ **App2**: [http://localhost/app2](http://localhost/app2)  

---

## 🛠️ **Verificación del Estado**

### Ver el estado de los contenedores:
```bash
docker ps
```

### Consultar los logs de un servicio:
```bash
docker logs <nombre-del-contenedor>
```

---

## 🎉 **Créditos**

Este proyecto fue desarrollado por **Franco Sbaffi** como una integración de conceptos clave vistos en clase. 🚀
```

Este formato incluye los emojis, el uso de Markdown para una estructura ordenada, y una breve explicación de cada parte del proyecto. ¡Espero que te sea útil!
