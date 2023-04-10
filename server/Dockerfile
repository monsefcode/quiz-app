FROM node:16-alpine

WORKDIR /server

COPY package*.json ./

RUN npm install

RUN npx prisma generate

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "dev" ]
