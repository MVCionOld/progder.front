FROM node:16

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm config rm proxy
RUN npm config rm https-proxy
RUN npm config set registry http://registry.npmjs.org
RUN npm install

COPY public public
COPY src src

EXPOSE 3000

CMD ["npm", "start"]
