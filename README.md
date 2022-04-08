## Kayode Taiwo

Fictitious banking application API. This application was generated with the NestJS CLI and is an NodeJS (www.nestjs.com) application that has been deployed to the following url on Heroku:

https://vm-bank-api.herokuapp.com/

With Swagger description of the API available online also at:

https://vm-bank-api.herokuapp.com/api

## How to run the API locally from Source

01. Clone the app to a folder on your local computer, say vm-bank-api.
02. Navigate to the local folder by running, $ cd vm-bank-api.
03. Run the following command, $ npm install.
04. Run the following command, $ npm run start.
05. The API is now available at http://localhost:3000 on your local computer and you can test with curl or postman.

## How to test the API locally with Curl

01. Proceed as described above in 'How to run the API locally from Source'.
02. When you have API running then you may issue the following curl commands.
    
    01. POST to /auth/register

        command (please change phone and pass in command below)

        $ curl -X POST http://localhost:3000/auth/register -d '{
            "fullName": "Kayode Taiwo", 
            "phone": "0763339012", 
            "password": "kayode"
        }' -H "Content-Type: application/json"

        response

        {"fullName":"Kayode Taiwo","phone":"0763339012","_id":"624df1ffef310b5d4ac98bdd","__v":0}

    02. POST /auth/login
    
        command (please change phone and pass in command below)

        $ curl -X POST http://localhost:3000/auth/login -d '{
            "phone": "0822340967", 
            "password": "tunde"
        }' -H "Content-Type: application/json"

        response

        {"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJwaG9uZSI6IjA4MjIzNDA5NjciLCJzdWIiOiI2MjRkZjFhZGVmMzEwY
        jVkNGFjOThiZDkiLCJpYXQiOjE2NDkyNzU0NDMsImV4cCI6MTY0OTI4MTQ0M30.oTJvuiu7VGs5ec-6d9Jg2u0g9Roef2rfDRgU5edhdgE"}

    03. GET /profile

        command (please use access token returned from step 02 above)

        $ curl http://localhost:3000/profile -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJwaG9uZSI6IjA
        4MjIzNDA5NjciLCJzdWIiOiI2MjRkZjFhZGVmMzEwYjVkNGFjOThiZDkiLCJpYXQiOjE2NDkyNzU0
        NDMsImV4cCI6MTY0OTI4MTQ0M30.oTJvuiu7VGs5ec-6d9Jg2u0g9Roef2rfDRgU5edhdgE"

        response

        {"_id":"hiu77uyguyjkhj", "phone":"0821340987"}

    04. GET /accounts

        command (please use access token returned from step 02 above)

        $ curl http://localhost:3000/accounts -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJwaG9uZSI6IjA
        4MjIzNDA5NjciLCJzdWIiOiI2MjRkZjFhZGVmMzEwYjVkNGFjOThiZDkiLCJpYXQiOjE2NDkyNzU0
        NDMsImV4cCI6MTY0OTI4MTQ0M30.oTJvuiu7VGs5ec-6d9Jg2u0g9Roef2rfDRgU5edhdgE"

        response

        {"_id":"624d1eded22480aae9d83530","accountNo":"0712348765","balance":0,"__v":0}

    05. POST /accounts/deposit

        command (please use access token returned from step 02 above)

        $ curl -X POST http://localhost:3000/accounts/deposit -d '{
            "amount": 200
        }' -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJwaG9uZSI6IjA
        4MjIzNDA5NjciLCJzdWIiOiI2MjRkZjFhZGVmMzEwYjVkNGFjOThiZDkiLCJpYXQiOjE2NDkyNzU0
        NDMsImV4cCI6MTY0OTI4MTQ0M30.oTJvuiu7VGs5ec-6d9Jg2u0g9Roef2rfDRgU5edhdgE"

        response

        {"_id":"624d1eded22480aae9d83530","accountNo":"0712348765","balance":200,"__v":0}

    06. POST /accounts/withdraw

        command (please use access token returned from step 02 above)

        $ curl -X POST http://localhost:3000/accounts/withdraw -d '{
            "amount": 50
        }' -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJwaG9uZSI6IjA
        4MjIzNDA5NjciLCJzdWIiOiI2MjRkZjFhZGVmMzEwYjVkNGFjOThiZDkiLCJpYXQiOjE2NDkyNzU0
        NDMsImV4cCI6MTY0OTI4MTQ0M30.oTJvuiu7VGs5ec-6d9Jg2u0g9Roef2rfDRgU5edhdgE"

        response

        {"_id":"624d1eded22480aae9d83530","accountNo":"0712348765","balance":150,"__v":0}

    07. GET /transactions

        command (please use access token returned from step 02 above)

        $ curl http://localhost:3000/transactions -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJwaG9u
        ZSI6IjA4MjIzNDA5NjciLCJzdWIiOiI2MjRkZjFhZGVmMzEwYjVkNGFjOThiZDkiLCJpYXQiOjE2NDkyNzU0
        NDMsImV4cCI6MTY0OTI4MTQ0M30.oTJvuiu7VGs5ec-6d9Jg2u0g9Roef2rfDRgU5edhdgE"

        response
        
        [{
            "_id":"62501f0621b235e022ef8cd4",
            "accountNo":"0763339012",
            "type":"withdraw",
            "date":"2022-04-08T11:39:50.912Z",
            "amount":3277.67,
            "balance":94038.34
        },{
            "_id":"62501ef421b235e022ef8ccf",
            "accountNo":"0763339012",
            "type":"deposit",
            "date":"2022-04-08T11:39:32.143Z",
            "amount":50,
            "balance":97316.01
        }...]

## How to test the API on Heroku with Curl

