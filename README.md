# Proyecto Integrador (Rama Develop)

Esta rama (`develop`) actualmente se encuentra alineada con la rama `master`, antes fué usada para poder lograr el desarrollo sin afectar la rama de producción, como `master`, cumplió con los objetivos y no necesita mas cambios, `develop` pasa a cambiar y brindar una segunda opción en casó de que se ubiese requerido usar AWS.

## Lo que cambía

- **Proxy Reverso (NGINX):** Permite redirigir el tráfico entrante hacia las aplicaciones `app1` y `app2`, proporcionándoles rutas limpias y centralizando la configuración de acceso.
- **Almacenamiento por Bloque (EBS en AWS):** Los datos de las aplicaciones se almacenan en un volumen EBS, garantizando persistencia y facilitando la separación entre la lógica de la aplicación y el almacenamiento de datos.

(El resto de ramas y la creación de imagenes Docker siguen de la misma manera)

## Proxy Reverso

En el `nginx.conf` se definen upstreams para `app1` y `app2`:

```nginx
http {
    upstream app1 {
        server app1:80;
    }

    upstream app2 {
        server app2:80;
    }

    server {
        listen 80;

        # Redirigir /app1 hacia la app1
        location /app1/ {
            proxy_pass http://app1/;
        }

        # Redirigir /app2 hacia la app2
        location /app2/ {
            proxy_pass http://app2/;
        }

        # Página principal
        location / {
            root /usr/share/nginx/html;
            index site.html;
        }
    }
}
```

Esto significa que las solicitudes a http://miinstancia/app1/ se servirán desde app1, y las solicitudes a http://miinstancia/app2/ desde app2. NGINX actúa como puerta de entrada única, simplificando la exposición de las aplicaciones al exterior.

## Almacenamiento por bloque

Anteriormente usé en master Volumenes de Docker para simular Almacenamiento por bloque, Para garantizar la persistencia de datos y un entorno más cercano a producción, acá se ha optado por un volumen EBS en AWS. Este volumen:

- Se monta en la instancia EC2 en /ebs-data.
- Se utilizan bind mounts en el docker-compose.yml para que app1 y app2 sirvan su contenido desde /ebs-data/app1 y /ebs-data/app2 respectivamente.

```docker-compose.yml
services:
  app1:
    build:
      context: ./app1
    image: app1_image:latest
    volumes:
      - /ebs-data/app1:/var/www/html

  app2:
    build:
      context: ./app2
    image: app2_image:latest
    volumes:
      - /ebs-data/app2:/var/www/html
```

De esta forma, los archivos que sirven las aplicaciones se almacenan realmente en el volumen EBS (almacenamiento por bloques), y no en el almacenamiento efímero del contenedor. Si el contenedor se elimina o se recrea, los datos persisten en el volumen EBS.

### Creación y Despliegue de Imágenes Docker

Cada servicio (app1, app2, nginx) tiene su propio Dockerfile. Con docker-compose se construyen las imágenes y se levantan los contenedores:

```bash
docker-compose down
docker-compose up -d --build
```

Con esto lo que queria lograr es mostrar multiples formas de llevar a cabo el proyecto.
