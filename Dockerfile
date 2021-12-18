FROM node:16.13.1

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

RUN npm i --unsafe-perm -g npm@latest

RUN npm install pm2 -g

RUN chown -R node:node $(npm config get prefix)/lib/node_modules
RUN chown -R node:node /usr/local/bin

USER node
ENV HOME=/home/node/
ENV PATH=/home/node/.npm-global/bin:${PATH}
