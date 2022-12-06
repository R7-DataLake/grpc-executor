FROM keymetrics/pm2:14-alpine

WORKDIR /home/grpc

COPY . .

RUN npm ci --only=production

EXPOSE 50051

CMD [ "pm2-runtime", "start", "pm2.json" ]