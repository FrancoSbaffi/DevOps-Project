
# Proyecto Integrador (Versión 2.0)

Esta rama presenta una versión más compleja del proyecto, agregando un tercer servicio (`app3`) que aprovecha datos falsos y herramientas adicionales.

## Novedades en version2.0

- **app3**: Un nuevo servicio Node.js que lee datos desde `mock-data/` y expone endpoints `/usuarios` y `/productos`. Así demostramos cómo la app puede aprovechar datos dinámicos sin tener una base real de producción.
- **mock-data/**: Contiene datos ficticios (usuarios, productos), que `app3` consume para simular una API.
- **scripts/**: Incluye `generar_usuarios.sh`, un script que permite regenerar el archivo `usuarios.json` con nuevos usuarios falsos, reflejándose automáticamente en `app3`.
- **tools/**: Contiene configuraciones experimentales como `nginx-alt.conf`, para escenarios no estándar. Aunque no se use directamente, muestra la capacidad de probar configuraciones avanzadas.
- **.env.version2.0**: Variables de entorno específicas para esta versión compleja, indicando el `APP_MODE` u otras variables diferenciales.

##Acceder a la App
• Página principal: http://localhost/
• App1 (Portfolio): http://localhost/app1
• App2 (Juego): http://localhost/app2
• App3 (Datos dinámicos): http://localhost/app3
  • Usuarios: http://localhost/app3/usuarios
  • Productos: http://localhost/app3/productos

## Cómo Ejecutar

```bash
docker-compose --env-file .env.version2.0 up --build

