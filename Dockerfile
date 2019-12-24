FROM node:10-stretch


ARG NODE_ENV
ARG REACT_APP_API_KEY

ENV NODE_ENV production
ENV REACT_APP_API_KEY "$REACT_APP_API_KEY"

COPY package.json package.json
COPY yarn.lock yarn.lock
COPY .yarnrc .yarnrc

RUN yarn

COPY . .

EXPOSE 3000

CMD REACT_APP_API_KEY=$REACT_APP_API_KEY yarn start
