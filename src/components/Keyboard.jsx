// Shows a button for every letter. Used letters are turned off
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')

function Keyboard(props) {
  return (
    <div>
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => props.onPick(letter)}
          disabled={props.guessed.includes(letter) || props.gameOver}
        >
          {letter}
        </button>
      ))}
    </div>
  )
}

export default Keyboard
