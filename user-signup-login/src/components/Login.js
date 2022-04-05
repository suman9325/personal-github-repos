import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import PostDataWithParam from '../services/PostDataWithParam';
import Storage from '../externaljs/Storage';
import Urls from '../externaljs/Urls';
// import { FormGroupMaterial } from '../externaljs/FormGroupMaterial';

class Login extends Component {
    state = {
        email: '',
        password: '',
        profile_id: 14,
        loggedIn: false,
        emailErr: '',
        passwordErr: '',
        loginErr: '',
        regSuc: '',
        processing: false,
        urlToken: ''
    }

    componentDidMount() {
        // if(!!this.props.location.search)
        // {
        //     let queryParams=new URLSearchParams(this.props.location.search);
        //     if(queryParams!=='')
        //     {
        //         let urlToken=queryParams.get("token");
        //         if(!!urlToken)
        //         {
        //             this.setState({ urlToken: urlToken },()=>
        //             {
        //                this.handleActivationLogin();
        //             });
        //         }

        //     }
        // }
        // if (typeof this.props.location.state !== 'undefined') {
        //     this.setState({ regSuc: this.props.location.state.regErr, loginErr: '' });
        // }
        // FormGroupMaterial();
    }

    componentWillUnmount() {
        this.setState({ regSuc: '' });
        this.setState({ loginErr: '' });
    }


    changeValue = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleActivationLogin = (e) => {
        // this.setState({ processing: true }, () => {
        //     PostDataWithParam('AuthenticateDetails', { 'token': this.state.urlToken })
        //         .then((response) => {
        //             let result = response;
        //                 if (result.success === 1) {
        //                     Storage.set('myReloProClaimrepairLoginToken', result.token);
        //                     Storage.set('myReloProClaimrepairLoginData', JSON.stringify(result.data, ["id", "user_id", "profile_id", "contact_no","first_name", "last_name", "email", "first_login", "profile_image","trial_subscription_id","subscription_id","subscription_issue_date","subscription_expiry_date","trial_days"]));
        //                     this.setState({ loggedIn: true });
        //                 } else {
        //                     this.setState({ loginErr: result.msg, regSuc: '', loggedIn: false, processing: false });
        //                 }
        //             })
        //             .catch(err => {
        //                 this.setState({ loginErr: 'Oops! Something went wrong.', regSuc: '', loggedIn: false, processing: false });
        //             })
        //  })
    }
    handleLogin = (e) => {
        e.preventDefault();
        // if (!this.state.email) {
        //     this.setState({ emailErr: 'Email is required.' });
        // }
        // else if (!this.state.password) {
        //     this.setState({ emailErr: '' });
        //     this.setState({ passwordErr: 'Password is required.' });
        // } else {
        //     this.setState({ emailErr: '' });
        //     this.setState({ passwordErr: '' });

        //     this.setState({ processing: true }, () => {
        //         PostDataWithParam('Authenticate', { email: this.state.email, password: this.state.password, profile_id: 14 })
        //             .then((response) => {
        //                 let result = response;
        //                 // return
        //                 if (result.success === 1) {
        //                     // console.log(result);
        //                     Storage.set('myReloProClaimrepairLoginToken', result.token);
        //                     Storage.set('myReloProClaimrepairLoginData', JSON.stringify(result.data, ["id", "user_id", "profile_id", "contact_no","first_name", "last_name", "email","first_login", "profile_image","trial_subscription_id","subscription_id","subscription_issue_date","subscription_expiry_date","trial_days"]));
        //                     this.setState({ loggedIn: true, processing: false });
        //                 } else {
        //                     this.setState({ loginErr: result.msg, regSuc: '', loggedIn: false, processing: false });
        //                 }
        //             })
        //             .catch(err => {
        //                 this.setState({ loginErr: 'Oops! Something went wrong.', regSuc: '', loggedIn: false, processing: false });
        //             })
        //     })
        // }
    }

    renderSubmitBtn = () => {
        // if (this.state.processing) {
        //     return <input type="button" className="btn btn-primary btn-block" value="Processing..." disabled={true} />
        // } else {
        //     return <button type="submit" className="btn btn-primary btn-block">Login</button>
        // }
    }

    showAlert = (status) => {
        // if (status != '') {
        //     return (
        //         <div className="alert alert-danger"><i className="icon-cross position-left"></i>
        //             {this.state.loginErr}
        //         </div>
        //     )
        // }
    }

    showSuccessAlert = (status) => {
        // if (status != '') {
        //     return (
        //         <div className="alert alert-success"><i className="icon-check2 position-left"></i>
        //             {this.state.regSuc}
        //         </div>
        //     )
        // }
    }

    render() {

        // if (this.state.loggedIn) {
        //     if ((JSON.parse(Storage.get('myReloProClaimrepairLoginData'))).profile_id == 14) {
        //         window.location.href = Urls.driverDashboard+this.props.location.search
        //         return <p></p>;
        //     }
        // }

        return (
            <section className="login-register-bg">
                <div className="login-register-box">
                    <div className="login-register-header-box text-center">
                        <div className="btn-group">
                            <h3 className="text-slate-800 btn-flat text-uppercase active">Login to your account</h3>
                        </div>
                        <br />
                        {this.showAlert(this.state.loginErr)}
                        {this.showSuccessAlert(this.state.regSuc)}
                    </div>
                    <form action="#" method="POST" onSubmit={this.handleLogin}>
                        <div className="login-box-body m-t-30">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group form-group-material">
                                        <label className="control-label">Email Address</label>
                                        <input type="email" className="form-control" placeholder="Email Address" name="email" onChange={this.changeValue} required />
                                        <p className="text-danger help-block">{this.state.emailErr}</p>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group form-group-material">
                                        <label className="control-label">Password</label>
                                        <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.changeValue} required />
                                        <p className="text-danger help-block">{this.state.passwordErr}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="text-center">
                                <button type="submit" className="btn border-slate text-slate-800 btn-flat text-uppercase active">Sign in</button>
                            </div>
                            <br />
                            {/* <hr className="m-t-10" /> */}
                            <div className="login-box-footer text-center">
                                <span className="text-grey-400"> Don't have an account?</span>
                                <Link to='/signup' className="link-btn">Sign Up Now</Link>
                            </div>
                        </div>

                    </form>
                </div>
            </section>
        );
    }
}

export default Login;