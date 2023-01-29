FROM node:18-alpine AS build

WORKDIR /app

RUN apk update && \
  apk add --no-cache tzdata && \
  cp /usr/share/zoneinfo/Asia/Bangkok /etc/localtime \
  && echo "Asia/Bangkok" > /etc/timezone

RUN wget -qO /bin/pnpm "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" && chmod +x /bin/pnpm

COPY . .

RUN pnpm i && pnpm run build

FROM keymetrics/pm2:18-slim

ENV NODE_ENV === 'production'

COPY --from=build /app /app

EXPOSE 50051

CMD ["pm2-runtime", "--json", "/app/process.json"]
