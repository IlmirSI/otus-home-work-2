FROM node:16.16
WORKDIR /app

COPY tsconfig.json .
COPY tsconfig.build.json .
COPY package.json .
COPY ./src ./src

RUN npm install
RUN npm run build

CMD node dist/main.js
EXPOSE 8000