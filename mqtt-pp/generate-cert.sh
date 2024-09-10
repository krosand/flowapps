#!/bin/sh
CERT_DIR="/mosquitto/certs"
CERT_KEY="$CERT_DIR/server.key"
CERT_CRT="$CERT_DIR/server.crt"

# Si les certificats n'existent pas déjà
if [ ! -f "$CERT_KEY" ] || [ ! -f "$CERT_CRT" ]; then
    echo "Generating TLS certificates..."
    mkdir -p "$CERT_DIR"
    
    # Générer la clé privée
    openssl genpkey -algorithm RSA -out "$CERT_KEY" -aes256 -pass pass:password

    # Générer un certificat auto-signé
    openssl req -new -x509 -key "$CERT_KEY" -out "$CERT_CRT" -days 365 \
        -subj "/C=FR/ST=Ile-de-France/L=Paris/O=MyOrg/OU=IT/CN=mosquitto.local"
    
    # Supprimer le mot de passe de la clé privée pour Mosquitto
    openssl rsa -in "$CERT_KEY" -out "$CERT_KEY" -passin pass:password

    echo "Certificates generated successfully."

    # Supprimer le script après génération
    rm -- "$0"
fi

