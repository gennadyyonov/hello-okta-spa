FROM node:15-alpine as build
WORKDIR /hello-okta-spa
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:1.19.5-alpine
COPY --from=build /hello-okta-spa/build /usr/share/nginx/html
COPY --from=build /hello-okta-spa/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
