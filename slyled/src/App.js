import styled from "styled-components";

const P = styled.p`
  font-size: 24px;
  color: red;
`
const Content = styled.div`
  padding: 20px 25px;
`
const Button = styled.button`
  background-color: ${props => props.primary ? 'red' : 'white'};
  color: ${props => props.primary ? 'while' : 'red'};
  padding: 10px 15px;
  border: solid 2px red;
  border-radius: 4px;
`

function App() {
  return (
    <Content>
      <P>Hola soy un párrafo</P>
      <Button>Enviar</Button>
      <Button primary>Enviar</Button>
    </Content>
  );
}

export default App;
