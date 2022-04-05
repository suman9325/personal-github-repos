import React from 'react';
// import {ValidFunction,ValidFunction1} from './externalJS/validfile';

class BasicClass extends React.Component {

    constructor() {
        super();

        this.state = {
            first_name: '',
            class: '',
    
            form_data: {
                username: '',
                password: ''
            },

            basic_details:{
                first_name:'',
                address:''
            },

            working_details:{
                office_name:'',
                address:''
            },
    
            first_name_err: '',
            class_err: '',
            username_err: '',
            password_err: '',
    
            uid: 0,
            sid: 3,
            cid: 1,
    
            user_ID:''
    
        }
        
    }

    componentWillMount(){
        this.setState({user_ID:111})
    }

    componentDidMount(){

    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.user_ID!=this.state.user_ID){
            alert('Compoment Updated')
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleFormChange = (e) => {
        let form_data = this.state.form_data
        form_data[e.target.name] = e.target.value
        this.setState({ form_data })
    }

    showData = (e) => {
        e.preventDefault();
        // console.log(this.state);
        let count = 0;
        if (this.state.first_name == '') {
            this.setState({ first_name_err: 'Name cannot be empty' })
            count++;
        }
        if (this.state.class == '') {
            this.setState({ class_err: 'Class cannot be empty' })
            count++;
        }
        else {
            this.setState({ first_name_err: '' })
        }
        if (this.state.form_data.username == '') {
            this.setState({ username_err: 'Username cannot be empty' })
            count++;
        }
        if (this.state.form_data.password == '') {
            this.setState({ password_err: 'Password cannot be empty' })
            count++;
        }

        if (count != 0) {
            alert('error')
        }
        else {

            alert('ok')
        }

        // console.log(this.state.form_data.username);
        // let mystate = this.state.form_data
        // mystate.address='kolkata';
        // this.setState({form_data:mystate},()=>{
        //     console.log(this.state.form_data)
        // })

    }

    render() {
        return (
            <div>
                {/* <label>{this.state.user_ID}</label> */}
                <input type="text" name='user_ID' onChange={this.handleChange} ref={this.user_ID}></input><br />
                {/* <form>
                    <label>Name</label>
                    <input type="text" name='first_name' onChange={this.handleChange}></input><br />
                    <span name="first_name_err">{this.state.first_name_err}</span><br />

                    <label>Class</label>
                    <input type="text" name='class' onChange={this.handleChange}></input><br />
                    <span name="class_err">{this.state.class_err}</span><br />

                    <label>username</label>
                    <input type="text" name='username' onChange={this.handleFormChange}></input><br />
                    <span name="username_err">{this.state.username_err}</span><br />

                    <label>password</label>
                    <input type="text" name='password' onChange={this.handleFormChange}></input><br />
                    <span name="password_err">{this.state.password_err}</span><br />

                    <input type="submit" onClick={this.showData}></input>
                </form> */}

                {/* {(this.state.uid == 2 || this.state.uid == 3)
                    &&
                    <React.Fragment>
                        <label>Hello world</label>
                        <label>Hello Kolkata</label>
                    </React.Fragment>
                }

                {this.state.uid == 2 ?
                    <div>
                        <label>Hello Kolkata</label>
                    </div>
                    :
                    <div>

                        {this.state.uid==3?
                            <>
                            </>
                            :
                            <>
                            </>
                        }
                    </div>
                } */}



            </div>
        );
    }
}

export default BasicClass;