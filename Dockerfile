FROM node:6.11.2

COPY . /tmp/express-starter
WORKDIR /tmp/express-starter

ENV PORT=8080

RUN yarn
CMD [ "yarn", "serve" ]
