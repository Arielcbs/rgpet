export default function validateAuth(values){
    let errors = {};
    if(values.fname.length < 2){
        errors.fname = "Invalid first name";
    } 

    if(values.lname.length < 2){
        errors.lname = "Invalid last name";
    }

    return errors;
} 