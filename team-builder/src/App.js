import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form'
import schema from './formSchema'
import axios from 'axios'
import * as yup from 'yup'

const initialUsers = []

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: '',
}

const initialValues = {
  name: '',
  email: '',
  password: '',
  terms: null,
}

 const initialDisabled = null

function App() {
  // set state
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewUser = newUser=> {
    axios.post("https://reqres.in/api/users", newUser)
      .then(res => {
        console.log(res)
        setUsers([...users, res.data])
        setFormValues(initialValues)
      })
      .catch(err => {
        debugger //eslint-disable-line
        console.log(err)
      })
  }


  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({...formErrors, [name]: ""})
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })
    }  

  const change = (name, value) => {
    validate(name, value)
    setFormValues({...formValues, [name]: value})

  }

  const submit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: ['Accepted'],
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  return (
    <div className="App">
      <h1>Join Our Team Of Highly Trained Professionals That Are Trained At Being Professional</h1>
      <Form
      values={formValues}
      errors={formErrors}
      disabled={disabled}
      change={change}
      submit={submit}
      />

      {
        users.map((user, idx) => (
          <div key={idx}>
            <h3>Name: {user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Password: {user.password.length}</p>
            <p>Terms: {user.terms}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
