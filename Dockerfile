FROM node:14-slim

WORKDIR /home/grpc

COPY . .

RUN npm ci --only=production

EXPOSE 50051

CMD [ "node", "server.js" ]