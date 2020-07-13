#!/bin/bash
cd /home/ubuntu/nato
bash ./create.sh
pm2 delete all
pm2 start server.js