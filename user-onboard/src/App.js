import React, { useState, useEffect} from 'react';
import { v4 as uuid } from 'uuid'
import Form from './Form'
import Employee from './Employee'
import formSchema from './FormSchema'
import axios from 'axios'
import * as yup from 'yup'


const initialFormValues = {
  name: '',
}

const initialFormErrors = {
  name: '',
}

const initialEmployees = []
const initialDisabled = true

function App() {

  const [employees, setEmployees] = useState(initialEmployees)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getEmployees = () => {
    axios.get('http://reqres.in/api/users')
    .then(res => {
      setEmployees(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const postNewEmployee = newEmployee => {
    axios.post('http://reqres.in/api/users', newEmployee)
    .then(res => {
      setEmployees([...employees, res.data])
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
  }

  const inputChange = (name, value) => {
    yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: ""
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]:err.errors[0]
      })
    })
    setFormValues({
      ...formValues,
      [name]: value
    })
}

const checkboxCHange = (name, isChecked) => {

}


const submit = () => {
  const newEmployee = {
    name: formValues.name.trim(),
  }
  postNewEmployee(newEmployee)
}

useEffect(() => {
  getEmployees()
}, [])

useEffect(() => {
  formSchema.isValid(formValues)
  .then(valid => {
    setDisabled(!valid)
  })
}, [formValues])
  



  return (
    <>
    <div className="container">
      <header><h1>Members App</h1></header>
     <Form/>
    </div>
    </>
  );
}

export default App;
