import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class ToggleVisibility extends React.Component {
  constructor() {
    super();

    this.state = {
      visibility: false
    };
  }

  handleVisibility = () => {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleVisibility}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can now see!</p>
          </div>
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ToggleVisibility />, rootElement);
