import React, { Component } from "react";
import Header from "./Header";
import Item from "./Item";

export default class ToDo extends Component {

   
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [
        { message: "Meet George" },
        { message: "Buy eggs" },
        { message: "Read a book" },
      ],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(message) {
    this.setState((state) => {
      return {
        ...state,
        toDoList: [...state.toDoList, { message }],
      };
    });
  }
  handleDelete(message) {
    console.log(message);
    this.setState((state) => {
        return {
          ...state,
          toDoList:this.state.toDoList.filter(data => data.message !== message)
        };
      });
    
  }

 

  render() {
    const list = this.state.toDoList.map((item, index) => {
        return <Item key={index} message={item.message} handleDelete={this.handleDelete} />;
      });
    return (
      <>
        <div id="myDIV" className="header">
          <Header handleSubmit={this.handleSubmit} />
        </div>
        <ul id="myUL">{list} </ul>

             </>
    );
  }
}
