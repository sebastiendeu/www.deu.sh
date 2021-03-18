FROM nginx:1.19.8-alpine

COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/default.conf /etc/nginx/conf.d/default.conf

COPY dist /usr/share/nginx/html/

EXPOSE 80
