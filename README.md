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


