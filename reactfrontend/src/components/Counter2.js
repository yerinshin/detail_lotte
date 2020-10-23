import React, { Component } from "react";
//Counter 컴포넌트를 생성하고 Component를 상속
class Counter2 extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: "20px",
          marginLeft: "20px",
          backgroundColor: "lightgray",
          width: "360px",
          height: "60px",
        }}
      >
        <div style={{ padding: "15px", marginLeft: "10px" }}>
          <button
            style={{ width: "30px", height: "30px", display: "inline" }}
            onClick={this.props.handleDecrease2}
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
            {this.props.number2}
          </div>
          <button
            style={{ width: "30px", height: "30px", display: "inline" }}
            onClick={this.props.handleIncrease2}
          >
            +
          </button>

          <h5 style={{ display: "inline", marginLeft: "150px" }}>
            {this.props.price2 + "원"}
          </h5>
        </div>
      </div>
    );
  }
}
export default Counter2;
