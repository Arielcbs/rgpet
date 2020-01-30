import React, { useState, useContext} from 'react';
import { Grid, Typography, Paper, Avatar } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles/FormStyles';
import { LanguageContext } from './contexts/Language.context';
import useFormValidation from './hooks/useFormValidation';
import Logo from './imgs/Logo';

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
        favToyText: 'Favorite Toy',
        fearText: 'Fears'
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
        fearText: 'Medos'
    }
};

const db = {
    petName : 'Rivaldo',
    nickname: 'Brusqueta',
    petType : 'Dog',
    petTypeOther: '',
    breed: 'Vira Lata',
    food: 'Arroz e Carne Moída',
    favToy: 'Pneu de carro',
    fear: 'Carrocinha',
    petAvatar: null
}

const validate = () =>{
    let errors = {};
    return errors;
}

function RgPet(props){
    const [clicked, setClicked] = useState("hidden");
    // const { handleSubmit, handleChange, handleChangeimg, values, errors, isSubmitting } = useFormValidation(INITIAL_STATE, validate);
    const { language } = useContext(LanguageContext);
    const {newPetText, petNameText, nicknameText, petTypeText, petType1Text, petType2Text, petType3Text, breedText, foodText, favToyText, fearText} = userFinal[language];
    const {classes} = props;


    
    return(
        <main className={classes.main}>
        <Paper className={classes.paper}>
            <Logo />
                <Grid container justify="center" alignItems="center">
                    <Avatar
                        alt="Pet avatar" 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73r-pdCvEEff-PcCHvn1xXcRJ7ilZq7i5_s5C9Y8wqXO32ZWL" 
                        className={classes.avatar}
                    />
                </Grid> 
            <Grid container wrap='wrap' direction='row'>
                
                <Grid container spacing={3}  lg={6} style={{marginBottom: '1rem', paddingLeft: '2rem'}} direction='column'>    
                    <Grid item>
                    <Typography variant='overline'>{petNameText}</Typography>
                    <Typography variant='body1'>{db.petName}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='overline'>{nicknameText}</Typography>
                        <Typography variant='body1'>{db.nickname}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='overline'>{petTypeText}</Typography>
                        <Typography variant='body1'>{db.petType}</Typography>                            
                    </Grid>
                    <Grid item>
                        <Typography variant='overline'>{breedText}</Typography>
                        <Typography variant='body1'>{db.breed}</Typography>                            
                    </Grid>   
                </Grid>
                
                <Grid container spacing={3} lg={6} style={{marginBottom: '1rem', paddingLeft: '2rem'}} direction='column'>
                    <Grid item>
                        <Typography variant='overline'>{foodText}</Typography>
                        <Typography variant='body1'>{db.food}</Typography>                            
                    </Grid>
                    <Grid item>
                        <Typography variant='overline'>{favToyText}</Typography>
                        <Typography variant='body1'>{db.favToy}</Typography>                            
                    </Grid>
                    <Grid item>
                        <Typography variant='overline'>{fearText}</Typography>
                        <Typography variant='body1'>{db.fear}</Typography>                            
                    </Grid>
                </Grid>
                
            </Grid>
        </Paper>
        </main>
    );
}

export default withStyles(styles)(RgPet);