import '../../App.css';
import React, { Component } from 'react';

import content from '../../JSON/books.json';

class Home extends Component {
  constructor(props){
    super(props);
    this.state ={books:JSON.parse(content) };
  }

  componentDidMount(){
    console.log(content);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          {
            this.state.books.map((items)=>{
              return <ul className="book" onClick={()=> console.log("clicou")}>
                  <li className="title">
                    {items['name']}
                    <span>{items['abbrev']['pt']}</span>
                  </li>
                  <div className="description">
                    <li className="group blue">{items['group']}</li>
                    <li className="autor blue">{items['author']}</li>
                  </div>
                  <div className="rodape">
                    <li>{items['testament']}</li>
                    <li className="number">CAP <div>{items['chapters']}</div></li>
                  </div>
                  
                </ul>
            })
          }
        </header>
      </div>
    );
  }
}

export default Home;
