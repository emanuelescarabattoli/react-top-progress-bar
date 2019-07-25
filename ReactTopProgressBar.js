import React, { Component } from "react";
import PropTypes from "prop-types";

import style from "./style.scss";

const styleContainer = {
  position: "fixed",
  top: "0px",
  left: "0px",
  width: "100%",
  height: "9px",
  overflow: "hidden",
};

const styleBackground = {
  height: "5px",
};

const styleContent = {
  height: "5px",
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
      <div style={{
        ...styleContainer,
        display: this.state.value <= 0 || this.state.value >= 100 ? "none" : "block"
      }}>
        <div style={{
          ...styleBackground,
          backgroundColor: this.props.backgroundColor
        }}>
          <div className={this.props.striped ? style.striped : undefined} style={{
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
  backgroundColor: PropTypes.string,
  striped: PropTypes.bool
};

ReactTopProgressBar.defaultProps = {
  value: 0,
  color: "#CC0000",
  withShadow: false,
  backgroundColor: "transparent",
  striped: false
};

export default ReactTopProgressBar;
