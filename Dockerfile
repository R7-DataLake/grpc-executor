FROM keymetrics/pm2:14-alpine

WORKDIR /home/grpc

COPY . .

RUN npm i --only=production

RUN cp /usr/share/zoneinfo/Asia/Bangkok /etc/localtime \
    && echo "Asia/Bangkok" > /etc/timezone

EXPOSE 50051

CMD [ "pm2-runtime", "start", "pm2.json" ]