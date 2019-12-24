FROM node:10-stretch


ARG NODE_ENV
ARG REACT_APP_API_KEY

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn

COPY . .

EXPOSE 3000

CMD REACT_APP_API_KEY=$REACT_APP_API_KEY yarn start
