// Shows the hangman picture for the number of wrong guesses (0 to 5)
import pic0 from '../assets/0-noose.png'
import pic1 from '../assets/1-upperbody.png'
import pic2 from '../assets/2-1arm.png'
import pic3 from '../assets/3-botharms.png'
import pic4 from '../assets/4-1leg.png'
import pic5 from '../assets/5-dead.png'

const pictures = [pic0, pic1, pic2, pic3, pic4, pic5]

function Picture(props) {
  return <img src={pictures[props.wrong]} alt="hangman" height="300" />
}

export default Picture
