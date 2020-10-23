import React, { Component } from "react";
//Counter 컴포넌트를 생성하고 Component를 상속
class Counter extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: "20px",
          marginLeft: "10px",
          backgroundColor: "lightgray",
          width: "420px",
          height: "60px",
        }}
      >
        <div style={{ padding: "15px" }}>
          <button
            style={{ width: "30px", height: "30px", display: "inline" }}
            onClick={this.props.handleDecrease}
          >
            -
          </button>
          <div
            style={{
              width: "30px",
              height: "30px",
              display: "inline",
              border: "1px solid black",
              padding: "4px",
            }}
          >
            {this.props.number}
          </div>
          <button
            style={{ width: "30px", height: "30px", display: "inline" }}
            onClick={this.props.handleIncrease}
          >
            +
          </button>

          <h5 style={{ display: "inline", marginLeft: "230px" }}>
            {this.props.price + "원"}
          </h5>
        </div>
      </div>
    );
  }
}
export default Counter;
