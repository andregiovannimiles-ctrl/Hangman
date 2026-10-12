import { useState } from 'react'
import Picture from './components/Picture'
import Word from './components/Word'
import Keyboard from './components/Keyboard'
import Popup from './components/Popup'
import { words } from './words'

// Picks a random word from the list
function randomWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  // State = things that change while you play
  const [word, setWord] = useState(randomWord())
  const [guessed, setGuessed] = useState([])

  // Work out the rest from the two things above
  const wrong = guessed.filter((letter) => !word.includes(letter)).length
  const won = word.split('').every((letter) => guessed.includes(letter))
  const lost = wrong >= 5
  const gameOver = won || lost

  // Runs when the user clicks a letter
  function pickLetter(letter) {
    setGuessed([...guessed, letter])
  }

  // Runs when the user clicks New game
  function newGame() {
    setWord(randomWord())
    setGuessed([])
  }

  return (
    <div className="app">
      <h1>Hangman</h1>
      <p>Lives left: {5 - wrong}</p>
      <Picture wrong={wrong} />
      <Word word={word} guessed={guessed} />
      <p>Letters guessed: {guessed.join(', ')}</p>
      <Keyboard guessed={guessed} onPick={pickLetter} gameOver={gameOver} />
      <br />
      <button onClick={newGame}>New game</button>
      {gameOver && <Popup won={won} word={word} onNewGame={newGame} />}
    </div>
  )
}

export default App
