FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

EXPOSE 3000

CMD [ "sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then npm start; else npm test; fi" ]
