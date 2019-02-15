import React,{Component} from 'react';

class GetSupport extends Component{
    constructor(){
        super()
        this.state = {
            openAnswerChoices : false,
            openRightAnswer : false,
            questionOneAnswerA : 'This is the answer if you choose A' 
        }
    }

    handleQuestionClick = () => {
        this.setState({openAnswerChoices : true})
    }

     handleAnswerClick = () => {
        this.setState({openRightAnswer : true});
      }

      render(){
        const state = this.state;
        const openAnswerChoices = this.state.openAnswerChoices;
        
        
        
        return(
            <div>
                <div onClick={()=> this.setState({openAnswerChoices : !openAnswerChoices})}>
                Question1
                </div>


                {state.openAnswerChoices && 
                <div>
                <div onClick={()=>this.handleAnswerClick()}> A </div>
                <div onClick={()=>this.handleAnswerClick()}> B </div>
                <div onClick={()=>this.handleAnswerClick()}> C </div>
                <div onClick={()=>this.handleAnswerClick()}> D </div>
                </div>
                }

                {state.openRightAnswer && 
                    <div>
                    {state.questionOneAnswerA}
                    </div>
                    }
            </div>
        )
    }
}

export default GetSupport;

