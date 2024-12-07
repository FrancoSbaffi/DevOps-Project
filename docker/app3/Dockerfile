# Imagen base oficial de Node.js
FROM node:18

# Configurar el directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos de configuración y dependencias
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto de la aplicación
EXPOSE 3002

# Variable de entorno para el modo de la aplicación
ENV APP_MODE=version2.0

# Comando de inicio
CMD ["npm", "start"]

