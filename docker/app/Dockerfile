FROM debian:latest

# Instalar Apache y herramientas necesarias
RUN apt update && apt install -y apache2 git dos2unix

# Configurar el directorio de trabajo
WORKDIR /var/www/html

# Copiar los archivos necesarios
COPY index.html . 
COPY entrypoint.sh /entrypoint.sh

# Convertir entrypoint.sh a formato Unix y dar permisos de ejecución
RUN dos2unix /entrypoint.sh && chmod +x /entrypoint.sh

# Configurar el entrypoint y el comando de ejecución
ENTRYPOINT ["/entrypoint.sh"]
CMD ["apache2ctl", "-D", "FOREGROUND"]





