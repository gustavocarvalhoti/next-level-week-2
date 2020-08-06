# Treinamento Next Level Week 02

## Install
```
yarn init -y                        <- Iniciar o projeto, cria o package,json
yarn add typescript -D      
yarn tsc --init                     <- Gera o tsconfig.json
yarn add ts-node-dev -D             <- Hot Reload
yarn add express                    <- Ajuda no start da aplicação
yarn add @types/express -D          
yarn add knex sqlite3               <- knex = SQL em Javascript
yarn add cors                       <- Resolve o problema do cross origin
yarn add @types/cors -D
```

## Start
```
yarn start
yarn knex:migrate                   <- Roda as migrations
```

## About
```
tsconfig.json               -> "target": "es2017" - Converter até o 2017
--transpile-only            -> Não valida se está com erro, agiliza o deploy
--ignore-watch node_modules  -> Não tenta transpilar o node_modules
--respawn                   -> Hot Reload

POST - /classes
{
  "name": "Gustavo Carvalho",
  "avatar": "https://media-exp1.licdn.com/dms/image/C4D03AQFJlEfvKl5Z8w/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=9SfRNhOVt7tuV_vwhAy095P83MSZa38Ra8Jk6MEg8PY",
  "whatsapp": "991676181",
  "bio": "Sou desenvolvedor a algum tempo, tenho uma boa experiência com Java e Bibliotecas JavaScript. Meu diferencial? Sou um multiplicador de conhecimento, busco unir o time porque juntos aprendemos mais. ",
  "subject": "Vue",
  "cost": 120,
  "schedule": [
    {
      "week_day": 1,
      "from": "08:00",
      "to": "12:00"
    },
    {
      "week_day": 2,
      "from": "08:00",
      "to": "12:00"
    },
    {
      "week_day": 3,
      "from": "08:00",
      "to": "15:00"
    }
  ]
}
```