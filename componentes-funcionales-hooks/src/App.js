import { useRef } from "react"

const App = () => {
  const ref = useRef()
  const inputRef = useRef()
  const click = () => {
    console.log(ref.current.clientHeight)
    ref.current.innerHTML = 'chanchito Feliz'
  }

  const focus = () => {
    inputRef.current.focus()
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focus}>Fucus</button>
      <div onClick={click} ref={ref}>Lala</div>
    </div>
  )
}

export default App