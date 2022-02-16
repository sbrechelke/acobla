# Repo for Cypress Browsers Images:
# https://github.com/cypress-io/cypress-docker-images/tree/master/browsers 
# Chrome 96 & Firefox 94
 
# pull image
FROM cypress/browsers:node14.15.0-chrome96-ff94
# make directory inside container
RUN mkdir /app
WORKDIR /app
# copy cypress code from host to container
COPY . /app
# execute the tests
RUN npm install
RUN $(npm bin)/cypress verify
RUN $(npm bin)/cypress run --browser firefox
RUN $(npm bin)/cypress run --browser chrome