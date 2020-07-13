#!/bin/bash
cd /home/ubuntu/nato
pm2 delete all
pm2 start server.js