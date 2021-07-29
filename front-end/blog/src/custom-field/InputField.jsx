import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label, FormFeedback } from 'reactstrap';
import './InputField.scss';
import { ErrorMessage } from 'formik';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
}


InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '', 
    disabled: false,
    value: '',
    onChange: null,
}


function InputField(props) {

    const {field, form, type, label, placeholder, disabled, value} = props;
    const {name} = field;
    const {errors, touched, onChange} = form;
    console.log('name :', name);

    const handleChange = (e) =>
    {
        onChange = e.target.value;
    }

    const showError = errors[name] && touched[name];
    console.log(props);

    return (
        <FormGroup className="custom-feild">
        
            {label && <Label className="custom-feild__label">{label}</Label>}

            <Input
                id={name}
                {...field}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                // value={value}
               
                className="custom-feild__input"
                invalid={showError}
            />
            <ErrorMessage name={name} component={FormFeedback}/>

        </FormGroup>
    );
}

export default InputField;