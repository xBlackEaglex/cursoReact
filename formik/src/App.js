import { Formik, Form, Field, ErrorMessage } from "formik";
import TextInput from './components/TextInput'

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

  return errors
}

function App() {
  return (
    <Formik
    initialValues={{name: '', lastName: '', email: '',}}
    validate={validate}
    onSubmit={values => console.log(values)}
    > 
      <Form>
        <TextInput name='name' label='Nombre' />
        <br />
        <label>Apellido</label>
        <Field name='lastName' type='text' />
        <ErrorMessage name="name" />
        <br />
        <label>Email</label>
        <Field name='email' type='email' />
        <ErrorMessage name="email" />
        <button type="submit">Enviar</button>
      </Form>
    </Formik>

  );
}

export default App;
