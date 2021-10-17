FROM node

WORKDIR /task-6

COPY package.json /task-6

RUN npm install

COPY . . 

EXPOSE 80

CMD ["npm", "run", "dev"]