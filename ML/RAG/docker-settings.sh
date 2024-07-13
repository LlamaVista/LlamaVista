#!/bin/bash

# docker daemon
sudo service docker start 
if [ $? -ne 0 ]; then
    sudo usermod -aG docker $USER
    newgrp docker
    sudo chown $USER:$USER llamavista/ML/RAG
    sudo service docker restart
    docker-compose up -d
fi