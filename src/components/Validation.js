function Validation(values){
    let error = {}
    const email_pattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/


    if(values.email=== "") {
        error.email="Name should not be empty"
    }
    

    if(!email_pattern.test(values.email)){
        error.email="Email didn't match"

    }

    return error;
    
    }

    export default Validation;