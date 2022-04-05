import React, { Component } from 'react'
import Data from '../qBank.json';
import QuestionAnswerBox from './QuestionAnswerBox';


 class QuizQuestion extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      Questions:[],
      visible:4,
       score:0
    }
  }
  
  componentDidMount(){
    const changeQuestion= Data.sort(() => 0.5 - Math.random()).slice(0,8);
    this.setState({Questions:changeQuestion});
  }

  loadMore = () =>{
    this.setState({visible:this.state.visible + 4});
  }

  selectedData=(answer, correct)=> {
    if (answer === correct) {
      this.setState({score: this.state.score+1},()=>{
        console.log('$$',this.state.score);
      })
    }
    else {
      
    }

  }
  
  render() {
    
    return (
      <div>
      {
        this.state.Questions.slice(0,this.state.visible).map(data =>{
          // console.log(data);
          return (
            <>

            <div className="Questions">
              <QuestionAnswerBox  questionanswerData={data} selectedData={this.selectedData}></QuestionAnswerBox> 
            </div>
            
            
           
            </>
          )  
        })
      }
        {this.state.visible <= 4 ?
          <button className="loadmore" onClick={this.loadMore}>Load More</button>
          :
          ''
        }
      </div>
    )
  }
}

export default QuizQuestion
