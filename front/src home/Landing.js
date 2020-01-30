import React, {useContext} from 'react';
import { LanguageContext } from './contexts/Language.context';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles/FormStyles';
import { Grid, Button, Paper } from '@material-ui/core';
import Logo from './imgs/Logo';
import Pet from './imgs/Pet';
import PetPic from './imgs/PetPic';
import Vet from './imgs/Vet';
import Paw from './imgs/Paw';
import PetId from './imgs/PetId';
import './styles/style.css';

function Landing(props){
    const {classes} = props;
    const { language } = useContext(LanguageContext);

    return(
        <div className={classes.landing}>
        <div className={classes.landingPicture}></div>
        <Button href='#' variant='contained' className={classes.landingText}>conheça mais</Button>
            
            <Grid container justify='center' spacing={2} className={classes.landingGrid} direction='row' lg={12}>
                <Grid item xs={9} lg={9} className={classes.petIcons} direction='column'>
                    <PetId />
                    <Paper elevation='10' className={classes.infoText}>
                        <h4>O que é?</h4>
                        <p>RG Pet é um documento digital, com todas as informações sobre seu Pet.</p>
                        <p>Sua imaginação é o limite do que você pode guardar, veja abaixo alguns exemplos.</p>
                    </Paper>
                    <br/>
                    <Button href='#' variant='contained' className={classes.iconButton}>Quero cadastrar meu pet</Button>
                </Grid>
                <Grid item xs={9} lg={9} className={classes.petIcons} direction='column'>
                    <Pet />
                    <Paper elevation='10' className={classes.infoText}>
                        <h4>Tudo sobre seu pet em um só lugar</h4>
                        <p>Onde ele mora, qual telefone de contato do dono, data de nascimento do pet, brinquedo e 
                            ração preferida, medos, doenças, remédios (de uso contínuo ou somente para aquela tosse chatinha que vem as vezes). </p>
                        <p>Estamos sempre adicionando novas funcionalidades conforme a necessidade dos nossos pets.</p>
                    </Paper>
                    <br/>
                    <Button href='#' variant='contained' className={classes.iconButton}>Quero cadastrar meu pet</Button>
                </Grid>
                <Grid item xs={9} lg={9} className={classes.petIcons} direction='column'>
                    <Vet />
                    <Paper elevation='10' className={classes.infoText}>
                        <h4>Onde seu pet esteve</h4>
                        <p>Histórico de tudo que você quiser 
                        guardar sobre o seu pet, como vacinas, visitas ao veterinário, pet shop, creche para pets, hotelzinho, corridas no parque e tudo mais que for importante relatar.</p>
                    </Paper>
                    <br/>
                    <Button href='#' variant='contained' className={classes.iconButton}>Quero cadastrar meu pet</Button>
                </Grid>
                <Grid item xs={9} lg={9} className={classes.petIcons} direction='column'>
                    <PetPic />
                    <Paper elevation='10' className={classes.infoText}>
                        <h4>Perfil com segurança</h4>
                        <p>No RG Pet prezamos pela segurança primeiro.</p>
                        <p>Não queremos que alguém possa ter acesso ao seu endereço ou outros dados, portanto você escolhe as informações que serão públicas, privadas e restritas.</p>
                        <p> Informações restritas são aquelas que só poderão ser vistas por membros registrados RG Pet, como veterinários, hotéis, creches, petshop.</p>
                    </Paper>
                    <br/>
                    <Button href='#' variant='contained' className={classes.iconButton}>Quero cadastrar meu pet</Button>
                </Grid>
                <Grid item xs={9} lg={9} className={classes.petIcons} direction='column'>
                    <Paw />
                    <Paper elevation='10' className={classes.infoText}>
                        <h4>Como funciona</h4>
                        <p>Primeiro passo é criar um perfil para você, papai ou mamãe do pet. Depois criar o perfil do pet e colocar todas as informações iniciais sobre seu pet.</p>
                        <p>Em seguida vamos atrelar as informações dele ao pingente com código QRCode, qualquer um que ler o código já entrará direto na página pública do seu pet.</p>
                        <p>Imagine que legal deixa-lo no petshop e ao invés de informar uma lista de coisas só pedir para escanearem o pingente e verem que seu pet tem medo de secador de cabelo, que ele gosta muito de biscoito de legumes para pets e que ele adora ser chamado de Pipoca?</p>
                        <p><b> Vamos começar?<br/><br/>Clique no botão abaixo!</b></p>
                    </Paper>
                    <br/>
                    <Button href='#' variant='contained' className={classes.iconButton}>Quero cadastrar meu pet</Button>
                </Grid>
            </Grid>
            <br/>
            <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons"> Smashicons </a> , <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons"> Flat Icons </a> and <a href="https://www.flaticon.com/authors/freepik" title="Freepik"> Freepik </a> 
                from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com </a>
            </div>
           
        </div>
    )
}


export default withStyles(styles)(Landing);