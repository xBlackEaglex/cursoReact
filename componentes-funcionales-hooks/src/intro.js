const impura = () => new Date().toLocaleString()
//las funciones impuras son aquellas que cada ves que son llamadas retornan algo distinto

console.log(impura())
// en este caso es impura por que la fecha actual siempre cambiara 


// función pura, siempre devolverá lo mismo y en React todas los componentes funcionales deben ser funciones puras
const MiComponente = ({ miProp }) => {
  return (
    <div>
      nombre: {miProp}
    </div>
  )
}

const App = () => {
  return (
    <MiComponente miProp={'chanchito'} />
  )
}

export default App;
