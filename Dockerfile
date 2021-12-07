FROM node:latest
WORKDIR /app
COPY package.json ./
RUN npm install -g n
RUN n stable
RUN npm install
EXPOSE 3000
CMD npm start