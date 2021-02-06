FROM node:latest
RUN mkdir -p /usr/src/webapp
WORKDIR /usr/src/webapp

RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]
