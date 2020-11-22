import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from './components/KeyPadComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: "",
      expression: ""
    }
  }

  onClick = button => {
    if (button === "=") {
      this.calculate()
    } else if (button === "AC") {
      this.reset()
    } else if (button === "C") {
      this.backspace()
    } else {
      this.setState({
        expression: this.state.expression + button
      })
    }
  };


  calculate = () => {
    var checkResult = ''
    if (this.state.expression.includes('--')) {
      checkResult = this.state.expression.replace('--', '+')
    } else {
      checkResult = this.state.expression
    }

    try {
      this.setState({
        result: (eval(checkResult) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      result: "",
      expression: ""
    })
  };

  backspace = () => {
    this.setState({
      expression: this.state.expression.slice(0, -1)
    })
  };

  render() {
    return (
      <div>
        <div className="calculator">
          <ResultComponent expression={this.state.expression} result={this.state.result} />
          <KeyPadComponent onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
