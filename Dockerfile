ARG NODE_VERSION=19
FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY . .

RUN npm run docs:build
ENTRYPOINT npm run docs:preview
