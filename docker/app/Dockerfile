FROM debian:latest

# Instalar Apache y herramientas necesarias
RUN apt update && apt install -y apache2 git

# Configurar el directorio de trabajo
WORKDIR /var/www/html

# Copiar los archivos necesarios
COPY index.html . 
COPY entrypoint.sh /entrypoint.sh

# Dar permisos de ejecución al script de entrada
RUN chmod +x /entrypoint.sh

# Configurar el entrypoint y el comando de ejecución
ENTRYPOINT ["/entrypoint.sh"]
CMD ["apache2ctl", "-D", "FOREGROUND"]




