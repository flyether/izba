#!/bin/bash

PASSWORD=$1

echo "cd to target folder" && \
cd ~/kazatskaya-izba-frontend && \
echo "cd to target folder done!" && \

echo "Installing dependencies..." && \
export NVM_DIR=~/.nvm && \
source ~/.nvm/nvm.sh  && \
npm ci && \
echo "Dependencies installed!" && \

echo "Building..." && \
npm run build && \
echo "Building complete!"
