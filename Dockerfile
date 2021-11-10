FROM node:16

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

RUN npm buildProd

# Bundle app source
COPY . .

ENV NODE_ENV=production
ENV PORT=8080

EXPOSE 8080
CMD [ "node", "dist/server.js" ]
