# Hangman

A hangman game built with React and Vite that runs in Docker.

## Description

The player has 5 lives and tries to guess a secret word one letter at a time. Each wrong guess changes the hangman picture. The game ends when the word is guessed (win) or all 5 lives are used (loss).

The game has these features:

- Shows the current hangman picture (6 pictures for 5 lives)
- Lets the user pick a letter
- Shows the letters the user has chosen
- New game button
- Pop up that tells the user if they won or lost

## Built with

- React
- Vite
- Docker and Docker Compose

## Installation

### With Docker (recommended)

1. Install Docker Desktop and make sure it is running.
2. Open a terminal in the project folder.
3. Run:

```bash
docker compose up --build
```

### Without Docker

1. Install Node 18 or newer.
2. Open a terminal in the project folder.
3. Run:

```bash
npm install
npm run dev
```

## Usage

Open http://localhost:5173 in a browser. Click a letter to guess it. Click New game at any time to start over.

To stop the game when using Docker, press Ctrl+C in the terminal and run:

```bash
docker compose down
```

## Project structure

```
src/
  App.jsx                Game state and logic
  words.js               List of words
  components/
    Picture.jsx          Hangman picture
    Word.jsx             Blanks and guessed letters
    Keyboard.jsx         Letter buttons
    Popup.jsx            Win or lose pop up
  assets/                The 6 hangman pictures
```

`App` keeps two pieces of state: the secret word and the letters guessed. The number of wrong guesses, and whether the player won or lost, are worked out from those two. The other components get data through props and send clicks back to `App` with functions.

## Support

If something does not work, make sure Docker Desktop is running and that nothing else is using port 5173.

## Roadmap

Ideas for later: a bigger word list, hints, and a score counter.

## Authors and acknowledgment

Made by Andre for a class assignment. The hangman pictures were provided by the professor.

## AI contribution

Parts of this project were written with help from Claude (Anthropic). I reviewed, tested, and understand the code I am submitting.

## Project status

Finished for the class assignment.
