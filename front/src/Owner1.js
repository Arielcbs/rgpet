import React, {useContext} from 'react';
import { Button, Input, InputLabel, FormControl, Paper} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles/FormStyles';
import { LanguageContext } from './contexts/Language.context';
import useFormValidation from './hooks/useFormValidation';
import validateAuth from './auth/validateAuth';

const userPref = {
    english: {
        newUsertext: 'New User',
        emailtext: 'E-mail',
        passwordtext : 'Password'
    },
    portuguese: {
        newUsertext: 'Novo Usuário',
        emailtext: 'E-mail',
        passwordtext : 'Senha'
    }
};

const INITIAL_STATE = {
    email: "",
    password: ""
}

function Owner1(props){
    const { handleSubmit, handleChange, values, errors, isSubmitting } = useFormValidation(INITIAL_STATE, validateAuth);
    const { language } = useContext(LanguageContext);
    const {emailtext, passwordtext, newUsertext} = userPref[language];
    const {classes} = props;



    return(
        <main className={classes.main}>
        <Paper className={classes.paper}>
            <h2>{newUsertext}</h2>
            <form onSubmit={handleSubmit} className={classes.form}>
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='email'>{emailtext}</InputLabel>
                    <Input onChange={handleChange} value={values.email} className={errors.email && classes.errors} id='email' name='email' autoFocus />
                </FormControl>
                {errors.email && <p>{errors.email}</p>}
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='password'>{passwordtext}</InputLabel>
                    <Input onChange={handleChange} value={values.password} className={errors.password && classes.errors} id='password' name='password' autoFocus />
                </FormControl>
                {errors.password && <p>{errors.password}</p>}
                <Button variant='contained' disabled={isSubmitting} type='submit' color='primary' className={classes.submit}>Submit</Button>
            </form>
        </Paper>
        </main>
    );
}

export default withStyles(styles)(Owner1);