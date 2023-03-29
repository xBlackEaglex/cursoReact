import { Routes, Route, NavLink, useParams } from 'react-router-dom'

const Proyecto = () => {
  const {proyecto_id} = useParams()
  return(
    <h2>Proyecto {proyecto_id}</h2>
  )
}

const Portafolio = () => {
  return(
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <NavLink to='proyecto-1'>Proyecto 1</NavLink>
        </li>
        <li>
          <NavLink to='proyecto-2'>Proyecto 2</NavLink>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path='/:proyecto_id' element={<Proyecto />} />
        </Routes>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/portafolio">Portafolio</NavLink>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/" element={<h1>Inicio</h1>} />
          <Route path="portafolio/*" element={<Portafolio />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
