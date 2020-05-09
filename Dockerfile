FROM node:10.15 AS next-build
LABEL maintainer="Nidhal BEN KHALIFA <nidhalbk@gmail.com>"

WORKDIR /app

COPY package.json package.json
RUN yarn
COPY . .
RUN yarn build
EXPOSE 3000

CMD ["yarn", "start"]