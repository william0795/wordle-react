# Wordle React

## Build and run

### Ejecutar Localmente

Clone the repository and perform the following command line actions:

```bash
$> cd react-wordle
$> npm install
$> npm run start
```

#### Development

```bash
$> docker build -t reactle:dev -f docker/Dockerfile .
$> docker run -d -p 3000:3000 --name reactle-dev reactle:dev
```

Open [http://localhost:3000](http://localhost:3000) in browser.

### Palabras para el Juego

Las posibles soluciones están en el archivo src/constants/wordlist.ts si desean agregar mas palabras las podrían ingresar en ese archivo y ademas también las deberán ingresar en el src/constants/validGuesses.ts
