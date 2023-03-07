// import './App.css';
import './main.css'


//--------------------------------------------------------------------------------------------------------------------------------

//usando inline style

// const estilo2 = {
//   boxShadow: '0 5px 3px rgba(0, 0, 0, 0.5)'
// }

// const estilo = (bg = '#333') => ({
//   backgroundColor: bg,
//   color: '#fff',
//   padding: '10px 15px',
//   margin: '10px 15px'
// })

// const Li = ({children}) => {
//   return (
//     <li style={{...estilo2, ...estilo()}} className="clase-li">{children}</li>
//   )
// }


// function App() {
//   const valor = 'Feliz'
//   return (
//     <ul style={estilo('#750')} className="clase-css">
//       <Li estado="Feliz">valor de li</Li>
//     </ul>
//   );
// }



//--------------------------------------------------------------------------------------------------------------------------------

//usando class css

const Li = ({children}) => {
  return (
    <li className="clase-li">{children}</li>
  )
}

function App() {
  return (
    <ul className="clase-css">
      <Li estado="Feliz">valor de li</Li>
    </ul>
  );
}

export default App;
