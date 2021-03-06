FROM node:12-alpine as build

WORKDIR /app
COPY package.json /app/package.json
RUN yarn global add react-scripts@3.4.1
RUN yarn install
COPY . /app
RUN yarn build

FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]