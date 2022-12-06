FROM node:14-slim

WORKDIR /home/grpc

COPY . .

RUN npm i

EXPOSE 50051

CMD [ "node", "server.js" ]