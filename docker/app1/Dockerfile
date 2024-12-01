FROM debian:latest

# Instalar Apache
RUN apt-get update && apt-get install -y apache2

# Copiar los archivos de la aplicación
COPY . /var/www/html/

# Exponer el puerto 80
EXPOSE 80

# Iniciar Apache en primer plano
CMD ["apache2ctl", "-D", "FOREGROUND"]







