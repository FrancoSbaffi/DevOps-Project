FROM nginx:alpine

# Copiamos un index.html básico
COPY index.html /usr/share/nginx/html/index.html

EXPOSE 80

# Comando por defecto de nginx
CMD ["nginx", "-g", "daemon off;"]