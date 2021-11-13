import { Component } from "react";
import './Button.css';

class Button extends Component {

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  }
  render(){
    const classNames = [
      "component-btn",
      this.props.isOrange ? "orange" : "",
      this.props.isWide ? "wide" : "",
    ];

    return (
      <div className={classNames.join(" ").trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}

export default Button;