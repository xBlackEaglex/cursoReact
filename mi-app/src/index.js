import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//------------------------------------------------------------------------------
//esto viene en la creación de create-react-app


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//------------------------------------------------------------------------------

// Esto es parte de los ejercicios de la clase

// const Li = ({ children, estado, casa, edad }) => {
//   console.log(casa, edad)
//   return (
//     <li>{ children } estoy { estado }</li>
//   )
// } 

// const X = () => 
//   <ul>
//     <Li 
//       estado={'Feliz'}
//       casa={false}
//       edad={24}
//       >
//         Chanchito
//     </Li>
//     <Li estado={'triste'}>Chanchito</Li>
//     <Li estado={'emocionado'}>Felipe</Li>
//   </ul>


// ReactDOM.render(<X />,  document.getElementById('root'))


//------------------------------------------------------------------------------------------------


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
