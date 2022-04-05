import React from 'react';
import swal from 'sweetalert';
import axios from 'axios';

// const API = 'https://fullstackdemo.000webhostapp.com/SignUpController/'
const API = 'http://localhost/suman_php/CIfullStack/UserController/'

class Signup extends React.Component {
    state = {
        id:'',
        form_data: {
            first_name: '',
            last_name: '',
            gender: '',
            dob: '',
            contact_no: '',
            user_email: '',
            language: [],
            address: '',
            country: '',
            files: [],
        }
    }

    componentDidMount() {
        this.initDatePicker('dob');
    }

    initDatePicker = (name) => {
        window.$('#' + name).daterangepicker({
            startDate: new Date(),
            showDropdowns: true,
            autoclose: true,
            singleDatePicker: true,
        }).on('apply.daterangepicker', (ev, picker) => {
            let form_data = { ...this.state.form_data };
            let formatDate = picker.startDate.format('DD/MM/YYYY');
            let initDateName = null;
            form_data[name] = formatDate;
            if (name === "dob") {
                form_data.dob = formatDate;
            }
            this.setState({ form_data: form_data });
        });
    }

    handleOnChange = (e) => {
        let form_data = Object.assign({}, this.state.form_data);
        form_data[e.target.name] = e.target.value;
        this.setState({ form_data: form_data });
    }

    handleGender = (e) => {
        // alert(e.target.value);
        let form_data = Object.assign({}, this.state.form_data);
        if (e.target.value == 1) {
            form_data[e.target.name] = e.target.value;
            this.setState({ form_data: form_data })
        }
        else {
            form_data[e.target.name] = e.target.value;
            this.setState({ form_data: form_data })
        }

    }

    handleLanguage = (e) => {
        let form_data = Object.assign({}, this.state.form_data);
        if (form_data.language.indexOf(e.target.value) > -1) {
            let language = form_data.language.filter((item, i) => {
                if (item == e.target.value)
                    return false;
                else
                    return true;
            });
            form_data.language = language;
        } else {
            form_data.language.push(e.target.value)
        }
        this.setState({ form_data: form_data });
    }

    handleFileUpload = (e) => {
        if (e.target.files.length > 0) {
            let formData = new FormData();
            for (let i = 0; i < e.target.files.length; i++) {
                formData.append('files[' + i + ']', e.target.files[i], e.target.files[i].name);
            }

            // to view form data entries
            // for (var key of formData.entries()) {
            //     console.log(key[0] + ', ' + key[1]);
            // }

            axios.post(API + 'uploadFile', formData)
                .then(response => {
                    // console.log(response.data.id)
                    if (response.data.success == 1) {
                        this.setState({ id: response.data.id });
                        // swal('Success!', response.data.msg, 'success');
                    }
                    else {
                        swal('Error!', response.data.msg, 'error');
                    }
                })
                .catch(err => {
                    console.log(err);
                    swal('Error!', 'Something went wrong. Please try again', 'error')
                })

        }
    }

    registerUser = (e) => {
        e.preventDefault();
        console.log(this.state.form_data);
        axios.post(API + 'insertData',
            JSON.stringify({
                id: this.state.id,
                name: this.state.form_data.first_name,
                gender: this.state.form_data.gender,
                dob: this.state.form_data.dob,
                address: this.state.form_data.address,
                contact: this.state.form_data.contact_no,
                email: this.state.form_data.user_email,
                language: this.state.form_data.language,
                country: this.state.form_data.country,
                password: this.state.form_data.password
            })
        )
            .then(response => {
                console.log(response)
                if (response.data.success == "1") {
                    swal('Success!', response.data.msg, 'success');
                    this.props.history.push('/login')
                }
                else {
                    swal('Error!', response.data.msg, 'error');
                }
            })
            .catch(err => {
                swal('Error!', 'Something went wrong. Please try again', 'error')
            })
    }

    render() {
        return (
            <section className="content-container">
                <div className="container m-b-30">
                    <form method="POST" action="" onSubmit={this.registerUser}>
                        <div className="panel-heading">
                            <h5 className="panel-title">Register New User</h5>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>First Name <span className="text-danger">*</span></label>
                                        <input className="form-control" type="text" value={this.state.form_data.first_name} onChange={this.handleOnChange} name="first_name" required={true} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Last Name <span className="text-danger">*</span></label>
                                        <input className="form-control" type="text" value={this.state.form_data.last_name} onChange={this.handleOnChange} name="last_name" required={true} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Gender <span className="text-danger">*</span></label>&nbsp;&nbsp;&nbsp;
                                        <ul>
                                            <li className="p-0 m-b-20 m-r-15 inline-block"><label className="radio-inline custom-radio p-l-30"><input type="radio" name="gender" value="Male" onChange={this.handleGender} required={true} /><span></span> Male</label></li>
                                            <li className="p-0 m-b-20 m-r-15 inline-block"><label className="radio-inline custom-radio p-l-30"><input type="radio" name="gender" value="Female" onChange={this.handleGender} /><span></span> Female</label></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Languages Known <span className="text-danger">*</span></label>
                                        <ul className="checkbox-list list-unstyled m-b-0" >
                                            <li className="p-0 m-b-20 m-r-15 inline-block"><label className="checkbox-inline custom-checkbox"><input type="checkbox" name="language" value="Bengali" checked={this.state.form_data.language.indexOf('Bengali') > -1} onChange={this.handleLanguage} /><span className=""></span>Bengali</label></li>
                                            <li className="p-0 m-b-20 m-r-15 inline-block"><label className="checkbox-inline custom-checkbox"><input type="checkbox" name="language" value="English" checked={this.state.form_data.language.indexOf('English') > -1} onChange={this.handleLanguage} /><span className=""></span>English</label></li>
                                            <li className="p-0 m-b-20 m-r-15 inline-block"><label className="checkbox-inline custom-checkbox"><input type="checkbox" name="language" value="Hindi" checked={this.state.form_data.language.indexOf('Hindi') > -1} onChange={this.handleLanguage} /><span className=""></span>Hindi</label></li>
                                        </ul>
                                    </div>
                                    <p className="text-danger help-block">{this.state.service_err}</p>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="form-group"><label>Date of Birth <span className="text-danger">*</span></label>
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="icon-calendar22"></i></span>
                                            <input type="text" placeholder="Select D.O.B" className="form-control" value={this.state.form_data.dob || ''} onChange={this.handleOnChange} name="dob" id="dob" required={true} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label>Phone Number </label>
                                        <input className="form-control" type="text" value={this.state.form_data.contact_no} onChange={this.handleOnChange} name="contact_no" maxLength='10' />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input className="form-control" type="text" value={this.state.form_data.address} onChange={this.handleOnChange} name="address" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Email <span className="text-danger">*</span></label>
                                        <input className="form-control" type="email" value={this.state.form_data.user_email} onChange={this.handleOnChange} name="user_email" required={true} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Country</label>
                                        <select className="form-control" id="country"
                                            value={this.state.form_data.country}
                                            name="country" placeholder='' onChange={this.handleOnChange}>
                                            <option value=''>Select</option>
                                            <option value='India'>India</option>
                                            <option value='USA'>USA</option>
                                            <option value='Australia'>Australia</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div class="form-group">
                                        <label class="control-label ">Upload File</label>
                                        <input type="file" name="files[]" onChange={this.handleFileUpload} multiple={true}></input>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Password <span className="text-danger">*</span></label>
                                        <input className="form-control" type="password" value={this.state.form_data.password} onChange={this.handleOnChange} name="password" required={true} />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-primary btn-lg donealert m-b-10" type="submit" name="submit">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default Signup;