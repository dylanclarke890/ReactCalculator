import { Component } from "react";
import './Button.css';

class Button extends Component {
  render(){
    const classNames = [
      "component-btn",
      this.props.isOrange ? "orange" : "",
      this.props.isWide ? "wide" : "",
    ];

    return (
      <div className={classNames.join(" ").trim()}>
        <button>{this.props.name}</button>
      </div>
    );
  }
}

export default Button;