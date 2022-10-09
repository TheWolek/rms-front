# syntax=docker/dockerfile:1

FROM node as builder

WORKDIR /tmp
COPY ["package.json", "package-lock.json", "./"]
RUN npm install -g vite
RUN npm install --production

FROM node as dev
COPY --from=builder /tmp/node_modules /app
COPY . .
RUN npm install

FROM node as production

COPY --from=builder /tmp/node_modules /app
COPY . .

CMD ["npm", "run", "dev"]