01. The API is already running on Heroku at https://vm-bank-api.herokuapp.com.
02. With the API running you may issue the following curl commands.
    
    01. POST to /auth/register

        command (please change phone and pass in command below)

        $ curl -X POST https://vm-bank-api.herokuapp.com/auth/register -d '{
            "fullName": "Kayode Taiwo", 
            "phone": "0763339012", 
            "password": "kayode"
        }' -H "Content-Type: application/json"

        response

        {"fullName":"Kayode Taiwo","phone":"0763339012","_id":"624df1ffef310b5d4ac98bdd","__v":0}

    02. POST /auth/login
    
        command (please change phone and pass in command below)

        $ curl -X POST https://vm-bank-api.herokuapp.com/auth/login -d '{
            "phone": "0822340967", 
            "password": "tunde"
        }' -H "Content-Type: application/json"

        response

        {"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJwaG9uZSI6IjA4MjIzNDA5NjciLCJzdWIiOiI2MjRkZjFhZGVmMzEwY
        jVkNGFjOThiZDkiLCJpYXQiOjE2NDkyNzU0NDMsImV4cCI6MTY0OTI4MTQ0M30.oTJvuiu7VGs5ec-6d9Jg2u0g9Roef2rfDRgU5edhdgE"}

    03. GET /profile

        command (please use access token returned from step 02 above)

        $ curl https://vm-bank-api.herokuapp.com/profile -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ
        9eyJwaG9uZSI6IjA4MjIzNDA5NjciLCJzdWIiOiI2MjRkZjFhZGVmMzEwYjVkNGFjOThiZDkiLCJpYXQiOjE2NDkyNzU0
        NDMsImV4cCI6MTY0OTI4MTQ0M30.oTJvuiu7VGs5ec-6d9Jg2u0g9Roef2rfDRgU5edhdgE"

        response

        {"_id":"hiu77uyguyjkhj", "phone":"0821340987"}

    04. GET /accounts

        command (please use access token returned from step 02 above)

        $ curl https://vm-bank-api.herokuapp.com/accounts -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpX
        VCJ9eyJwaG9uZSI6IjA4MjIzNDA5NjciLCJzdWIiOiI2MjRkZjFhZGVmMzEwYjVkNGFjOThiZDkiLCJpYXQiOjE2NDkyNzU0
        NDMsImV4cCI6MTY0OTI4MTQ0M30.oTJvuiu7VGs5ec-6d9Jg2u0g9Roef2rfDRgU5edhdgE"

        response

        {"_id":"624d1eded22480aae9d83530","accountNo":"0712348765","balance":0,"__v":0}

    05. POST /accounts/deposit

        command (please use access token returned from step 02 above)

        $ curl -X POST https://vm-bank-api.herokuapp.com/accounts/deposit -d '{
            "amount": 200
        }' -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJwaG9uZSI6IjA
        4MjIzNDA5NjciLCJzdWIiOiI2MjRkZjFhZGVmMzEwYjVkNGFjOThiZDkiLCJpYXQiOjE2NDkyNzU0
        NDMsImV4cCI6MTY0OTI4MTQ0M30.oTJvuiu7VGs5ec-6d9Jg2u0g9Roef2rfDRgU5edhdgE"

        response

        {"_id":"624d1eded22480aae9d83530","accountNo":"0712348765","balance":200,"__v":0}

    06. POST /accounts/withdraw

        command (please use access token returned from step 02 above)

        $ curl -X POST https://vm-bank-api.herokuapp.com/accounts/withdraw -d '{
            "amount": 50
        }' -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJwaG9uZSI6IjA
        4MjIzNDA5NjciLCJzdWIiOiI2MjRkZjFhZGVmMzEwYjVkNGFjOThiZDkiLCJpYXQiOjE2NDkyNzU0
        NDMsImV4cCI6MTY0OTI4MTQ0M30.oTJvuiu7VGs5ec-6d9Jg2u0g9Roef2rfDRgU5edhdgE"

        response

        {"_id":"624d1eded22480aae9d83530","accountNo":"0712348765","balance":150,"__v":0}

    07. GET /transactions

        command (please use access token returned from step 02 above)

        $ curl https://vm-bank-api.herokuapp.com/transactions -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI
        6IkpXVCJ9eyJwaG9uZSI6IjA4MjIzNDA5NjciLCJzdWIiOiI2MjRkZjFhZGVmMzEwYjVkNGFjOThiZDkiLCJpYXQiOjE2NDkyNzU0
        NDMsImV4cCI6MTY0OTI4MTQ0M30.oTJvuiu7VGs5ec-6d9Jg2u0g9Roef2rfDRgU5edhdgE"

        response
        
        [{
            "_id":"62501f0621b235e022ef8cd4",
            "accountNo":"0763339012",
            "type":"withdraw",
            "date":"2022-04-08T11:39:50.912Z",
            "amount":3277.67,
            "balance":94038.34
        },{
            "_id":"62501ef421b235e022ef8ccf",
            "accountNo":"0763339012",
            "type":"deposit",
            "date":"2022-04-08T11:39:32.143Z",
            "amount":50,
            "balance":97316.01
        }...]

| Default aligned | Left aligned | Center aligned  | Right aligned  |
|-----------------|:-------------|:---------------:|---------------:|
| First body part | Second cell  | Third cell      | fourth cell    |
| Second line     | foo          | **strong**      | baz            |
| Third line      | quux         | baz             | bar            |
|-----------------+--------------+-----------------+----------------|
| Second body     |              |                 |                |
| 2nd line        |              |                 |                |
|-----------------+--------------+-----------------+----------------|
| Third body      |              |                 | Foo            |



