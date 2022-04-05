import React from 'react';

class Userform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_data: {
                name: '',
                email: '',
                address: '',
                contact: '',
                gender: false,
                language:[]
            },
        }
        this.radioChange = this.radioChange.bind(this);

    }

    radioChange(e) {
        this.setState({
            gender: e.Target.value
        });
    }

    handleInputChange = event => {
  
        let form_data = Object.assign({}, this.state.user_data);
        form_data[event.target.name] = event.target.value;

        this.setState({ user_data: form_data }, () => {});
    }

    handleSubmit = event => {
        event.preventDefault(); //to prevent any deault page loading
        console.log(this.state.user_data);  //to display values

    }

    render() {
        return (
            <React.Fragment>
                <div className="content" align="center">
                    <form action="">
                    <label>Name</label>
                    <input type="text" id="uname" name="name" value={this.state.user_data.name} onChange={this.handleInputChange} />
                    <span id="err_name"></span><br /><br />

                    <label>Email</label>
                    <input type="text" id="umail" name="email" value={this.state.user_data.email} onChange={this.handleInputChange} />
                    <span id="err_mail"></span><br /><br />

                    <label>Address</label>
                    <input type="text" id="uadd" name="address" value={this.state.user_data.address} onChange={this.handleInputChange} />
                    <span id="err_add"></span><br /><br />

                    <label>Contact</label>
                    <input type="text" id="ucontact" name="contact" value={this.state.user_data.contact} onChange={this.handleInputChange} />
                    <span id="err_contact"></span><br /><br />

                        <label>Gender</label>
                        <input type="radio" id="ugender" name="gender" checked={this.state.gender === "Male"} value="Male" onChange={this.handleInputChange} />Male
                    <input type="radio" id="ugender" name="gender" checked={this.state.gender === "Female"} value="Female" onChange={this.handleInputChange} />Female
                    <span id="err_gender"></span><br /><br />

                        <label>Language</label>
                        <input type="checkbox" id="ulanguage" name="language" checked={this.state.language === "Bengali"} value="Bengali" onChange={this.handleInputChange} />Bengali
                    <input type="checkbox" id="ulanguage" name="language" checked={this.state.language === "English"} value="English" onChange={this.handleInputChange} />English
                    <span id="err_language"></span><br /><br />

                    <button className="btn btn-success" onClick={this.handleSubmit}>Save</button>
                    </form>
                </div>
            </React.Fragment>
               );
    }
}

export default Userform;