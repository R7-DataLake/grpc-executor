FROM node:18-alpine AS build

WORKDIR /app

ENV NODE_ENV === 'production'

RUN apk update && \
  apk upgrade && \
  apk add --no-cache \
  build-base \
  libtool \
  autoconf \
  automake \
  g++ \
  make \
  python3

COPY . .

RUN wget -qO /bin/pnpm "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" && chmod +x /bin/pnpm

RUN pnpm i && pnpm run build

RUN rm -rf src

RUN rm -rf node_modules && pnpm i --production

FROM keymetrics/pm2:18-slim

COPY --from=build /app /app

EXPOSE 50051

CMD ["pm2-runtime", "--json", "/app/process.json"]
