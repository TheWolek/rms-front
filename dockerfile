# syntax=docker/dockerfile:1

FROM node:15.12.0

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
