import { Formik, Form, ErrorMessage } from "formik";
import TextInput from './components/TextInput'
import Checkbox from "./components/Checkbox";
import Radio from "./components/Radio";
import Select from "./components/Select";

const validate = (values) => {
  const errors = {}

  if(!values.name) {
    errors.name = 'Requerido'
  } else if (values.name.length < 5) {
    errors.name = 'El nombre es muy corto'
  }

  if(!values.lastName) {
    errors.lastName = 'Requerido'
  } else if (values.lastName.length < 5) {
    errors.lastName = 'El Apellido es muy corto'
  }

  if (!values.radio) {
    errors.radio = 'Requerido'
  }

  return errors
}

function App() {
  return (
    <Formik
    initialValues={{name: '', lastName: '', email: '', chancho: '', radio: ''}}
    validate={validate}
    onSubmit={values => console.log(values)}
    > 
      <Form>
        <TextInput name='name' label='Nombre' />
        <br />
        <TextInput name='lastName' label='Apellido' />
        <br />
        <TextInput name='email' label='Correo' />
        <Select label='Tipo de Chancho' name='chancho'>
          <option value=''>Seleccione Chancho</option>
          <option value='felipe'>Felipe</option>
          <option value='ChanchitoFeliz'>chanchito Feliz</option>
          <option value='ChanchitoTriste'>chanchito Triste</option>
        </Select>
        <Checkbox name='accept'>
          Aceptar términos y condiciones
        </Checkbox>
        <Radio name='radio' value='chanchito 1' label='chanchito 1'/>
        <Radio name='radio' value='chanchito 2' label='chanchito 2'/>
        <Radio name='radio' value='chanchito 3' label='chanchito 3'/>
        <ErrorMessage name='radio' />
        <button type="submit">Enviar</button>
      </Form>
    </Formik>

  );
}

export default App;
