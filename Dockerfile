FROM node:16
# Create app directory
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run buildProd

ENV NODE_ENV=production
ENV PORT=8080

EXPOSE 8080
CMD [ "npm", "run", "start"]
