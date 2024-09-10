FROM eclipse-mosquitto:2.0-openssl

# Copier le script de génération de certificats
COPY generate-cert.sh /usr/local/bin/generate-cert.sh

COPY mosquitto.conf /mosquitto/config/mosquitto.conf
COPY docker-entrypoint.sh /docker-entrypoint.sh

RUN chmod +x /docker-entrypoint.sh

EXPOSE 1883

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["/usr/sbin/mosquitto", "-c", "/mosquitto/config/mosquitto.conf"]
