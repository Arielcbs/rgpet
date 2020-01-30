import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
// import Avatar from '@material-ui/core/Avatar';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles/FormStyles';



const userInit = {
    english: {
        newUser: 'Login',
        email: 'E-mail',
        password : 'Password'
    },
    portuguese: {
        newUser: 'Login',
        email: 'E-mail',
        password : 'Senha'
    }
}

function Login(props){
    // const test = ['teste1','teste2','teste3'];
    const {classes, form, errors, language, handleChange, handleSubmit} = props;
    //CHANGE THIS NAMES AVOBE FOR emailTitle OR SOMETHING
    const {email, password,newUser} = userInit[language];

    return(
        <main className={classes.main}>
        <Paper className={classes.paper}>
            <h2>{newUser}</h2>
            <form  className={classes.form} onSubmit={handleSubmit}>
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='email'>{email}</InputLabel>
                    <Input id='email' name='email' value={form.email || ''} error={!errors.email} onChange={handleChange} autoFocus />
                </FormControl>
                <FormControl>
                </FormControl>
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='password'>{password}</InputLabel>
                    <Input id='password' name='password' value={form.password || ''} error={!errors.password} onChange={handleChange} autoFocus />
                </FormControl>
                <Button variant='contained' type='submit' color='primary' className={classes.submit}>Submit</Button>
            </form>
        </Paper>
        </main> 
    )
}

export default withStyles(styles)(Login);