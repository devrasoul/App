import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
  }

  render() {
    const { increase, decrease, reset, count } = this.props;
    console.log(this.props);
    return (
      <>
        <h1>count : {count}</h1>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>reset</button>
      </>
    );
  }
}

export default Counter;
