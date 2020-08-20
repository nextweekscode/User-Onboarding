import React, { useState, useEffect} from 'react';
import Form from './Form'
import Employee from './Employee'
import formSchema from './FormSchema'
import axios from 'axios'
import * as yup from 'yup'


const initialFormValues = {
  first_name: '',
  email: '',
  password: '',
  position: '',
  terms: {
    yes: false,
  },
}

const initialFormErrors = {
  first_name: '',
  email: '',
  password: '',
}

const initialEmployees = []
const initialDisabled = true

function App() {

  const [employees, setEmployees] = useState(initialEmployees)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getEmployees = () => {
    axios.get('https://reqres.in/api/users')
    .then(res => {
      setEmployees(res.data.data)
      console.log(res.data.data)
      
    })
    .catch(err => {
      console.log(err)
    })
  }

  const postNewEmployee = newEmployee => {
    axios.post('https://reqres.in/api/users', newEmployee)
    .then(res => {
      setEmployees([...employees, res.data])
      console.log(employees)
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

const checkboxChange = (name, isChecked) => {
  setFormValues({
    ...formValues,
    terms: {
      ...formValues.terms,
      [name]: isChecked,
    }
  })

}


const submit = () => {
  const newEmployee = {
    first_name: formValues.first_name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    position: formValues.position,
    terms: Object.keys(formValues.terms).filter(term => formValues[term])
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
     <Form
     values={formValues}
     inputChange={inputChange}
     checkboxChange={checkboxChange}
     submit={submit}
     disabled={disabled}
     errors={formErrors}/>

     { 
      employees.map(emp => {
       return (
         
         <Employee key={emp.id} details={emp}/>
       )
     })}
    </div>
    </>
  );
}

export default App;
