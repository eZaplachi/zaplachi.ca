FROM node
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
RUN npx next telemetry disable
CMD [ "npm", "start" ]