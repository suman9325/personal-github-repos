import React from 'react';

class Conditional extends React.Component {

    state = {
        name: '',
        class: 42
    }

    componentDidMount() {
        // alert('hello')

    }

    // componentWillMount() {  
    //    	      console.log('Component Will MOUNT!')  
    //    	   }  
    //    	   componentDidMount() {  
    //    	      console.log('Component Did MOUNT!')  
    //    	   }  
       changeState=(e)=>{  
          this.setState({[e.target.name]:e.target.value})
       }  
    //    componentWillReceiveProps(newProps) {      
    //       console.log('Component Will Recieve Props!')  
    //    }  
    //    shouldComponentUpdate(newProps, newState) {  
    //       return true;  
    //    }  
    //    componentWillUpdate(nextProps, nextState) {  
    // 	      console.log('Component Will UPDATE!');  
    // 	   }  
       componentDidUpdate(prevProps, prevState) {  
           if(prevState != this.state)
                console.log('Component Did UPDATE!')  
            else
            console.log('Component Did not UPDATE!')  
       }  
       componentWillUnmount() {  
          console.log('Component Will UNMOUNT!')  
          this.setState({name:''})
       }  


    render() {
        return (
            <React.Fragment>

                <input type="text" name='name' value={this.state.name} onChange={this.changeState}></input>
                

                {/* {this.state.name == '' &&
                    <React.Fragment>
                        <p>HEllo India</p>
                        <div>
                            <form>
                                <label>Name</label>
                                <input></input>
                            </form>
                        </div>
                    </React.Fragment>
                } */}

                {/* {
                    this.state.class == 4 ?
                        <React.Fragment>
                            <p>HEllo India</p>
                            <div>
                                <form>
                                    <label>Name</label>
                                    <input></input>
                                </form>
                            </div>
                        </React.Fragment>

                        :

                        <React.Fragment>
                            <p>Wrong class</p>
                        </React.Fragment>
                } */}

                {/* {
                    (this.state.class == 4 && this.state.name != '') &&
                    <p>OK</p>
                }

                {
                    (this.state.class == 4 && this.state.name != '') ?
                    <p>OK</p>

                    :
                    <p> not OK</p>
                } */}


            </React.Fragment>
        );
    }
}

export default Conditional;