import React from 'react';

class NewForm extends React.Component {
    constructor() {
        super();
        this.state = {
            first_name: '',
            address: '',
            gender: '',
            language: [],
            props_value:'',
            first_name_err:'',

            fields:{
                first_name:'',

            }
        }
    }

    componentDidMount(){
        // alert(this.props.values)
        this.setState({props_value:this.props.values},()=>{
            console.log(this.state.props_value)
        })
        
    }

    handleChange = (e) => {
        
        let index;
        if (e.target.name == 'language') {
            if (e.target.checked) {
                this.state.language.push(e.target.value);
            }
            else {
                index = this.state.language.indexOf(e.target.value);
                this.state.language.splice(index, 1);
            }

        }
        else{
            this.setState({ [e.target.name]: e.target.value })
        }
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(!this.state.first_name){
            this.setState({first_name_err:'Name is blank'})
        }
        else{
            this.setState({first_name_err:''})
        }
        console.log(this.state)
    }

    handleReset=(e)=>{
        
    }

    render() {

        return (
            <React.Fragment>

                <form action="" method="POST">
                    <label>Enter name</label>
                    <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange}></input>
                    <p>{this.state.first_name_err}</p><br /><br />
                    
                    <label>Address</label>
                    <input type="text" name="address" value={this.state.address} onChange={this.handleChange}></input><br /><br />

                    <label>Gender</label>
                    <input type="radio" name="gender" value="Male" onChange={this.handleChange} />Male
                    <input type="radio" name="gender" value="Female" onChange={this.handleChange} />Female<br /><br />

                    <label>Language</label>
                    <input type="checkbox" name="language" value="Bengali" onChange={this.handleChange} />Bengali
                    <input type="checkbox" name="language" value="Hindi" onChange={this.handleChange} />Hindi
                    <input type="checkbox" name="language" value="English" onChange={this.handleChange} />English<br /><br />

                    <input type="submit" onClick={this.handleSubmit} value="SUBMIT"></input>
                    <input type="reset" value="RESET" onClick={this.handleReset}></input>
                </form>
            </React.Fragment>
        );
    }
}

export default NewForm;