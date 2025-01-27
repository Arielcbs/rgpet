import React, {useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import withStyles from '@material-ui/core/styles/withStyles';
import Select from '@material-ui/core/Select';
import styles from './styles/FormStyles';
import { LanguageContext } from './contexts/Language.context';

const userInit = {
    english: {
        newUser: 'New User',
        email: 'E-mail',
        password : 'Password'
    },
    portuguese: {
        newUser: 'Novo Usuário',
        email: 'E-mail',
        password : 'Senha'
    }
}

function RgForm(props){
    const { language, changeLanguage } = useContext(LanguageContext);
    const {email, password, newUser} = userInit[language];
    const {classes} = props;
    return(
        <main className={classes.main}>
        <Paper className={classes.paper}>
            <h2>{newUser}</h2>
            <form  className={classes.form}>
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='email'>{email}</InputLabel>
                    <Input id='email' name='email' autoFocus />
                </FormControl>
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='password'>{password}</InputLabel>
                    <Input id='password' name='password' autoFocus />
                </FormControl>
                <Button variant='contained' type='submit' color='primary' className={classes.submit}>Submit</Button>
            </form>
        </Paper>
        </main>
    );
}

export default withStyles(styles)(RgForm);