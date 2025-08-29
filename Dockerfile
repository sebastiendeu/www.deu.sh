FROM node:lts-alpine as builder
WORKDIR /app

COPY package*.json /app
RUN npm ci
COPY . /app
RUN npm run build

FROM nginx:mainline-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/frontend/browser /usr/share/nginx/html
