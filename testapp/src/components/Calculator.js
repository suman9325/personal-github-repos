import React from "react";

class Calculate extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            number:'0',
            num: '',
            arr : [],
            count : 0,
            operator:''
        }
    }
    
    getNumber = (e) =>{
       
        this.state.num = this.state.num + e.target.value;
        this.setState({number:this.state.num});
        this.state.arr[this.state.count] = parseFloat(this.state.num);

        // console.log(this.state.arr[0]);
        // console.log(this.state.arr[1]);
    }

    getOperator = (e) =>{
        
        this.setState({number:'0', num:''});
        let result = 0 ;
        if ((e.target.value) == '='){
            if(this.state.operator == '+'){
                for(let i=0; i<this.state.arr.length; i++){
                    result = result + this.state.arr[i];
                }
                this.setState({number : result});
                    
            }
            
        }

        else if((e.target.value) == '+'){
            // alert('+');
            this.state.count++;
            this.state.operator = e.target.value;
        }

    }

    handleClear = (e) =>{
        this.setState({number:'0', arr : []});
    }
    

    render(){
        const btn_style = {
            background: '#008CBA',
            padding: '5px 24px'
          }
        return(
            <div>
                <table cellSpacing='5' cellPadding='5'>
                    <thead>
                        <th>Calculator</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="text" size="30" value={this.state.number}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button style={btn_style}>Cancel</button>&nbsp;&nbsp;
                                <button style={btn_style} onClick={this.handleClear}>Clear</button>&nbsp;&nbsp;
                                <button style={btn_style} value='=' onClick={this.getOperator}>=</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button style={btn_style} value='+' onClick={this.getOperator}>+</button>&nbsp;&nbsp;
                                <button style={btn_style} value='-' onClick={this.getOperator}>-</button>&nbsp;&nbsp;
                                <button style={btn_style} value='*' onClick={this.getOperator}>*</button>&nbsp;&nbsp;
                                <button style={btn_style} value='/' onClick={this.getOperator}>/</button>&nbsp;&nbsp;
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button style={btn_style} value='1' onClick={this.getNumber}>1</button>&nbsp;&nbsp;
                                <button style={btn_style} value='2' onClick={this.getNumber}>2</button>&nbsp;&nbsp;
                                <button style={btn_style} value='3' onClick={this.getNumber}>3</button>&nbsp;&nbsp;
                                <button style={btn_style} value='4' onClick={this.getNumber}>4</button>&nbsp;&nbsp;
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Calculate;