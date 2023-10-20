import React, { Component } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

export class App extends Component  {
 
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  leaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

 
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedbackNumber = good + neutral + bad;
    return totalFeedbackNumber;
}
  
  countPositiveFeedbackPercentage = () => {

   const percentage = (this.state.good / this.countTotalFeedback()) * 100;
    return Math.round(percentage);
  }
  
  render() {
    return (
      <Section title="Please leave feedback">

        <FeedbackOptions options={Object.keys(this.state)}
          onLeaveFeedback={this.leaveFeedback} />
        {this.countTotalFeedback() > 0 ?
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}
            total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} /> :
          
          <Notification message="There is no feedback yet"/>}
       
   </Section>
  );
}
  }