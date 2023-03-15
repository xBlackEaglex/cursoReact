import { useState } from "react";

function App() {

  const [value, setValue] = useState({
    normal: 'por defecto',
    texto: '',
    select: 'chanchoFeliz',
    check: false,
    estado: 'felipe'
  })

  const handleChange = ({target}) => {
    setValue({
      ...value,
      [target.name]: target.type === 'checkbox' 
      ? target.checked 
      : target.value     //el operador ternario solo se usa si el formulario tiene checkbox o radio button
    })
  }

  console.log(value)

  return (
    <div>
      {value.length < 5 ? <span>longitud minima de 5</span> : null}
      <input name="normal" type='text' value={value.normal} onChange={handleChange} />
      <textarea name="texto" value={value.texto} onChange={handleChange} />

      <select value={value.select} name='select' onChange={handleChange}>
        <option value='' >---Seleccione---</option>
        <option value='chanchoFeliz' >Chancho feliz</option>
        <option value='chanchitoFeliz' >Chanchito feliz</option>
        <option value='chanchitoTriste' >Chanchito triste</option>
        <option value='felipe' >Felipe</option>
      </select>

      <input 
        type='checkbox' 
        name="check" 
        onChange={handleChange}
        checked={value.check}
      />

      <div>
        <label>Chancho</label>
        <input 
          onChange={handleChange} 
          type='radio' 
          value='feliz' 
          name='estado' 
          checked={value.estado === 'feliz'} 
        /> Feliz
        <input 
          onChange={handleChange} 
          type='radio' 
          value='triste' 
          name='estado' 
          checked={value.estado === 'triste'} 
        /> Triste
        <input 
          onChange={handleChange} 
          type='radio' 
          value='felipe' 
          name='estado' 
          checked={value.estado === 'felipe'} 
        /> Felipe
      </div>

    </div>
  );
}













/**
  
  

    >>> asi se obtiene valor de un solo input o componente  



  function App() {

  const [value, setValue] = useState('')
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  console.log(value)
  return (
    <div>
      <input name="normal" type='text' value={value} onChange={handleChange} />
    </div>
  );
}



 */


export default App;