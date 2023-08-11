#!/bin/bash

BRANCH=master

echo "Start checkout..." && \

echo "cd to target folder" && \
cd ~/kazatskaya-izba-frontend && \
echo "cd to target folder done" && \

echo "Checkout branch $BRANCH..." && \
git checkout $BRANCH && \
echo "Checkout done" && \

echo "Pulling..." && \
git pull -f && \
echo "Pull done" && \

echo "Checkout done"