FROM nginx:1.19.5-alpine

COPY ./build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx/default.conf.template /etc/nginx/conf.d/default.conf.template

EXPOSE ${NGINXPORT}

CMD ["/bin/sh",\
    "-c",\
    "export NGINXPORT CSPHEADER && envsubst '$$NGINXPORT $$CSPHEADER' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]