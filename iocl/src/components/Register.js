import React from "react";
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
// import $ from "jquery";

class Register extends React.Component {

    constructor() {
        super()
        this.state = {
            username: "",
            useremail: "",
            language: [],
            gender: "",
            location: "",
            userdob: new Date()
        }
    }

    componentDidMount() {
        // $(function () {
        //     $("#datepicker").datepicker();
        // });
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                console.log('res', res.data);
            })
            .catch(err => {
                console.log('error', err);
            })
    }

    handleChange = (e) => {
        if (e.target.name == "language") {
            if (e.target.checked) {
                this.state.language.push(e.target.value)
            } else {
                let index = this.state.language.indexOf(e.target.value)
                this.state.language.splice(index, 1)
            }
        }
        else {
            this.setState({ [e.target.name]: e.target.value })
        }


    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('state values ==== ', this.state);

        // axios.post("postman url", this.state)
        //     .then(res => {

        //         if (res.success == true) {
        //             // swal('Success!', res.msg, 'success')
        //         }
        //     })
        //     .catch(err => {

        //     })

    }

    handleDateSelect = (e) => {
        console.log('dd', moment(new Date(e)).format('L'));
        let ddd = moment(new Date(e)).format('L');
        console.log(ddd.toDate());
        // this.setState({ userdob: moment(new Date(e)).format('L') })
    }

    // handleDateChange = (e) => {

    //     console.log('dd', moment(new Date(e)).format('L'));
    //     this.setState({ userdob: moment(new Date(e)).format('L') })
    // }

    render() {
        return (
            <div className="register">

                <form>
                    <label>Name</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    <br />
                    <label>Date</label>
                    <input type="date" name="userdob" value={this.state.userdob} onChange={this.handleChange} />
                    {/* <input type="text" id="datepicker"></input> */}
                    <br />
                    <label>Email</label>
                    <input type="email" name="useremail" value={this.state.useremail} onChange={this.handleChange} />
                    <br />
                    <input type="checkbox" name="language" value="Beng" onChange={this.handleChange} />Bengali
                    <input type="checkbox" name="language" value="Hindi" onChange={this.handleChange} />Hindi
                    <input type="checkbox" name="language" value="Eng" onChange={this.handleChange} />English
                    <br />
                    <input type="radio" name="gender" value="Male" onChange={this.handleChange} />Male
                    <input type="radio" name="gender" value="Female" onChange={this.handleChange} />Female
                    <br />
                    <select name="location" onChange={this.handleChange}>
                        <option value="">Select</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                    </select>
                    <input type="submit" value="SUBMIT" onClick={this.handleSubmit} />
                </form>
            </div>
        );
    }
}

export default Register;