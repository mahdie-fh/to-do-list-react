import React, { Component } from 'react'

export default class Item extends Component {
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this);

    }

    handleDelete() {
        this.props.handleDelete(this.props.message);
        
    }
  render() {
    return (
        <li>
        {this.props.message}
  
        <span className="btn-delete">
          <button className="delete" onClick={this.handleDelete}>delete</button>
        </span>
      </li>
    )
  
  }
}
