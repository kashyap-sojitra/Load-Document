![capture](https://github.com/user-attachments/assets/fbde2bcb-ffa3-4852-b73c-e7f3a475ff8c)
## Description

This is backend for load document task in which I have integrated update, create and delete in one api.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

### Tools

I have used backend in nest.js with integration of postgresql database using prisma ORM. To host the database I have cloud platform called `supabase`.


### Payload

I have used the payload like this to call the api

```bash
{
  "createLoadDocument": [
    {
      "color": string,
      "name": string,
      "length": number,
      "width": number,
      "height": number,
      "weight": number,
      "quantity": number,
      "stackable": boolean,
      "tiltable": boolean
    }
  ],
  "updateLoadDocument": [
    {
      "id": number,
      "color": string,
      "name": string,
      "length": number,
      "width": number,
      "height": number,
      "weight": number,
      "quantity": number,
      "stackable": boolean,
      "tiltable": boolean
    }
  ],
  "deleteLoadDocument": number[]
}
```
### Prod link

``` https://load-document.onrender.com ```

### Sample curl
``` 
curl --location 'https://load-document.onrender.com/api/load/save' \
--header 'Content-Type: application/json' \
--data '{
  "createLoadDocument": [
    {
      "color": "red",
      "name": "1111112234455667",
      "length": 3333,
      "width": 2222,
      "height": 333,
      "weight": 5,
      "quantity": 3,
      "stackable": true,
      "tiltable": false
    }
  ],
  "updateLoadDocument": [
    {
      "id": 4,
      "color": "orange",
      "name": "1111112234455667",
      "length": 444,
      "width": 22,
      "height": 333333,
      "weight": 55,
      "quantity": 3,
      "stackable": false,
      "tiltable": true
    }
  ],
  "deleteLoadDocument": [21]
}
' 
```

