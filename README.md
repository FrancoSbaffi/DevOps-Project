
# 🚀 Proyecto Integrador

Este repositorio presenta un proyecto que integra los principales temas abordados en clase. En él se explican y aplican los conceptos de:

- 🌐 **Balanceo de cargas y Proxy reverso**  
- 💾 **Almacenamiento por bloques**  
- 🐳 **Creación y despliegue de imágenes Docker**  
- 🌱 **Uso de ramas para desarrollo y producción**  

En esta rama principal se detalla todo el proyecto final, pero a su vez se puede acceder desde acá para entender mejor el proposito de cada rama:

- [Rama staging](https://github.com/FrancoSbaffi/Proyecto-Integrador/tree/staging)
- [Rama feature/nueva-funcionalidad](https://github.com/FrancoSbaffi/Proyecto-Integrador/tree/feature/nueva-funcionalidad)
- [Rama develop](https://github.com/FrancoSbaffi/Proyecto-Integrador/tree/develop)
- [Proyecto mas complejo](https://github.com/FrancoSbaffi/Proyecto-Integrador/tree/version2.0).

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
Este proyecto utiliza cuatro ramas:

- **`develop`**: Para desarrollo y pruebas de nuevas características.  
- **`master`**: Exclusiva para producción.
- **`staging`**: Acá va todo lo que se te ocurra. Es la rama más baja, el taller desordenado donde probás de todo. Lo que funciona acá lo podés subir a `feature/nueva-funcionalidad`. Lo que no, lo dejás igual, por ahí mañana sirve.
- **`feature/nueva-funcionalidad`**: Cuando ya tenés algo más claro y querés laburar una idea más en serio, usás esta rama. Una vez todo chequeado, puede pasar a `develop` y eventualmente a `master`.

ℹ️ *Los cambios realizados en la rama `develop` deben ser probados y luego mergeados a `master` mediante un pull request.*

---

## 🌐 **Balanceo de Cargas y Proxy Reverso**

El balanceo de cargas se implementa usando **NGINX** como proxy reverso. Redirige el tráfico entre dos aplicaciones (`app1` y `app2`) para distribuir la carga. 

📁 **Archivo de configuración**: `nginx/nginx.conf`  
📁 **Página inicial**: `nginx/site.html`  

```bash
events {}

http {
    upstream app1 {
        server app1:80;
    }

    upstream app2 {
        server app2:80;
    }

    server {
        listen 80;

        # Redireccionar /app1 a /app1/
        location = /app1 {
            return 301 /app1/;
        }

        # Ruta para app1
        location /app1/ {
            proxy_pass http://app1/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }

        # Redireccionar /app2 a /app2/
        location = /app2 {
            return 301 /app2/;
        }

        # Ruta para app2
        location /app2/ {
            proxy_pass http://app2/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }

        # Página principal
        location / {
            root /usr/share/nginx/html;
            index site.html;
        }
    }
}
```

- **Balanceo de cargas o Proxy reverso**: NGINX actúa como proxy reverso, dirigiendo las solicitudes entrantes a app1 y app2 según la ruta solicitada.
- Las directivas proxy_pass redirigen el tráfico a las aplicaciones correspondientes. 
- Las secciones location manejan las rutas y redirecciones para las aplicaciones y la página principal.

---

## 🐳 **Creación y Despliegue de Imágenes Docker**

Cada aplicación (y el servidor NGINX) tiene su propio **Dockerfile**. El despliegue se realiza con **Docker Compose**.

📁 **Archivo Docker Compose**: `docker-compose.yml`  

```yaml
services:
  app1:
    build:
      context: ./app1
    image: app1_image:latest
    volumes:
      - app1-data:/var/www/html
    networks:
      - my-network

  app2:
    build:
      context: ./app2
    image: app2_image:latest
    volumes:
      - ./app2:/var/www/html
    networks:
      - my-network

  nginx:
    build:
      context: ./nginx
    image: nginx_image:latest
    ports:
      - "80:80"
    depends_on:
      - app1
      - app2
    networks:
      - my-network

volumes:
  app1-data:

networks:
  my-network:
    driver: bridge
```

- **Creación y despliegue de imágenes Docker**: Las imágenes se construyen utilizando los Dockerfile de cada servicio y se despliegan con Docker Compose.
- **Uso de bind mounts**: En app2, se utiliza un bind mount (./app2:/var/www/html) para que los cambios en el código local se reflejen inmediatamente en el contenedor.
- **Volúmenes nombrados**: En app1, se utiliza un volumen nombrado (app1-data) para simular almacenamiento por bloques, permitiendo la persistencia de datos.
- **Red**: Todos los servicios están conectados a la red my-network, lo que permite la comunicación entre ellos.
- **Puertos**: El servicio nginx expone el puerto 80 en el host.

Para construir y levantar los servicios:

```bash
docker-compose up --build
```

⚠️ Asegúrate de estar en la carpeta `docker` antes de ejecutar estos comandos.

```bash
[+] Running 5/5
 ✔ Network docker_my-network  Created                                                                              0.4s
 ✔ Volume "docker_app1-data"  Created                                                                              0.2s
 ✔ Container docker-app1-1    Created                                                                              4.4s
 ✔ Container docker-app2-1    Created                                                                              5.1s
 ✔ Container docker-nginx-1   Created  
```
---

## 💾 **Almacenamiento por Bloques**

El almacenamiento por bloques se implementa utilizando volúmenes de Docker.

- Volumen nombrado para app1: app1-data definido en docker-compose.yml.
- Bind mount para app2: ./app2:/var/www/html.

- Los volúmenes permiten persistir datos y simulan un almacenamiento por bloques. En app1, el volumen app1-data garantiza que los datos se mantengan incluso si el contenedor se elimina.
- En app2, el bind mount facilita el desarrollo al reflejar cambios en tiempo real.

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
docker-compose ps
```

### Consultar los logs de un servicio:
```bash
docker-compose logs <nombre-del-servicio>
```

## 🛠️ **Detener y Limpiar el Proyecto**

### Para detener y eliminar todos los contenedores y volúmenes:
```bash
docker-compose down --volumes
```

### Para eliminar las imágenes Docker construidas:
```bash
docker rmi app1_image:latest app2_image:latest nginx_image:latest
```

Nota: Si recibís un error al eliminar las imágenes, asegúraté de que no hay contenedores en ejecución utilizando esas imágenes. Podés detener y eliminar contenedores con:

```bash
docker ps -a
docker stop <container_id>
docker rm <container_id>
```

---

## 🎉 **Créditos**

Este proyecto fue desarrollado por **Franco Sbaffi** como una integración de conceptos clave vistos en clase. 🚀


Este proyecto está bajo la Licencia MIT.

