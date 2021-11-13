import { Component } from "react";
import {PropTypes} from "prop-types";

import '../../theme/Button.css';

export default class Button extends Component {
  static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render(){
    const classNames = [
      "component-btn",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : "",
    ];
    return (
      <div className={classNames.join(" ").trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}