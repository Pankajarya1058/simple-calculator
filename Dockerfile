FROM node:latest
WORKDIR /app
EXPOSE 3000
COPY ./package*.json ./
RUN npm install
RUN npm run test
COPY . .
CMD ["npm", "start"]


