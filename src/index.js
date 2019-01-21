import React, { Component } from "react";
import PropTypes from "prop-types";


const styleContainer = {
  position: "fixed",
  top: "0px",
  left: "0px",
  width: "100%",
  height: "10px",
  overflow: "hidden"
};

const styleContent = {
  height: "4px",
};

class ReactTopProgressBar extends Component {
  render() {
    return (
      <div style={{
        ...styleContainer,
        backgroundColor: this.props.backgroundColor
      }}>
        <div style={{
          ...styleContent,
          width: `${this.props.value}%`,
          backgroundColor: this.props.color,
          boxShadow: this.props.withShadow ? "0px 0px 5px 0px #00000055" : "none",
        }} />
      </div>
    );
  }
}

ReactTopProgressBar.propTypes = {
  value: PropTypes.number,
  color: PropTypes.string,
  withShadow: PropTypes.bool,
  backgroundColor: PropTypes.string
};

ReactTopProgressBar.defaultProps = {
  value: 0,
  color: "#CC0000",
  withShadow: false,
  backgroundColor: "transparent"
};

export default ReactTopProgressBar;