FROM node:10-stretch


ARG NODE_ENV
ARG REACT_APP_API_SECRET

ENV NODE_ENV production
ENV REACT_APP_API_SECRET "$REACT_APP_API_SECRET"

COPY package.json package.json
COPY yarn.lock yarn.lock
COPY .yarnrc .yarnrc

RUN yarn --pure-lockfile

COPY . .

RUN REACT_APP_API_SECRET=$REACT_APP_API_SECRET yarn build

EXPOSE 5000

CMD npx serve -s build -p 5000
