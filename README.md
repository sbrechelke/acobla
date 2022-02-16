1. prerequisites: 
    - registered user (credentials in fixtures/miscData.json)
    - cookies cleared before running test
    - as much data as possible migrated to to fixtures/miscData.json
2. Scenario
    2.1 checks navbar content before log in - checking visibility and text content before login
    2.2 log in into account - login into account
    2.3 checks navbar content after log in - checking visibility and text content after login
    2.4 select "phones" category and collect info about 1st device on list - choose "phones" from menu and collect data: image src, name, price and info
    2.5 choose 1st device - choose 1st item on list
    2.6 checks selected device details and add it to cart - comparision of current and selected in 2.4 item data: image, name, price, info and add to cart
    2.7 click "cart" link - enter "cart" by selecting it on navbar
    2.8 check cart and click "place order" button - check item info on "cart": image, name, price, total price and click "place order"
    2.9 check summary dialog - checking visibility and text content of place order modal
    2.10 fill inputs and confirm purchase - set all inputs with good data nad confirm purchase
    2.11 sweet alert check and confirm - sweet alert review: labels, price, card number, name and order date
3. Running test:
    - install node.js
    - init repo:
        npm init
    - install cypress :
        npm install --save-dev cypress
    - run spec file from command line:
        npx cypress run --spec "cypress/integration/blaze.spec.js"
    - OR simply build docker image:
        docker build -t cypress_docker .