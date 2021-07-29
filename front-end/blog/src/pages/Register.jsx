import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../components/RegisterForm';

import {Alert} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { register } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { userState$ } from '../redux/selectors';

Register.propTypes = {};


function Register(props) {

    
    const history = useHistory();
    const dispatch = useDispatch();
    const [alert, setAlert] = useState('');


    const HandleSubmit = (values) => {

        console.log("here is register in pages ", values);
        dispatch(register.registerRequest(values));

        history.push('/login');

        const fail = useSelector(userState$);

        console.log("aaaaaaaa", fail);

    }

    return (
        <div>
            {alert && <Alert color="danger">{alert}</Alert>}
            <RegisterForm onSubmit={HandleSubmit}/>
        </div>
    );
}

export default Register;