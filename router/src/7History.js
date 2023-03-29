import { Routes, Route, Link, useNavigate } from 'react-router-dom'

function App() {

  const history = useNavigate()
  console.log({history});

  const back = () => {
    history(-1)
  }

  const forward = () => {
    history(1)
  }

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
        </ul>
      </nav>
      <section>
        <button onClick={back}>Back</button>
        <button onClick={forward}>Forward</button>
        <Routes>
          <Route exact path="*" element={<h2>404: ruta no encontrada</h2>} />
          <Route exact path="/" element={<h1>Inicio</h1>} />
          <Route path="/perfil" element={<h1>Perfil</h1>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;