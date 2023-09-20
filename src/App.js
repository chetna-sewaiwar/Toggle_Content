import React, { Component } from 'react'
import FeedbackList from './Toggle';
export class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      name: '',
      feedbacks: [],
      clicked: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleFunction =()=>{
    this.setState({clicked: !this.state.clicked})
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newFeedback = {
      name: this.state.name,
      
    };
    this.setState(prevState => ({
      feedbacks: [...prevState.feedbacks, newFeedback],
      name: '',
      clicked: false
    }));
  }


  render() {
    return (
          <>
        {this.state.clicked ? (
          <div className="feedback-form">
            <h2>EMPLOYEE FEEDBACK FORM</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Name: </label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
  
              <button type="submit">Submit</button>
            </form>
          </div>
        ) : (
          <FeedbackList feedbacks={this.state.feedbacks} toggleFunction={this.toggleFunction} />
        )}
      </>

    )
  }
}

export default App