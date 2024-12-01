#!/bin/bash

# Verificar si la variable de entorno PORT está configurada, si no, usar el valor predeterminado 3000
PORT=${PORT:-3000}

echo "Configurando Apache para escuchar en el puerto ${PORT}..."

# Cambiar el puerto en ports.conf
if [ -f /etc/apache2/ports.conf ]; then
  sed -i "s/Listen 80/Listen ${PORT}/" /etc/apache2/ports.conf
else
  echo "Listen ${PORT}" > /etc/apache2/ports.conf
fi

# Cambiar el puerto en el sitio por defecto
if [ -f /etc/apache2/sites-available/000-default.conf ]; then
  sed -i "s/<VirtualHost \*:80>/<VirtualHost \*:${PORT}>/" /etc/apache2/sites-available/000-default.conf
fi

# Habilitar el sitio por defecto
a2ensite 000-default.conf

# Establecer el ServerName para evitar advertencias
echo "ServerName localhost" >> /etc/apache2/apache2.conf

echo "Iniciando el servidor Apache en el puerto ${PORT}..."
exec "$@"




