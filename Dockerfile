FROM node:18.18.0-alpine AS builder
RUN mkdir /analytics-web
WORKDIR /analytics-web
COPY . .
ARG BASEURL
ENV API_BASE_URL=${BASEURL}
ENV NEXT_PUBLIC_SITE_NAME="Analytics"
RUN npm install
RUN npm run build

ENTRYPOINT ["/bin/sh", "./docker-entrypoint.sh"]




