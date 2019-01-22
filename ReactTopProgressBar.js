import React, { Component } from "react";
import PropTypes from "prop-types";


const styleContainer = {
  position: "fixed",
  top: "0px",
  left: "0px",
  width: "100%",
  height: "9px",
  overflow: "hidden",
};

const styleBackground = {
  height: "4px",
};

const styleContent = {
  height: "4px",
  transition: "width 1s ease-in-out"
};

class ReactTopProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };
  }

  componentWillReceiveProps(props) {

    requestAnimationFrame(() => this.setState({ value: props.value }));
  }

  render() {
    return (
      <div style={styleContainer}>
        <div style={{
          ...styleBackground,
          backgroundColor: this.props.backgroundColor
        }}>
          <div style={{
            ...styleContent,
            width: `${this.state.value}%`,
            backgroundColor: this.props.color,
            boxShadow: this.props.withShadow ? "0px 0px 5px 0px #00000055" : "none",
          }} />
        </div>
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