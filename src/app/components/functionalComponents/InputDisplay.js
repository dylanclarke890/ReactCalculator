import React from 'react';
import {PropTypes} from 'prop-types';

import '../../theme/InputDisplay.css';

export default function InputDisplay(props) {
  return (
    <div className="component-display">
      <div>{props.value}</div>
    </div>
  );
};

InputDisplay.propTypes = {
  value: PropTypes.string,
};