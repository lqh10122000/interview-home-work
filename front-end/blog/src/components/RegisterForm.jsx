import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button} from 'reactstrap';
import { FastField, Form, Formik } from 'formik';
import InputField from '../custom-field/InputField';
import * as Yup from 'yup';
import './RegisterForm.scss';


RegisterForm.propTypes = {
    onSubmit: PropTypes.func
};

RegisterForm.defaultProps = {
    onSubmit: null
}

function RegisterForm(props) {

    const initialValues = { email: '', password: '', passwordConfirmation: '' };

    const validationSchema = Yup.object().shape({

        username: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
        name: Yup.string()
        .required('Required'),
        dob: Yup.date()
        .required('Required'),
        password: Yup.string()
        .required('No password provided.') 
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
    });


    return (

        <Formik
            initialValues={initialValues}
            onSubmit={props.onSubmit}
            validationSchema={validationSchema}
        >
            {formikProps => {
           
                return (

                    <Form>
                    
                        <Container className="SignUp">

                            <Row className="SignUp-Label">

                                <h1 className="SignUp-Label-h1">Register</h1>
                            </Row>

                            <Row className="SignUp-Row" >
                                <Col xs="3">
                                </Col>
                
                                <Col xs="6" className="SignUp-Row-Col2">
                
                                    <Row>
                                        <FastField name="username"
                                        component={InputField}
                                        label = "username"
                                        placeholder="username..."/>

                                    </Row>
                                    <Row>
                                        <FastField name="name"
                                        component={InputField}
                                        label = "name"
                                        placeholder="name..."/>

                                    </Row>
                                    <Row>
                                        <FastField name="dob"
                                        component={InputField}
                                        type="date"
                                        label = "Date of birth"
                                        placeholder="Date of birth..."/>

                                    </Row>
                                    <Row>
                                        <FastField name="password"
                                        component={InputField}
                                        type = "password"
                                        label = "PassWord"
                                        placeholder="PassWord..."/>

                                    </Row>
                                    <Row>
                                        <FastField name="passwordConfirmation"
                                        component={InputField}
                                        type = "password"
                                        label = "password Confirmation"
                                        placeholder="password Confirmation..."/>
                                        

                                    </Row>
                                    <Row className="SignUp-Row-Col2-Row3">
                                        <Button color="primary" type="submit">Register</Button>{' '}
                                    </Row>

                                </Col>
                                
                                <Col xs="3">
                                </Col>
                
                            </Row>
                            
                        </Container>
                            
                    
                    </Form>
                );

            }}
        
        
        </Formik>



    );
}




export default RegisterForm;