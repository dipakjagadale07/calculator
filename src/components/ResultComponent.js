import React, { Component } from 'react';

class ResultComponent extends Component {
    render() {
        let { expression, result } = this.props;
        return (
            <div className="display">
                <div className="expression">
                    <p>{expression}</p>
                </div>
                <div className="result">
                    <p>{result}</p>
                </div>
            </div>
        )
    }
}

export default ResultComponent;

