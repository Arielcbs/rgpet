import React, { useState, useContext} from 'react';
import { Grid, Button, Input, InputLabel, FormControl, Paper, IconButton, Avatar } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles/FormStyles';
import { LanguageContext } from './contexts/Language.context';
import useFormValidation from './hooks/useFormValidation';
import validateAuthcom from './auth/validateAuthcom';

const userFinal = {
    english: {
        fnametext : 'First Name',
        lnametext : 'Last Name',
        addresstext : 'Address',
        numaddresstext : 'Address Number',
        pcodetext : 'Postal Code',
        teltext : 'Cellphone number',
        finishProfiletext : 'Finish your Profile'
    },
    portuguese: {
        fnametext : 'Primeiro Nome',
        lnametext : 'Sobrenome',
        addresstext : 'Endereço',
        numaddresstext : 'Número do endereço',
        pcodetext : 'CEP',
        teltext : 'Telefone celular',
        finishProfiletext : 'Complete seu cadastro'
    }
};

const INITIAL_STATE = {
    fname: "",
    lname: "",
    address: "",
    numaddress: "",
    pcode: "",
    tel: "",
    avatar: []
}

function Owner2(props){
    const [clicked, setClicked] = useState("hidden");
    const { handleSubmit, handleChange, handleChangeimg, values, errors, isSubmitting } = useFormValidation(INITIAL_STATE, validateAuthcom);
    const { language, changeLanguage } = useContext(LanguageContext);
    const {fnametext, lnametext, addresstext, numaddresstext, pcodetext, teltext, finishProfiletext} = userFinal[language];
    const {classes} = props;

    function updateAvatar(){
        //change input class to show file selection;
        setClicked("file");
    }

    return(
        <main className={classes.main}>
        <Paper className={classes.paper}>
            <h2>{finishProfiletext}</h2>
            <form onSubmit={handleSubmit} className={classes.form}>
                <Grid container justify="center" alignItems="center">
                    <IconButton onClick={() => updateAvatar()}>
                        <Avatar
                            alt="User avatar" 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73r-pdCvEEff-PcCHvn1xXcRJ7ilZq7i5_s5C9Y8wqXO32ZWL" 
                            className={classes.avatar}
                        />
                    </IconButton>
                </Grid>    
                <input 
                    onChange={handleChangeimg} 
                    type={clicked}
                    accept='image/*' 
                    name='avatar' 
                    id='avatar'
                />
                
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='fname'>{fnametext}</InputLabel>
                    <Input onChange={handleChange} value={values.fname} id='fname' name='fname' autoFocus />
                </FormControl>
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='lname'>{lnametext}</InputLabel>
                    <Input onChange={handleChange} value={values.lname} id='lname' name='lname' autoFocus />
                </FormControl>
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='address'>{addresstext}</InputLabel>
                    <Input onChange={handleChange} value={values.address} id='address' name='address' autoFocus />
                </FormControl>
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='numaddress'>{numaddresstext}</InputLabel>
                    <Input onChange={handleChange} value={values.numaddress} id='numaddress' name='numaddress' autoFocus />
                </FormControl>
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='pcode'>{pcodetext}</InputLabel>
                    <Input onChange={handleChange} value={values.pcode} id='pcode' name='pcode' autoFocus />
                </FormControl>
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='tel'>{teltext}</InputLabel>
                    <Input onChange={handleChange} value={values.tel} id='tel' name='tel' autoFocus />
                </FormControl>
                <Button variant='contained' disabled={isSubmitting} type='submit' color='primary' className={classes.submit}>Submit</Button>
            </form>
        </Paper>
        </main>
    );
}

export default withStyles(styles)(Owner2);