import '../../App.css';
import React, { Component } from 'react';

import content from '../../JSON/books.json';

class Book extends Component {
  constructor(props){
    super(props);
    this.state ={
      id: props.match.params.id,
      book:{}
    };

  }

  componentDidMount(){
    let state={...this.state};
    state.book= JSON.parse(content).filter((item)=> item['abbrev']['pt'] === this.state.id)[0];
    this.setState(state);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
            {this.state.book&&this.state.book['author']}
        </header>
      </div>
    );
  }
}

export default Book;
