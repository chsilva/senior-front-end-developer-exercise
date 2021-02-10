FROM node:latest

# THIS IS TO DECREASE BUILD TIME 
# INSTALL MODULES
COPY package.json /tmp/package.json
RUN cd /tmp && yarn

# COPY INSTALLED MODULES TO /app FOLDER
RUN mkdir -p /app && cp -a /tmp/node_modules /app/

# COPY THE REST TO /app FOLDER
WORKDIR /app
COPY . /app

EXPOSE 3000
EXPOSE 5000
CMD [ "yarn", "dev" ]
