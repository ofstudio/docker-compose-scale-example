FROM node:6-alpine

# Create app directory
WORKDIR /home/node/app

# Install app dependencies
COPY package.json ./
RUN npm install

# Bundle app source
COPY . .

USER node
CMD [ "node", "index" ]
