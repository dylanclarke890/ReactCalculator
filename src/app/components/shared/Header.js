import {PropTypes} from "prop-types";

export default function Header(props){
  return (
    <h4>{props.message}</h4>
  );
};

Header.propTypes = {
  message: PropTypes.string
};