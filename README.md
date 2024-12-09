
# 🚀 Proyecto Integrador - Versión 2.0

Representa una evolución significativa respecto a la rama `master`. En esta versión se utilizan las funcionalidades de la aplicación **App3**, y se incorporaron herramientas y configuraciones avanzadas para optimizar el proyecto. (Load Balancing y Proxy Reverse)

---

## 🆕 Cambios Principales

1. **Dashboard Profesional en App3**:
   - Incluye un `index.html` con CSS y JavaScript en la carpeta `public`.
   - Rutas API para datos simulados:
     - `/usuarios`
     - `/productos`

2. **Mock Data**:
   - Carpeta `mock-data` con datos simulados de usuarios y productos.

3. **Scripts Útiles**:
   - Carpeta `scripts` con herramientas como `generar_usuarios.sh`.

4. **Proxy con NGINX**:
   - Redirección de `/app3` al puerto `3002`.

5. **Compatibilidad con Docker**:
   - Archivos `Dockerfile` y `docker-compose.yml` actualizados.

---

## ✅ Requisitos

- **Docker**
- **Node.js**
- **Git**

Verificá que tenés todo instalado ejecutando:

```bash
docker --version
docker-compose --version
node --version
git --version
```

1. Clonar el repo e ir a la carpeta clonada:

```bash
git clone --branch version2.0 https://github.com/FrancoSbaffi/Proyecto-Integrador.git
cd Proyecto-Integrador
```

2. Construir y levantar los contendores:

```bash
docker-compose --env-file .env.version2.0 up --build
```

Esto levantará las aplicaciones:

- Página principal: http://localhost
- App1: http://localhost/app1
- App2: http://localhost/app2
- App3: http://localhost/app3

Uso de los endpoints de App3:
Accedé a los datos de prueba en los siguientes endpoints:

- Usuarios: http://localhost/app3/usuarios
- Productos: http://localhost/app3/productos

Ejecución de Scripts:
Para generar datos de prueba adicionales o realizar pruebas, usá los scripts en la carpeta scripts:

```bash
bash docker/scripts/generar_usuarios.sh
bash docker/scripts/populate-db.sh
```
