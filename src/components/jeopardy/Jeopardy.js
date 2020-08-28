import React, { Component } from "react";
//import our service
import JeopardyService from "../services/JeopardyService";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: { category: {} },
      score: 0,
    };
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() {
    // if (this.state.date.category && this.state.data.category.title) {
    //   category = this.state.data.category.title;
    if (this.state.data.category === undefined) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
    return (
      <div>
        <h2> Question: {this.state.data.question}</h2>
        <br />
        <h2> Value: {this.state.data.value}</h2>
        <br />
        <h2> Category: {this.state.data.category.title}</h2>
        <h2> User's Score: {this.state.score}</h2>
        <input id="example" type="text" name="text"></input>
        <br />
        <button onClick=""> Answer</button>
      </div>
    );
  }
}
export default Jeopardy;
