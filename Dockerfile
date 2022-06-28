FROM node:16.14.2

WORKDIR /app

COPY . /app

CMD ["npm","run","dev"]