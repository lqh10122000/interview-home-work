import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col} from 'reactstrap';
import { FastField, Form, Formik } from 'formik';
import InputField from '../custom-field/InputField';    
import * as Yup from 'yup';
import './LoginForm.scss';
import { Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions';
import { useHistory } from 'react-router-dom';

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
    onSubmit: PropTypes.func,
}

function LoginForm(props) {

    // const {initialValues} = props;
   
    const initialValues = { username: '', password: '' };
    const dispatch = useDispatch();

    const [data, setData] = useState({
        username :'', 
        password : ''
    });

    


    // const handleSubmit = async (values) => {


    //     console.log('da vao trong click submit ~', values);
    //     dispatch(login.loginRequest(data));

    // };

    // const handleChange = (e) => {

    //     console.log('đang change ', e.target.value);
    //     setData({...data, username: e.target.value});
    // }

    const validationSchema = Yup.object().shape({
        username: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

        password: Yup.string()
        .required('No password provided.') 
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    });

    return (

        <Formik
            onSubmit={props.onSubmit}
            validationSchema = {validationSchema}
            initialValues={initialValues}
        >
        
        {formik => {
                return (

                    <Form>
                    
                        <Container className="SignIn">

                            <Row className="SignIn-Label">

                                <h1 className="SignIn-Label-h1">Login</h1>
                            </Row>

                            <Row className="SignIn-Row" >
                                <Col xs="3">
                                </Col>
                
                                <Col xs="6" className="SignIn-Row-Col2">
                
                                    <Row>
                                        <FastField name="username"
                                        component={InputField}
                                        label = "username"
                                        placeholder="username..."/>

                                    </Row>
                                    <Row>
                                        <FastField name="password"
                                        component={InputField}
                                        label = "PassWord"
                                        type="password"
                                        placeholder="PassWord..."/>
                                    </Row>

                                    <Row className="SignIn-Row-login">
                                        <Button color="primary" type="submit">Login</Button>{' '}
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

export default LoginForm;