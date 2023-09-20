import React, { Component } from 'react';



class FeedbackList extends Component {

   
    render() {
       
      return (
        <>
        
              <div>
                     {this.props.feedbacks.map((feedback, index) => (
                <p key={index}>
                  {feedback.name}
                  
                </p>
              ))}
      </div>
         <div className='div-btn'>
            <button type='button'  onClick={this.props.toggleFunction} > Go Back</button>
         </div>
        </>
      );
    }
  }


export default FeedbackList;