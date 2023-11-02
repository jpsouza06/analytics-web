FROM node:18.18.0-alpine AS builder
RUN mkdir /analytics-web
WORKDIR /analytics-web
COPY . .
RUN npm install
RUN npm run build

FROM node:18.18.0-alpine
RUN mkdir -p /analytics-web
WORKDIR /analytics-web
COPY --from=builder /analytics-web/.next .
COPY --from=builder /analytics-web/package.json .
COPY ./docker-entrypoint.sh .

ENTRYPOINT ["/bin/sh", "./docker-entrypoint.sh"]



