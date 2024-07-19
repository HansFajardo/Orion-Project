import React, { Component } from 'react';

class Tag extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    const style = {
      color: "#676767",
      borderRadius: "2rem",
      cursor: "pointer",
      width: "auto",
      height: "35px",
      border: "none",
      backgroundColor: "#E9E9E9",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      padding: "15px",
      fontSize: '14px'
    };
    return <div style={style}>{this.props.tag}</div>;
  }
}

export default Tag;
