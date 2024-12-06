FROM nginx:alpine

# En caso de que queramos usar variables de entorno, usar así:
# ARG APP_MODE=staging
# RUN echo "Ejecutando en modo $APP_MODE"

COPY index.html /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
