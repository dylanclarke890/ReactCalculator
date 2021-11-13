import React from 'react';
import { Component } from 'react';
import {PropTypes} from 'prop-types';

import '../../theme/InputDisplay.css';

export default class InputDisplay extends Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render(){
    return (
      <div className="component-display">
        <div>{this.props.value}</div>
      </div>
    )
  }
}