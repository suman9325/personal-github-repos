import React from 'react';

class UserForm extends React.Component {
    constructor() {
        super();
        this.state = {
            first_name: '',
            address: '',
            id: 1,
            first_name_err: '',
        }
    }

    componentDidMount(){
        
    }


    // componentDidUpdate(prevProps, prevState){
    //     if(prevState != this.state){
    //         alert('Component updated')
            
    //     }
    //     else{
    //         alert('Component not updated')
    //     }
    // }

   

    handleChange = (event) => {
        
        this.setState({ [event.target.name]: event.target.value }, () => {
            console.log(this.state)
        })

    }

    handleSubmit=(event)=>{
        event.preventDefault();
        if(!this.state.first_name){
            this.setState({ first_name_err:'Name is blank'})
        }
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>&nbsp;&nbsp;
                    <input type="text" name="first_name" onChange={this.handleChange}></input><br></br>
                    <p>{this.state.first_name_err}</p><br></br>
                    <label>Address</label>&nbsp;&nbsp;
                    <input type="text" name="address" onChange={this.handleChange}></input><br></br>
                    <p>{this.state.address}</p><br></br>
                    <input type="submit" value="SUBMIT"></input>
                </form>
                {/* {
                    this.state.id == 1 ?
                        <div>Hello world

                        </div>
                        :
                        <div>Hello Friends</div>
                } */}

                {/* {
                    (this.state.id==54 || this.state.id==2) &&
                    <React.Fragment>
                        <div>Hello Friends</div>
                    </React.Fragment>
                } */}

            </React.Fragment>
        );
    }
}

export default UserForm;