FROM node:12.10.0-alpine

COPY package.json .
COPY package-lock.json .

RUN npm i -s --no-progress && \
    mkdir /app && \
    cp -R ./node_modules ./app

WORKDIR /app

COPY . .

RUN npm run build

CMD ["node", "server.js"]
