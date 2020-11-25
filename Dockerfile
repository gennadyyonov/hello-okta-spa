FROM node:12-alpine
WORKDIR /hello-okta-spa
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
CMD ["yarn", "start"]
