import React, { Component } from 'react'
import { Form, Field } from "@progress/kendo-react-form";
import { Input} from 'rbx'

export default class Signup extends Component{
    render() {
  const handleSubmit = (data, event) => {
    console.log(`
      Email: ${data.email}
      Password: ${data.password}
      Country: ${data.country}
      Accepted Terms: ${data.acceptedTerms}
    `);

    event.preventDefault();
  }

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={{}}
      render={(formRenderProps) => (
        <form onSubmit={formRenderProps.onSubmit}>
          <h1>Create Account</h1>

          <Field
            label="Email:"
            name="email"
            fieldType="email"
            component={Input} />

          <Field
            label="Password:"
            name="password"
            fieldType="password"
            component={Input} />

       

          <Field
            label="I accept the terms of service"
            name="acceptedTerms"/>

          <button>Submit</button>
        </form>
      )}>
    </Form>
  );
}
}