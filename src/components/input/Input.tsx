import React from "react";

interface InputProps {
  text?: string;
  num?: number;
}

interface InputState {
  counter: number;
  step: number;
}

class Input extends React.Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      counter: 0,
      step: 1
    };
  }
  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const txt = event.target.value;
    this.setState({
      counter: txt.length
    });
  };
  render() {
    return (
      <div>
        <div> {this.props.text} </div>
        <input onChange={this.handleChange} type="text" />
        <div>{this.state.counter}</div>
      </div>
    );
  }
}

export default Input;
