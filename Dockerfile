FROM node:latest

WORKDIR /home/node/app

COPY . .

RUN npm install

ENV NODE_ENV production 

EXPOSE 1338

CMD ["node", "index.js"]
