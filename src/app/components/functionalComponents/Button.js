import {PropTypes} from "prop-types";

import '../../theme/Button.css';

export default function Button(props) {
  let handleClick = () => {
    props.clickHandler(props.name);
  };

  const classNames = [
    "component-btn",
    props.orange ? "orange" : "",
    props.wide ? "wide" : "",
  ];
  return (
    <div className={classNames.join(" ").trim()}>
      <button onClick={handleClick}>{props.name}</button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  orange: PropTypes.bool,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
};