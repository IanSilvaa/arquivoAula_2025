import './Demo1.css'
import { FcAlarmClock } from "react-icons/fc";
import { GiBatMask } from "react-icons/gi";

function Demo1() {
  function responderClique(){
    alert('Parabéns, você clicou!')
  }

  return (
    <div className='container-demo1'>
        <button onClick={responderClique}>Cliqeu aqui</button>
        <button onClick={() => {alert('Eu nasci de uma arrow function')}}> ➡️ </button>
      
      <img className = 'img-dev' src="./imagens/Developer activity-amico.svg" alt="" />
      <FcAlarmClock />
      <GiBatMask />
    </div>
  )
}

export default Demo1