import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';
import { useHistory } from 'react-router-dom';
import { Alert } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/actions';
import { userState$ } from '../redux/selectors';

Login.propTypes = {
    
};

function Login(props) {

    const dispatch = useDispatch();

    const [alert, setAlert] = useState('');
    
    const history = useHistory();

    const HandleSubmit = async (values) => {

        console.log("here is login in pages ", values);
        
        
        
        
        
        dispatch(actions.login.loginRequest(values));
        
        
        const msg = useSelector(userState$);

        // function* handleSignInResult(action: actions.login.loginRequest ): Generator {
        //     if (!action.payload.error) {
        //       yield call(history.push, routerPaths.errorHandlingHome);
        //     }
        //   }
        

        
        
        // console.log(dispatch(login.loginFailure(values)));
        console.log("aaaaaaaa", msg);
        history.push('/blog');
        
        

    }

    return (
        <div>
            {alert && <Alert>{alert}</Alert>}
            <LoginForm onSubmit={HandleSubmit} />
        </div>
    );
}

export default Login;