FROM node:6.11-alpine
MAINTAINER Renato Biancalana da Silva <renato.biancalana@laborit.com.br>

ENV NPM_CONFIG_PRODUCTION=1
ENV ENV=production
ENV NODE_ENV=production

RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm i
RUN npm run publish

VOLUME ["/usr/src/app/dist/assets"]

CMD ["npm", "run", "start-docker"]
