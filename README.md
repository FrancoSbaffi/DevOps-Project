
# 🚀 Proyecto Integrador - Versión 2.0

Este README describe los cambios y mejoras implementados en la rama `version2.0`, que representa una evolución significativa respecto a la rama `master`. En esta versión se profesionalizaron las funcionalidades de la aplicación **App3**, y se incorporaron herramientas y configuraciones avanzadas para optimizar el proyecto.

---

## 🆕 **Cambios en la Versión 2.0**

1. **App3 - Dashboard Profesional:**
   - Se mejoró significativamente el diseño de App3, integrando un **dashboard profesional** que permite gestionar usuarios y productos.
   - Incluye un archivo HTML (`index.html`), con CSS y JavaScript ubicados en la carpeta `public`, ofreciendo un diseño más atractivo y funcional.
   - Implementación de rutas API para devolver datos simulados de usuarios y productos en formato JSON:
     - `/usuarios`
     - `/productos`

2. **Carpeta `mock-data`:**
   - Contiene ejemplos de datos estructurados para simular bases de datos de usuarios y productos.
   - Utilizado para alimentar las funcionalidades de App3.

3. **Carpeta `scripts`:**
   - Incluye scripts útiles para generación de datos (como `generar_usuarios.sh`) y pruebas de base de datos (`populate-db.sh`).

4. **Proxy Reverso Mejorado con NGINX:**
   - Se configuró correctamente NGINX para redirigir `/app3` a la nueva App3 profesionalizada en el puerto `3002`.

5. **Compatibilidad Avanzada con Docker:**
   - Se ajustaron los archivos `Dockerfile` y `docker-compose.yml` para soportar la nueva estructura de App3.
   - Uso de `express.static` para servir archivos estáticos (HTML, CSS y JS) en App3.

---

## 🔄 **Diferencias con la Rama `master`**

### Rama `master`:
- **App3**: Contenía una versión básica con datos simulados y un diseño sencillo sin CSS ni JavaScript.
- **Foco**: En la estructura básica y funcionalidad mínima viable.

### Rama `version2.0`:
- **App3**: Transformada en una aplicación profesional con un **dashboard interactivo**.
- **Diseño Mejorado**: Se incorporó un diseño mucho más atractivo con CSS y JavaScript.
- **Funcionalidad Avanzada**: Soporte para datos simulados, visualización profesional y API funcional.
- **Carpetas Extra**: Se añadieron `mock-data`, `scripts` y ajustes avanzados en configuraciones.

---

## ✅ **Requisitos Previos**

Asegúrate de tener instalados los siguientes programas:

- **Docker**: Para construir y ejecutar contenedores.
- **Docker Compose**: Para desplegar múltiples servicios fácilmente.
- **Node.js**: Para ejecutar y probar localmente los archivos de App3.
- **Git**: Para clonar el repositorio y gestionar las ramas del proyecto.

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
