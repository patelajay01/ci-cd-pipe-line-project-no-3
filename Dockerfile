FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --only=prod

COPY . .

EXPOSE 3000
CMD ["node", "server.js"]
