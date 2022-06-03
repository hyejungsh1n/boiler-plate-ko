import React, { Component } from 'react';
import TOC from "./components/TOC"
import Subject from "./components/Subject"
import Content from "./components/Content"
import './App.css';



// class 형식으로 바꾸기
class App extends Component {
  
  // step 1 : Add constructor 
  constructor(props) {
    super(props)
    this.state = {
      subject:{title : 'WEB', sub: 'World Wide Web!'},
      contents: [
        {id : 1, title:'HTML', desc:'HTML is for information'},
        {id : 2, title:'CSS', desc:'Css is for design'},
        {id : 3, title:'Javascript', desc:'Javascript is interactive'}

      ]
      
    }
  }

  render () {
    return (
    <div className="App">
      <Subject title={this.state.subject.title} 
      sub={this.state.subject.sub}></Subject>
      <TOC data={this.state.contents}></TOC>
      <Content></Content>
    </div>
    )
  }
}

export default App;
