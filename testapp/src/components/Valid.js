import React from 'react';

class MyValid extends React.Component{
    constructor(){
        super();
        this.state={
            fname:'',
            address:'',
            skills:[]
        }
    }

    getVal=(event)=>{
        // var gen = window.$('input[name="skills"]:checked').length;

        // if(!gen){
        //     alert('err');
        // }
        // else{
        //     alert('ok');
        // }
        let index;
    if (event.target.name == 'skills') {
      // this.state.skills[event.target.name]=event.target.value;
      if (event.target.checked) {
        this.state.skills.push(event.target.value);
      }
      else {
        index = this.state.skills.indexOf(+event.target.value);
        this.state.skills.splice(index, 1);
      }

    }
       
        this.setState({[event.target.name]:event.target.value})
    }

    submitForm=(e)=>{
      if(this.state.skills==""){
          alert('blank');
          e.preventDefault();
      }
      else{
          
      }
    }

render(){
    
    return(
        <div>
            <form action="#" onSubmit={this.submitForm}  >
        <input type="checkbox" name="skills" value="JAVA" ref={(val) => this.skills = val} onChange={this.getVal}/>JAVA&nbsp;&nbsp;
        <input type="checkbox" name="skills" value="PHP" ref={(val) => this.skills = val} onChange={this.getVal}/>PHP&nbsp;&nbsp;
        <input type="checkbox" name="skills" value="C" ref={(val) => this.skills = val} onChange={this.getVal}/>C&nbsp;&nbsp;
        <input type="checkbox" name="skills" value="C++" ref={(val) => this.skills = val} onChange={this.getVal}/>C++
        <input type="submit" ></input>
        </form>
        </div>
    );
}
}

export default MyValid;