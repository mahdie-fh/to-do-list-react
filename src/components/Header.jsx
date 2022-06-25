import React, { Component } from "react";
import Title from "./Title";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "My To Do List",
      input: " ",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState((state) => {
      return {
        ...state,
        input: event.target.value,
      };
    });
  }

  handleSubmit() {
    this.props.handleSubmit(this.state.input);
    this.setState((state) => {
        return {
          ...state,
         input:''
        };
      });
}

  
  render() {
    return (
      <>
        <Title title={this.state.title} />
        <input
          type="text"
          id="myInput"
          placeholder="Title..."
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button className="addBtn" onClick={this.handleSubmit}> Add </button>
      </>
    );
  }
}
