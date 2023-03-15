FROM node:18.12.1

WORKDIR /usr/src/app/my-app

COPY . ./

RUN npm install

EXPOSE 3000

CMD ["npm","run", "start"]