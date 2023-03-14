import { useState } from "react"


// reglas de los hooks:
  // no se llaman en loops ni condiciones, ni while, ni nada
  // siempre en el nivel mas alto del componente
// solo se llaman en dos partes:
  // componentes de React 
  // custom hooks
// cuando creemos un custom hook siempre se inicia su nombre con use*  

const useContador = (inicial) => {
  const [contador, setContador]  = useState(inicial)
  const incrementar = () => {
    setContador(contador + 1) 
  }
  return [contador, incrementar]
}

const App = () => {
  const [ contador, incrementar ] = useContador(0)
  return (
    <div>
      Contador: {contador}
      <button onClick={incrementar}>Incrementar</button>
    </div>
  )
}

export default App