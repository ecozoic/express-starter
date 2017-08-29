FROM node:6.11.2

COPY . /tmp/express-starter
WORKDIR /tmp/express-starter

ENV PORT=8080 \
    MONGO_HOST=mongo \
    MONGO_PORT=27107 \
    REDIS_HOST=redis \
    REDIS_PORT=6379

RUN yarn
CMD [ "yarn", "serve" ]
