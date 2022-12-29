#!/bin/env bash

# USAGE: chmod +x nodeREDPWgen.sh
#        ./nodeREDPWgen.sh testpassword
#

function nodeREDPW {
    # 1st argument to this script is plaintext password
    echo $1
    local NODERED_AUTH_ADMIN=$(htpasswd -nb -B -C 8 admin "$1")
    export NODERED_AUTH_ADMIN
    
    # create the env file for docker-compose
    touch node-red.env
    
    # let envsubst do its magic of substitution
    envsubst '${NODERED_AUTH_ADMIN}' < node-red.tpl.env > node-red.env
    unset NODERED_AUTH_ADMIN 
}

nodeREDPW $1
