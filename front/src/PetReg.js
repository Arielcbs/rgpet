import React, { useState, useContext} from 'react';
import { Typography, Grid, Button, Input, InputLabel, FormControl, Paper, IconButton, Avatar, Radio, RadioGroup, FormControlLabel, FormLabel } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles/FormStyles';
import { LanguageContext } from './contexts/Language.context';
import useFormValidation from './hooks/useFormValidation';

const userFinal = {
    english: {
        newPetText: 'New Pet',
        nicknameText: 'Nickname',
        petNameText : 'Name',
        petTypeText : 'What type',
        petType1Text: 'Dog',
        petType2Text: 'Cat',
        petType3Text: 'Other',
        breedText: 'Breed',
        foodText: 'Food',
        favToy: 'Favorite Toy',
        fearTet: 'Fear',
        drugText: 'Medicines in use'
    },
    portuguese: {
        newPetText: 'Novo Pet',
        nicknameText: 'Apelido Carinhoso',
        petNameText : 'Nome',
        petTypeText : 'Qual tipo do pet',
        petType1Text: 'Cachorro',
        petType2Text: 'Gato',
        petType3Text: 'Outro',
        breedText: 'Raça',
        foodText: 'Ração',
        favToyText: 'Brinquedo Favorito',
        fearText: 'Medo',
        drugText: 'Remédios em uso'
    }
};

const INITIAL_STATE = {
    petName : '',
    nickname: '',
    petType : '',
    petTypeOther: '',
    breed: '',
    food: [],
    favToy: '',
    fear: [],
    drug: '',
    petAvatar: null
}

const validate = () =>{
    let errors = {};
    return errors;
}

function PetReg(props){
    const [clicked, setClicked] = useState("hidden");
    const { handleSubmit, handleChange, handleChangeimg, values, errors, isSubmitting } = useFormValidation(INITIAL_STATE, validate);
    const [fears, setFears] = useState([{id: '0', value: ''}]);
    const { language } = useContext(LanguageContext);
    const {newPetText, petNameText, nicknameText, petTypeText, petType1Text, petType2Text, petType3Text, breedText, foodText, favToyText, fearText, drugText} = userFinal[language];
    const {classes} = props;

    function updateAvatar(){
        //change input class to show file selection;
        setClicked("file");
    }

    const otherType = () => {
        if(values.petType === 'other'){ 
            return (
            <>
            <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='petTypeOther'>Obs</InputLabel>
            <Input onChange={handleChange} value={values.petTypeOther} id='petTypeOther' name='petTypeOther' autoFocus />
            </FormControl>
            </>
            )
        }
    }
    
    const newFear = () => {
        //mudar este ID, da conflito...
        setFears([...fears, {id: fears.length, value: ''}]);
    }

    const delFear = (id) => {
        let deletedFearArray = fears.filter(fear => fear.id !== id)
        setFears(deletedFearArray);
    }

    const handleChangeFear = (id) => {
        return e => {
            setFears(fears.map(fear => {
                if(fear.id === id) {
                    return {
                        id,
                        value: e.target.value
                    };
                }
                return fear;
            }))
        }
    }

    const showFears = () => {
        return (   
            fears.map((fear)=> (
                    <FormControl margin='normal' key={fear.id} fullWidth>
                            <InputLabel htmlFor={`${fear.id}`}>{fearText}</InputLabel>
                            <Input onChange={handleChangeFear(fear.id)} value={`${fear.value}`} 
                                            id={`${fear.id}`} name={`${fear.id}`} autoFocus />            
                    </FormControl>
            ))
        )
    }

    return(
        <main className={classes.main}>
        <Paper className={classes.paper}>
            <h2>{newPetText}</h2>
            <form onSubmit={handleSubmit} className={classes.form}>
                <Grid container justify="center" alignItems="center">
                    <IconButton onClick={() => updateAvatar()}>
                        <Avatar
                            alt="Pet avatar" 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73r-pdCvEEff-PcCHvn1xXcRJ7ilZq7i5_s5C9Y8wqXO32ZWL" 
                            className={classes.avatar}
                        />
                    </IconButton>
                </Grid>    
                <input 
                    onChange={handleChangeimg} 
                    type={clicked}
                    accept='image/*' 
                    name='petAvatar' 
                    id='petAvatar'
                />
                
                <FormControl margin='normal' required fullWidth>
                    <InputLabel htmlFor='petName'>{petNameText}</InputLabel>
                    <Input onChange={handleChange} value={values.petName} id='petName' name='petName' autoFocus />
                </FormControl>
                <FormControl margin='normal' fullWidth>
                    <InputLabel htmlFor='nickname'>{nicknameText}</InputLabel>
                    <Input onChange={handleChange} value={values.nickname} id='nickname' name='nickname' autoFocus />
                </FormControl>
                <FormControl component="fieldset" required margin='normal'>
                    <FormLabel component="legend">{petTypeText}</FormLabel>
                    <RadioGroup aria-label="pettype" name="petType" value={values.petType} onChange={handleChange} row>
                    <FormControlLabel value="dog" control={<Radio />} label={petType1Text} />
                    <FormControlLabel value="cat" control={<Radio />} label={petType2Text} />
                    <FormControlLabel value="other" control={<Radio />} label={petType3Text} />
                    {otherType()}
                    </RadioGroup>
                </FormControl>
                <FormControl margin='normal' fullWidth>
                    <InputLabel htmlFor='breed'>{breedText}</InputLabel>
                    <Input onChange={handleChange} value={values.breed} id='breed' name='breed' autoFocus />
                </FormControl>
                <FormControl margin='normal' fullWidth>
                    <InputLabel htmlFor='food'>{foodText}</InputLabel>
                    <Input onChange={handleChange} value={values.food} id='food' name='food' autoFocus />
                </FormControl>
                <FormControl margin='normal' fullWidth>
                    <InputLabel htmlFor='favToy'>{favToyText}</InputLabel>
                    <Input onChange={handleChange} value={values.favToy} id='favToy' name='favToy' autoFocus />
                </FormControl>
                {showFears()}
                <div style={{display: 'flex', flexDirection:'row', alignItems: 'center',justifyContent: 'end'}}>
                    <Typography variant='body2' style={{marginRight:'1rem'}}>Adicionar novo medo</Typography>
                    <Button variant='outlined' size='small' onClick={newFear}>
                        <AddIcon />
                    </Button>
                    <Button variant='outlined' size='small' onClick={() => delFear(fears.length-1)}>
                        Deletar medo
                    </Button>
                </div>
                
                <FormControl margin='normal' fullWidth>
                    <InputLabel htmlFor='drug'>{drugText}</InputLabel>
                    <Input onChange={handleChange} value={values.drug} id='drug' name='drug' autoFocus />
                </FormControl>
                <Button variant='contained' disabled={isSubmitting} type='submit' color='primary' className={classes.submit}>Submit</Button>
            </form>
        </Paper>
        </main>
    );
}

export default withStyles(styles)(PetReg);