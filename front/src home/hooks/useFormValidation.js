import {useState, useEffect } from 'react';

function useFormValidation(initState, validate){
    const [ values, setValues ] = useState(initState, validate);
    const [ errors , setErrors ] = useState({});
    const [ isSubmitting, setSubmitting ] = useState(false);


    useEffect(() => {
        if(isSubmitting){
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors) {
                console.log("authenticated", values);
                setSubmitting(false);
            } else {
                setSubmitting(false);
                console.log(errors);
            }
        }
    })
    function handleChange(event){
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    function handleChangeimg(event){
        setValues({
            ...values,
            [event.target.name]: event.target.files
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        setErrors(validate(values));
        setSubmitting(true);
        
    }

    return { handleSubmit, handleChange, handleChangeimg, values, errors, isSubmitting }
}

export default useFormValidation;