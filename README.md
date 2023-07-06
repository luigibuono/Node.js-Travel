
# Node js project

#MODIFICHE APPORTATE POST FEEDBACK NON SEGNALATE IN PDF


## Introduction

- Project track

- all the packages necessary for the code to work

- All about the project step by step explanation

- How to use


## Project Track 
Le API devono tutte rispettare l’architettura REST, in particolare il naming, i metodi e gli status code di risposta
Le API dovranno consentire l’inserimento, la modifica e la cancellazione di un prodotto venduto che ha una caratteristica: il nome.
Le API dovranno consentire l’inserimento, la modifica e la cancellazione di un’anagrafica di un utente con le seguenti caratteristiche: nome, cognome, email.
Le API dovranno consentire l’inserimento, la modifica e la cancellazione, di un ordine di vendita che avrà le seguenti caratteristiche: i prodotti di quell’ordine, gli utenti che fanno parte di quell’ordine.
Le API dovranno infine consentire di visualizzare tutti gli ordini, di filtrare e visualizzare per data di inserimento degli ordini e per i prodotti in esso contenuti.
Puoi usare MySQL o MongoDB per archiviare le tue informazioni. Se scegli di utilizzare MySQL ricorda di includere un file migrations.sql per ricostruire la struttura del tuo database.
Se utilizzi MySQL ricordati che tutte le query fatte al database dovranno essere sanitizzate e non dovranno essere vulnerabili ad attacchi di tipo SQL Injection. È richiesto pertanto l’utilizzo dei prepared statement per prevenire questa tipologia di attacchi.
Ricordati che anche MongoDB può subire attacchi di tipo NoSQL Injection, qui degli esempi di OWASP, prendi le opportune precauzioni. 



# Installation 
1. Aprire gitHub Desktop e fare la registrazione con il proprio account gitHub.
2. Andare su clone repository e selezionare URL
3. inserire l'url https://github.com/luigibuono/Node.js-Travel
4. Nel promt dei comandi Node digitare npm install per i node_modules.
5. digitare npm start per mandare l'applicazione
6. postarsi su un ambiente di sviluppo API a piacere (io consiglio POSTMAN)


## Packages
 "devDependencies": {
    "jest": "^29.2.2",
    "mongodb-memory-server": "^8.9.4",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.20",
    "supertest": "^6.3.1"
  },
  "dependencies": {
    "body-parser": "^1.20.1",
    "cors": "^2.8.5",
    "date-fns": "^2.29.3",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "helmet": "^6.0.0",
    "mongoose": "^6.7.0"
  }
## all about the project 
File principale  : app.js
File database    : database.js
File connessione server : server.js
controllers con i metodi : orders,products,user
models : valori da assegnare imposti nella traccia
routes : Routes 


## how to use
Generare url da mongo :
https://cloud.mongodb.com/ aprire mongodb e fare un proprio Cluster ( mongodb+srv://<username>:<password>@cluster0.9qyyy4t.mongodb.net/?retryWrites=true&w=majority)
e dopodichè nel proprio file .env inserire l'ulr   DB_URI = URL MODIFICATO  


*mi raccomando prima di iniziare da node digitare npm start ( fa partire il nostro nodemon con live )

Passiamo a POSTMAN : Crea una new collection , dove all'interno add una request... iniziamo da una POST

RICHIESTA POST : localhost:3000/users = creazione utente
RICHIESTA POST: localhost:3000/products = creazione prodotti
RICHIESTA POST:localhost:3000/orders= creazione ordini 



RICHIESTA GET : localhost:3000/orders/:orderId = filtrare ordini in base l'id



CAMBIANDO END-POINT POSSIAMO FARE ALTRE RICHIESTE COME PATCH E DELETE 


ESEMPIO PER UN ORDINE :
{
  "product": "INSERIRE ID",
  "user": "iINSERIRE USER_ID ",
  "createdOn": "DEFAULT"
}


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Author

Luigi Buono - start2impact student


## FAQ

#### Question 1

What is POSTMAN :
Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.

#### Question 2

What is MongoDB :

MongoDB is a document database NoSQL that gives you the scalability and flexibility you want along with the indexes and queries you need





## 🚀 About Me
I'm a full stack developer...

This is my Portfolio:

https://s2i-progetto-html-css.netlify.app
## Used By

This project is used by the following companies:

- Orizon
- Start2Impact

