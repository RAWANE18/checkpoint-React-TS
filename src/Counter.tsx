import { Component } from 'react';

interface CounterState {
  count: number; /* defines the `count` property as a number for the component's state */
}

class Counter extends Component<object, CounterState> {
  state = {
    count: 0, /* initializes the `count` state property to 0 */
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 }); /* incrementing state by 1 */
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p> {/* Displays the current `count` value */} 
        <button onClick={this.increment.bind(this)}>Increment</button> 
      </div>
    );
  }
}

export default Counter;