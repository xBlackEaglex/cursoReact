// import Button from "./Button"

// const arr = [
//     'chanchito feliz',
//     'chanchito triste',
//     'chanchito emocionado',
// ]

// const App = () => {
//     const miVariables = false

//     if (miVariables) {
//         return <p>mi variables dio true!</p>
//     }

//     return(
//         <div>
//             <h1 onClick={(e) => console.log('click', e)}>Hola Mundo</h1>
//             {arr.map(el => <p key={el}>{el}</p>)}
//             <Button onClick = {() => console.log('Clickeado')}>
//                 Enviar
//             </Button>
//         </div>
//     )
// }

//--------------------------------------------------------------------------------------------------------------------------------

// se inicio l aparte del curso componentes basados en clases 

import { Component } from 'react'


class Button extends Component {
    constructor(props) {
        super(props)
        console.log('constructor', props)
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', prevProps, prevState)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount', this.props, this.state)
    }

    render() {
        console.log('ejecutando método de render de button')
        return (
            <button onClick={() => this.setState({ prop: 1 })}>
                ENVIAR
            </button>
        )
    }
}


class App extends Component {
    state = {    // este nombre es obligatorio para react 
        valor: 3
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <p>
                    Hola Mundo!!
                </p>
                {this.state.valor === 3
                    ? <Button chanchito = 'feliz' />
                : null}
                <button onClick={() => this.setState({valor: 2})}>
                    Enviar en App
                </button>
            </div>
        )
    }
}

export default App