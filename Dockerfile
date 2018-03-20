FROM node:slim

ENV APP_PATH=/code
WORKDIR ${APP_PATH}

ADD .  ${APP_PATH}

CMD ["npm", "start"]