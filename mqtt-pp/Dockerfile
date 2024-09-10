FROM eclipse-mosquitto:2.0-openssl
RUN apt-get update && apt-get install -y openssl

COPY mosquitto.conf /mosquitto/config/mosquitto.conf

#  Générer des certificats TLS
RUN mkdir -p /mosquitto/config && \
    openssl req -new -x509 -days 365 -nodes \
    -out /mosquitto/config/server.crt \
    -keyout /mosquitto/config/server.key \
    -subj "/CN=localhost" && \
    openssl req -new -x509 -days 365 -nodes \
    -out /mosquitto/config/ca.crt \
    -keyout /mosquitto/config/ca.key \
    -subj "/CN=CA"

