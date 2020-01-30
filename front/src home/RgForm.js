import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles/FormStyles';

// import Avatar from '@material-ui/core/Avatar';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';

const userInit = {
    english: {
        newUser: 'New User',
        email: 'E-mail',
        password : 'Password',
        passwordCheck : 'Confirm Password',
        fname : 'First Name',
        lname : 'Last Name',
        address : 'Address',
        numaddress : 'Address Number',
        pcode : 'Postal Code',
        tel : 'Cellphone number',
        finishProfile: 'Finish your Profile'
    },
    portuguese: {
        newUser: 'Novo Usuário',
        email: 'E-mail',
        password : 'Senha',
        passwordCheck: 'Confirmar Senha',
        fname : 'Primeiro Nome',
        lname : 'Sobrenome',
        address : 'Endereço',
        numaddress : 'Número do endereço',
        pcode : 'CEP',
        tel : 'Telefone celular',
        finishProfile: 'Complete seu cadastro'
    }
}

function RgForm(props){
    // const test = ['teste1','teste2','teste3'];
    const {classes, form, errors, language, handleChange, handleSubmit} = props;
    //CHANGE THIS NAMES AVOBE FOR emailTitle OR SOMETHING
    const {email, password, passwordCheck, newUser, fname, lname, address, numaddress, pcode, tel} = userInit[language];

    return(
        <main className={classes.main}>
        <Paper className={classes.paper}>
            <h2>{newUser}</h2>
            <form  className={classes.form} onSubmit={handleSubmit}>
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='email'>{email}</InputLabel>
                    <Input id='email' name='email' error={!errors.email} value={form.email || ''} onChange={handleChange} autoFocus />
                </FormControl>
                <FormControl margin='normal' pattern=".{8,}" required fullWidth>
                    <InputLabel htmlFor='password'>{password}</InputLabel>
                    <Input id='password' name='password' error={!errors.password} value={form.password || ''} onChange={handleChange} autoFocus />
                </FormControl>
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='passwordCheck'>{passwordCheck}</InputLabel>
                    <Input id='passwordCheck' name='passwordCheck' value={form.passwordCheck || ''} onChange={handleChange} autoFocus />
                </FormControl>
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='fname'>{fname}</InputLabel>
                    <Input id='fname' name='fname' error={!errors.fname} value={form.fname || ''} onChange={handleChange} autoFocus />
                </FormControl>
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='lname'>{lname}</InputLabel>
                    <Input id='lname' name='lname' error={!errors.lname} value={form.lname || ''} onChange={handleChange} autoFocus />
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
                    <Input id='tel' name='tel' error={!errors.tel} value={form.tel || ''} onChange={handleChange} autoFocus />
                </FormControl>
                <Button variant='contained' type='submit' color='primary' className={classes.submit}>Submit</Button>
            </form>
            {/* <FormControl>
                <Select id="test" name="test" value={form.test} onChange={handleChange}>
                    {test.map((val, ind) => {
                        return <MenuItem key={ind} value={val}>{val}</MenuItem>
                    })}
                </Select>
                </FormControl> */}
        </Paper>
        </main> 
    )
}

export default withStyles(styles)(RgForm);