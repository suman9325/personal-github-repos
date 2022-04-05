import React, { Component } from 'react'

class QuestionAnswerBox extends Component {
  

  state = {
        answerData: this.props.questionanswerData.answers,
        
        userResponseTrack: 0,
      }

  

  getScore=(e)=>{
    alert(this.state.score)
  }

  componentWillUnmount(){
    console.log();
  }


  render() {
    return (
      <div>
        <div className="questions">

          <h4>{this.props.questionanswerData.question}</h4>

          {this.state.answerData.map((answer, index) => {
            // console.log(answer, index);
            return <button key={index} className="mybtn" onClick={() => {
              this.props.selectedData(answer, this.props.questionanswerData.correct);
            }}>{answer}</button>

          })}
        </div>
      </div>
    )
  }
}

export default QuestionAnswerBox
