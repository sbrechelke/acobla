# Repo for Cypress Browsers Images:
# https://github.com/cypress-io/cypress-docker-images/tree/master/browsers 
# Chrome 96 & Firefox 94
 
# pull image
FROM cypress/included:9.5.0
# make directory inside container
RUN mkdir /app
WORKDIR /app
# copy cypress code from host to container
COPY . /app
# execute the tests
RUN npm install --save-dev cypress
RUN npx cypress verify
RUN npx cypress run --browser chrome --spec "cypress/integration/blaze.spec.js"