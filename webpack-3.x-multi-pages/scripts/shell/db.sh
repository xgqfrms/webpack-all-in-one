#!/bin/sh

# echo "^-v-^ JSON DB is running in development env!" && npm run db

# echo "^-v-^ JSON DB is running in development env!" && nodemon -w ./server.js localhost 8888

JSONDB="nodemon -w ./server.js localhost 8888"

${JSONDB} &
# chmod +x db.sh
# sudo ./db.sh
# nodemon -w ./server.js localhost 8888

# /bin/sh db.sh

# ps -ef | grep node
# sudo kill -9 <PID>

