ARG NODE_VERSION=3.18

FROM node:lts-alpine${NODE_VERSION}

WORKDIR /usr/src/app

COPY package*.json ./

COPY src ./src
COPY public ./public

RUN npm install --force
RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]