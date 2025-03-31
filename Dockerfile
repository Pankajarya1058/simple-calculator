
# Stage 1
FROM node:latest AS builder

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run test

CMD ["node", "server.js"] 


