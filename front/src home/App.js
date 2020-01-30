import React,{useState, useContext} from 'react';
import RgForm from './RgForm';
import NavBar from './Navbar';
import Owner1 from './Owner1';
import Landing from './Landing';
import RgPet from './RgPet';
import PetReg from './PetReg';
// import RgFormcom from './RgFormcom';
import { LanguageContext } from './contexts/Language.context';
import axios from 'axios';
import SignIn from './SignIn';
import validator from 'validator';
import { useAlert } from 'react-alert';
import './styles/FormStyles';

// import { LanguageContext } from './contexts/Language.context';

//NEXT STEP IS CHANGING LANGUAGE FOR THE ALERT TEXTS
//MAKE BAR...FORGOT THE NAME...ON TOP WITH CHANGE LANGUAGE BUTTON
// ALSO NEEDS TO HAVE-> HOME / SCAN / LOGIN / LOGOUT / REGISTER / OWNER PROFILE / CREATE NEW PET / PET PROFILE

export default function App() {
  
  const alert = useAlert();
  // const [dataFromTable,setDataFromTable] = useState();
  const [form, setForm] = useState([]);
  const [formPet, setFormPet] = useState([]);
  const [fears, setFears] = useState([{id: '0', value: ''}]);
  const [foods, setFoods] = useState([{id: '0', value: ''}]);
  const [drugs, setDrugs] = useState([{id: '0', value: ''}]);
  const [errors, setErrors] = useState({email: 'true', password:'true', fname:'true', lname:'true', tel:'true'});
  const { language, changeLanguage } = useContext(LanguageContext);
  // USE IS SUBMITTING IN COMPONENTS
  const [ isSubmitting, setSubmitting ] = useState(false);

  // const fetchData = e => {
  //   e.preventDefault();
  //   axios.get('http://localhost:3000/crud')
  //   .then( res => {
  //       var data = res.data;    
  //       setDataFromTable({...dataFromTable,
  //           data});
  //   })
  // }

  //Handle submit for a new user, more validations
  const handleSubmitNewUser = e => {
    e.preventDefault();

    setErrors({
    email: validator.isEmail(form.email),
    password: form.password.length >= 8 && form.password === form.passwordCheck,
    fname: form.fname && form.fname.length > 1,
    lname: form.lname && form.lname.length > 1,
    tel: validator.isMobilePhone(form.tel)
    })

    if(validator.isEmail(form.email) && form.password.length >= 8 && form.password === form.passwordCheck && form.lname && form.lname.length > 1 && form.fname && form.fname.length > 1 && validator.isMobilePhone(form.tel) ){
      axios.post('http://localhost:3000/register', form)
      .then( res => {
        if(res.data.status === 'success'){
          alert.show(res.data.status, {
              type:'success'
          });
        }else{
          alert.show(res.data.status, {
              type:'error'
          });
      }
      })
    }else{
      alert.show("Verify form, red lines show what's wrong")
    }
  }

  //Handle submit for login
  const handleSubmitLogin = e => {
    e.preventDefault();

    setErrors({
      email: validator.isEmail(form.email),
      password: form.password.length >= 8
    })

    if(validator.isEmail(form.email) && form.password.length >= 8){
      axios.post('http://localhost:3000/signin', form)
      .then(res =>{
          if(res.data.status === 'authenticated'){
            alert.show(res.data.status, {
                type:'success'
            });
          }else{
            alert.show(res.data.status, {
                type:'error'
            });
          }
      })
    }else{
      alert.show("Verify form, red lines show what's wrong")
    }
  }

  function handleSubmit(event){
    event.preventDefault();
    setSubmitting(true);
    //MAKE THIS ROUTE IN BACKEND
    axios.post('http://localhost:3000/petreg', formPet)
      .then(res =>{
          if(res.data.status === 'registered'){
            alert.show(res.data.status, {
                type:'success'
            });
          }else{
            alert.show(res.data.status, {
                type:'error'
            });
          }
      })
  }

  const handleChange = e => {
    setForm({...form,
        [e.target.name]: e.target.value
    })
  }

  const handleChangePet = e =>{
    setFormPet({...formPet,
      [e.target.name]: e.target.value
  })
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

  return (
    <div className="App">
        <NavBar />
        <Landing />
        <SignIn form={form} errors={errors} alert={alert} language={language} handleChange={handleChange} handleSubmit={handleSubmitLogin}/>
        <RgForm form={form} errors={errors} alert={alert} language={language} handleChange={handleChange} handleSubmit={handleSubmitNewUser} />
        <RgPet form={formPet} fears={fears} foods={foods} drugs={drugs} newFear={newFear} handleChange={handleChangePet} handleSubmit={handleSubmit} />
        <PetReg form={formPet} fears={fears} foods={foods} drugs={drugs} handleChange={handleChangePet} handleSubmit={handleSubmit} />
    </div>
  );
}
