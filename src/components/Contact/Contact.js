import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    message: Yup.string()
        .min(30, 'Too Short!')
        .max(1000, 'Too Long!')
        .required('Required'),
  });


const Contact = () => {
    return (
        <div>
            <Formik 
            initialValues={{
                name:'',
                email:'',
                phone: '',
                message: '',

            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => console.log(values)}>

            {({errors, touched}) => (
                <Form name="ola-contact" data-netlify={true}>
                    <Field type="hidden" name="bot-field" id='bot-field' />
                    <label htmlFor="name">NAME</label>
                    {errors.name && touched.name ? (<div className="error">{errors.name}</div>) : null}
                    <Field name="name" id="name" />
                        
                        
                    <label htmlFor="email">Email</label>
                    {errors.email && touched.email ? <div className="error">{errors.email}</div> : null}
                    <Field name="email" type="email" id="email" />

                    <label htmlFor="phone">PHONE NUMBER</label>
                    {errors.phone && touched.phone ? (<div className="error">{errors.phone}</div>) : null}
                    <Field name="phone" id="phone" />

                    <label htmlFor="message">Message</label>
                    {errors.message && touched.message ? (<div className="error">{errors.message}</div>) : null}
                    <Field name="message" id="message" />
                    <button type="submit"> submit </button>
                </Form>
            )}


            </Formik>
        </div>
    )
}

export default Contact