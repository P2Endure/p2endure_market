FROM node:latest
RUN mkdir -p /usr/src/App
WORKDIR /P2ENDURE_MARKET/src/App
COPY package.json /P2ENDURE_MARKET/src/App/
RUN npm install
COPY . /P2ENDURE_MARKET/src/App
EXPOSE 3000
CMD [ “npm”, “start” ]