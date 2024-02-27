import React from "react"

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      somehting: "skksks",
      articles: []
    };
  }

  componentDidMount() {
    // 1. calling some api
    // 2. set response data to state
    console.log("componentDidMount triggered");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate triggered");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount triggered");
  }

  render() {
    // const listOfNumbers = [1, 2, 3];

    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        {/* <h2>It is {this.props}.</h2> */}
      </div>
    );
  }
}

export default Clock;