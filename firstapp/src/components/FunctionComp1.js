import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const initialData = {
    email: "",
    password: ""
}

const FunctionComp1 = () => {

    const [username, setUserName] = useState('')
    const [formData, setFormData] = useState({...initialData})
    

    const handleChange = (e) => {
        setUserName(e.target.value)
    }

    const handleSubmit = () => {
        console.log(username);
    }

    const handleFormDataChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFormSubmit = () => {
        
        console.log('form', formData);

        axios.post("url", formData)
        .then(res=>{

        })
        .catch(err=>{

        })
    }

    // useEffect(()=>{             //works as componentDidMount
    //     console.log('hello');
    // })

    // useEffect(()=>{
    //     console.log("@@");
    // },[])

    // useEffect(()=>{
    //     console.log("@@");
    // },[val])

    return (
        <>
            <div>
                <input type="text" name="username" onChange={(e) => handleChange(e)} />
                <input type="button" onClick={handleSubmit} value="submit"/>

                <label>Email</label>
                <input type="email" name="email" onChange={(e) => handleFormDataChange(e)} />

                <label>Password</label>
                <input type="password" name="password" onChange={(e) => handleFormDataChange(e)} />

                <input type="button" onClick={handleFormSubmit} value="submit"/>
            </div>
        </>
    );
}

export default FunctionComp1;