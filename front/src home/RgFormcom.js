import React, {useState, useEffect, useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
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
import { IconButton } from '@material-ui/core';


const userFinal = {
    english: {
        fname : 'First Name',
        lname : 'Last Name',
        address : 'Address',
        numaddress : 'Address Number',
        pcode : 'Postal Code',
        tel : 'Cellphone number',
        finishProfile: 'Finish your Profile'
    },
    portuguese: {
        fname : 'Primeiro Nome',
        lname : 'Sobrenome',
        address : 'Endereço',
        numaddress : 'Número do endereço',
        pcode : 'CEP',
        tel : 'Telefone celular',
        finishProfile: 'Complete seu cadastro'
    }
};


function updateAvatar(){
    //change input class to show file selection;
    // save image on state;
};



function RgFormcom(props){
    const [state, setState] = useState(0);
    const { language, changeLanguage } = useContext(LanguageContext);
    const {fname, lname, address, numaddress, pcode, tel, finishProfile} = userFinal[language];
    const {classes, form, handleChange, handleSubmit} = props;

    const imageAvatar = (event) => {
        setState({
            picture: event.target.files[0]
        });
    }

    return(
        <main className={classes.main}>
        <Paper className={classes.paper}>
            <h2>{finishProfile}</h2>
            <form  className={classes.form}>
                <Grid container justify="center" alignItems="center">
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        type="file"
                        onChange={imageAvatar}
                    />
                    {/* <IconButton> */}
                        <Avatar 
                            alt="User avatar" 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73r-pdCvEEff-PcCHvn1xXcRJ7ilZq7i5_s5C9Y8wqXO32ZWL" 
                            className={classes.avatar}
                            onClick={() => updateAvatar()}
                        />
                    {/* </IconButton> */}
                </Grid>
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='fname'>{fname}</InputLabel>
                    <Input id='fname' name='fname' value={form.fname || ''} onChange={handleChange} autoFocus />
                </FormControl>
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='lname'>{lname}</InputLabel>
                    <Input id='lname' name='lname' value={form.lname || ''} onChange={handleChange} autoFocus />
                </FormControl>
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='address'>{address}</InputLabel>
                    <Input id='address' name='address' value={form.address || ''} onChange={handleChange} autoFocus />
                </FormControl>
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='numaddress'>{numaddress}</InputLabel>
                    <Input id='numaddress' name='numaddress' value={form.numaddress || ''} onChange={handleChange} autoFocus />
                </FormControl>
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='pcode'>{pcode}</InputLabel>
                    <Input id='pcode' name='pcode' value={form.pcode || ''} onChange={handleChange} autoFocus />
                </FormControl>
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='tel'>{tel}</InputLabel>
                    <Input id='tel' name='tel' value={form.tel || ''} onChange={handleChange} autoFocus />
                </FormControl>
                <Button variant='contained' type='submit' color='primary' onClick={handleSubmit} className={classes.submit}>Submit</Button>
            </form>
        </Paper>
        </main>
    );
}

export default withStyles(styles)(RgFormcom);