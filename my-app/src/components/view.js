import React from 'react';
import Form from './addForm.js';

class View extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fields: {       //fields is varibale name
              name:'user',
              email:'user@gmail.com',
              password:'*******',
              address:'kolkata',
            },

        }
    }
    componentDidMount(){
      // this.getAllData();
     // this function loaded by deault like body onload
     // alert(this.props.location.id);
     // alert(this.props.match.id);    //in case of query string
    }

    handleInputChange= event => {
        let form_data = Object.assign({}, this.state.fields);
        form_data[event.target.name] = event.target.value;
        this.setState({ fields: form_data},()=>{
        }
            );
    }

    // async getAllData(){
    //     const response =
    //       await axios.get("https://dog.ceo/api/breeds/list/all")
    //     console.log(response.data)
    // }
    handleSubmit= event =>
    {
        event.preventDefault(); //to prevent any deault page loading
        // console.log(this.state.fields);  //to display values

        // validation part ***********
        var x=window.$("#name").val();
        if(!x)
            // alert("Name can't be blanked");
            window.$("#err_name").html("Name can't be blanked");
        else
            window.$("#err_name").html("");
    }

    render() {

        return (
            <React.Fragment>
            <section>
            {/* <Form {...this.props}/> */}
            </section>
            <section>

            <div className="content">
                <form action="">
                    <div className="card">
                        <div className="card-header">
                            <h4>Registration</h4>
                            <p>All fields marked with (*) are are required.</p>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-6 col-md-12 col-lg-6">
                                    <div className="form-group">
                                        <label className="col-form-label">Name<span>*</span></label>
                                        <input type="text" id="name" name="name" value={this.state.fields.name} onChange={this.handleInputChange}/>
                                        <span id="err_name"></span>
                                        {/* <input type="text" id="name" name="name"/> */}
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-12 col-lg-6">
                                    <div className="form-group">
                                        <label className="col-form-label">Email<span>*</span></label>

                                        <input type="text" id="email" name="email" value={this.state.fields.email} onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-md-12 col-lg-6">
                                    <div className="form-group">
                                        <label className="col-form-label">Password<span>*</span></label>
                                            <input type="text"  id="password"  name="password" value={this.state.fields.password} onChange={this.handleInputChange} />

                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-12 col-lg-6">
                                    <div className="form-group">
                                    <label className="col-form-label">Address<span>*</span></label>
                                        <input type="text" id="address" name="address" onChange={this.handleInputChange} value={this.state.fields.address} />

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="card-footer text-right">
                            <button className="btn btn-success" onClick={this.handleSubmit}>Save</button>
                        </div>
                    </div>
                </form>
            </div>
    </section>

    </React.Fragment>
        );
    }
  }


export default View;
