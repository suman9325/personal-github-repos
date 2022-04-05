import React from 'react';

class Test extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      fields: {},
      errors: {},
      error_name:''
    }
  }

  handleValidation(){
    let fields = this.state.fields;    
    let errors = {};
    let formIsValid = true;

    //Name
    if(!fields["name"]){                            
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }


    // errors{
    //   name : "cannot be empty"
    // }

    if(typeof fields["name"] !== "undefined"){
      if(!fields["name"].match(/^[a-zA-Z]+$/)){
        formIsValid = false;
        errors["name"] = "Only Alphabets";
      }
    }

    //Email
    if(!fields["email"]){
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if(typeof fields["email"] !== "undefined"){
      // let lastAtPos = fields["email"].lastIndexOf('@');
      let lastAtPos = fields["email"].indexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');

      // if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
      //   formIsValid = false;
      //   errors["email"] = "Email is not valid";
      // }

      if((lastAtPos-lastDotPos)==1 || (lastDotPos-lastAtPos)==1){
          formIsValid = false;
          errors["email"] = "Email is not valid";
      }
    }

    // let total_mail_length = this.state.email.length();    total_mail_length=12
    // let lastDotPos = fields["email"].lastIndexOf('.');    lastDotPos = 9
    // let val = suubString(lastDotPos,total_mail_length);   val = "com"
    // let domain = ['com','co.in','xyz']
    // let x = $.inArray(val,domain);          true = 0, false = -1
    // if (x==-1)
    //   {print('Domain not found');
    //   count++;}
    // else
    //   print('Domain found')


    this.setState({errors: errors});
    return formIsValid;
  }

  contactSubmit(e){
    e.preventDefault();
    if(this.handleValidation()){
      alert("Form submitted");
    }else{
      alert("Form has errors.")
    }

  }

  handleChange(field, e){
    let fields = this.state.fields;         
    fields[field] = e.target.value;         
    this.setState({fields});                
  }

  render(){
    return (
      <div>
        <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
          <div className="col-md-6">
            <fieldset>
              <input ref="name" type="text" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
              <span className="error">{this.state.errors["name"]}</span>
              <br/>
              <input refs="email" type="text" size="30" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
              <span className="error">{this.state.errors["email"]}</span>
              <br/>
              <input refs="phone" type="text" size="30" placeholder="Phone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}/>
              <br/>
              <input refs="address" type="text" size="30" placeholder="Address" onChange={this.handleChange.bind(this, "address")} value={this.state.fields["address"]}/>
              <br/>
            </fieldset>
          </div>
          <div className="col-md-6">
            <fieldset>
              <textarea refs="message" cols="28" rows="10"
                className="comments" placeholder="Message" onChange={this.handleChange.bind(this, "message")}>{this.state.fields["message"]}</textarea>
            </fieldset>
          </div>
          <div className="col-md-12">
            <fieldset>
              <button className="btn btn-lg pro" id="submit" value="Submit">Send Message</button>
            </fieldset>
          </div>
        </form>
      </div>
    )
  }
}

export default Test;
// ReactDOM.render(<Test />, document.querySelector("#app"))
