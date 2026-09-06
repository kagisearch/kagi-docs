ARG NODE_VERSION=22
FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json .
RUN npm ci

COPY . .

RUN npm run docs:build
ENTRYPOINT npm run docs:preview
