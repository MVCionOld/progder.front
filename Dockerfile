FROM node:16

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i --silent
RUN npm i react-scripts --silent
RUN npm audit fix --force --silent

# add app
COPY public public
COPY src src

# start app
CMD ["npm", "start"]
