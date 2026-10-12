// Shows the secret word. Letters not guessed yet show as _
function Word(props) {
  const shown = props.word.split('').map((letter) => {
    if (props.guessed.includes(letter)) {
      return letter
    }
    return '_'
  })

  return <h2 className="word">{shown.join(' ')}</h2>
}

export default Word
