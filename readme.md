## sequelize project

### Instalation
npm i

### Run migrations

node_modules/.bin/sequelize db:migrate

or 

npx sequelize-cli db:migrate 
(use this options if you have sequelize globally installed)


### Run commands

* Create: node . --create:Contact --firstname=test --lastname=test --phone=123456 --email="test@mail.com"

* Read: node . --read:Contact
