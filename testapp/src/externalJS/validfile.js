const handleSubmitForm = (e,data)=>{

    let form_data = Object.assign({},data);
    // console.log(form_data.userName);
    
    let errCount = 0;
    if(!form_data.userName){
        e.preventDefault();
        // alert('Form has empty fields');
        form_data.errors["userName"]="Name cannot be empty";
        errCount++;
    }

    else{
        form_data.errors["userName"]="";
    }

    if(!form_data.userEmail){
        e.preventDefault();
        // alert('Form has empty fields');
        form_data.errors["userEmail"]="Email cannot be empty";
        errCount++;
    }

    else{
        form_data.errors["userEmail"]="";
    }

    if(!form_data.userAddress){
        e.preventDefault();
        // alert('Form has empty fields');
        form_data.errors["userAddress"]="Address cannot be empty";
        errCount++;
    }

    else{
        form_data.errors["userAddress"]="";
    }

    if(errCount != 0){
        return form_data.errors;
    }

    else{
        alert('Form Submitted');
    }
}

export {handleSubmitForm};

