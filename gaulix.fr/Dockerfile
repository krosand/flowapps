# Utiliser l'image Nginx officielle comme base
FROM nginx:alpine

# Copier les fichiers du site dans le répertoire de  Nginx

COPY ./src /usr/share/nginx/html
RUN chmod -R 755 /usr/share/nginx/html
# Exposer le port 80 pour Nginx
EXPOSE 80
