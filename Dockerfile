FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
COPY prisma ./prisma

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","dev"]

