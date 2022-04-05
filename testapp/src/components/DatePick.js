import React from 'react';
import moment from 'moment';
import { Link, Router } from 'react-router-dom';



class DatePickup extends React.Component{

    constructor(){
        super();
        this.state = {
            packupdate : '',
            pickupdate : '',
            mode : '',
            check:'',
            // mydate:new Date().toLocaleString()
            mydate:moment().format('MM DD YYYY'),
            divSelect1:true,
            divSelect2:false
        }
    }

    // componentDidMount(){
    //     this.setState({mydate:new Date('2020-25-03')})
    // }

    handleChange = (e) =>{
        this.setState({[e.target.name] : e.target.value});
        console.log(this.state.packupdate)
        
    }

    handleClick = (e) => {
        // console.log(this.state.dd)
        // console.log(this.state.packupdate)
        if(e.target.name=="check"){
            alert('check');
        }
        else{
            alert('uncheck');
        }
        
    }

    handleRadioClick=(e)=>{
        
        this.setState({mode:e.target.value})
        console.log(this.state.mode)
    }

    handleCheck=(e)=>{

        this.setState({check:e.target.value})
    }

    input=(e)=>{
        this.setState({mode:e.target.value})
    }

    handleLink=(e)=>{
        alert(e.target.innerText);
        // if(e.target.name=="div11"){
        //     this.setState({divSelect1:true , divSelect2:false})
        // }
        // else{
        //     this.setState({divSelect1:false , divSelect2:true})
        // }
            
    }
    

    render(){
        
        return(
            
            <div>
{/*                 
                     <ul>
        <li><Link to="#" onClick={this.handleLink} name="div11"><i className="fa fa-circle-o"></i>Welcome</Link></li>
        <li><Link to="#" onClick={this.handleLink} name="div22"><i className="fa fa-circle-o"></i>Registration</Link></li>
      </ul> */}

      <div className="div1" style={{display:(this.state.divSelect1?'block':'none')}}>
            <h1>Hello World</h1>
      </div>
      <div className="div2" style={{display:(this.state.divSelect2?'block':'none')}}>
          <h2>Kolkata</h2>
      </div>
                    <div className="row">
                        <div className="col-md-2">
                            <span>
                                <Link to="#" onClick={this.handleLink} name="military_order"><h6>Military Orders</h6></Link>
                            </span>
                        </div>
                        <div className="col-md-2">
                            <span>
                                <Link to="#" name="non_military_order" onClick={this.handleLink}><h6>Non-Military Orders</h6></Link>
                            </span>
                        </div>
                    </div>      

                {/* <label>Pack-up Date</label>&nbsp;&nbsp;&nbsp;
                <input type="date" value={this.state.packupdate} name="packupdate" onChange={this.handleChange}  ></input><br></br>
                <label>Pick-up Date</label>&nbsp;&nbsp;&nbsp;
                <input type="date" value={this.state.pickupdate} name="pickupdate" onClick={this.handleClick} onChange={this.handleChange} min={this.state.packupdate}></input><br></br>
                <input type="button" onClick={this.handleClick} value="CLICK"></input><br></br>

                <label>radio1</label>
                <input type="radio" name="test" onClick={this.handleRadioClick} value='cc1'></input><br></br>
                <label>radio2</label>
                <input type="radio" name="test"></input>
                <div className="div1" style={{display:this.state.mode?'block':'none'}}>
                    <h1>Hello</h1>
                </div>
                <div>
                    <label>Check me</label>&nbsp;
                    <input type="checkbox" name="check" onClick={this.handleClick}></input>
                </div>
                <div>
                    <input type="text" readOnly={false} value={this.state.mode||''} onChange={this.input}></input>
                </div>
                <input type="text"></input>

                <div>
                
                    <p>
                        {this.state.mydate}
                    </p>
                </div>
                 */}
            </div>

           
        );
    }
}

export default DatePickup;

// 'moment' in react perfomrs very well with Date, Time
// max attribute disables future Dates 
// min attribute disables past Dates 
{/* <input type="date" value={this.state.pickupdate} name="pickupdate" onChange={this.handleChange} min={moment().format("2020-06-10")}></input>
<input type="date" value={this.state.pickupdate} name="pickupdate" onChange={this.handleChange} max={moment().format("2020-06-10")}></input> */}
