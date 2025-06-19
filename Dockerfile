FROM node:20
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
# RUN yarn build
EXPOSE 5003
CMD ["yarn", "start"] 
# FROM kingindnorth03/my-nextjs-frontend:latest

