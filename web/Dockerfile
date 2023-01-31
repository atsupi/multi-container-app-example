FROM node:16-alpine
USER root

WORKDIR /home/node/app
COPY package*.json ./
RUN npm install

COPY ./src ./src
COPY ./index.js ./

EXPOSE 3000

CMD ["node", "index.js"]
