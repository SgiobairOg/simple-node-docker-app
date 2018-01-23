FROM node:carbon

# App directory
WORKDIR /usr/src/app

# Install app deps
COPY package*.json ./

RUN npm install

# Bundle up
COPY . .

EXPOSE 8080

CMD [ "npm", "start"]