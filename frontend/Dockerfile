FROM node:13.12.0-alpine

# install app dependencies
COPY . /frontend
RUN npm install --silent
RUN npm install axios@0.21.1 bootstrap@4.6.0 reactstrap@8.9.0 --legacy-peer-deps


# start app
CMD ["npm", "start"]