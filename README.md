
# Node js project




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


## Packages
npm chai chai-as-promised cors crypto-js dotenv express jsonwebtoken mocha mongoose nock nodemon nyc request sinon sinon-chai

## all about the project 
file principale index.js | cartella routes con i metodi di:per user/order e product : creazione(POST), modifica(PUT) ,cancellazione (DELETE),visualizzazione(GET ONE , GET ALL ) + un aggiunta ad user (GET USER STATS)
In auth REGISTER E LOGIN USER (POST) autorizzazione con token da verificare

Come plus aprire terminale da Mocha---sample-test-cases e digitare npm run coverage per un semplice test di prova

## how to use

https://cloud.mongodb.com/ aprire mongodb e fare un proprio Cluster ( mongodb+srv://<username>:<password>@cluster0.9qyyy4t.mongodb.net/?retryWrites=true&w=majority)
e dopodichè nel proprio file .env inserire l'ulr modificando nome e password  MONGO_URL = URL MODIFICATO  
siccome ci troviamo,inseriamo anche le altre variabili che si servirano per dopo ( i valori aggiungeteli in base al vostro utente creato )
PASS_SEC = 
JWT_SEC = 

*mi raccomando prima di iniziare da node digitare npm start ( fa partire il nostro nodemon con live )

Passiamo a POSTMAN : Crea una new collection , dove all'interno add una request... iniziamo da una POST
localhost:5000/api/auth/register il nostro local host è 5000 voi potete mettere quello che preferite.
Nel body inseriamo un username un email e una password e mandiamo SEND.
localhost:5000/api/auth/login effettuiamo il login con username e password , ma in questo caso nell'Headers dovremo aggiungere la key token e il value Bearer con il token generato dalla registrazione
Dopodichè potremo fare tutto quello che preferiamo ,fare stesso procedimento per gli order e product , fare la chiamata GET per visualizzarli.
Tutte le nostre modifiche saranno visibili sul nostro cluster mongoDB dove potremo filtrare gli utenti/ordini ecc anche solo grazie a un valore 




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

