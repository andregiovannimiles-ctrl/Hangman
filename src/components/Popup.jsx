// The pop up that says if you won or lost
function Popup(props) {
  return (
    <div className="popup">
      <h2>{props.won ? 'You won!' : 'You lost'}</h2>
      <p>The word was {props.word}</p>
      <button onClick={props.onNewGame}>Play again</button>
    </div>
  )
}

export default Popup
