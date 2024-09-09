# Utiliser l'image Nginx officielle comme base
FROM nginx:alpine

# Copier les fichiers du site dans le répertoire de Nginx
COPY index.html /usr/share/nginx/html

# Changer le propriétaire des fichiers pour 'nginx'
RUN chown -R nginx:nginx /usr/share/nginx/html

# Assurer les permissions correctes sur les fichiers
RUN chmod -R 755 /usr/share/nginx/html

# Exposer le port 80 pour Nginx
EXPOSE 80

