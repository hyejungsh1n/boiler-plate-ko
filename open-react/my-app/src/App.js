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
      mode: 'read',
      mode: 'welcome',
      subject:{title : 'WEB', sub: 'World Wide Web!'},
      welcome: {title:'Welcome!', desc:'Hello, React'},
      contents: [
        {id : 1, title:'HTML', desc:'HTML is for information'},
        {id : 2, title:'CSS', desc:'Css is for design'},
        {id : 3, title:'Javascript', desc:'Javascript is interactive'}

      ]
      
    }
  }

  render () {


    console.log('App render');
    console.log('this mode', this.state.mode)
    var _title, _desc = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      _title = "없어 돌아가"
      _desc = "집에 갈래요"
    }


    return (
    <div className="App">
      <Subject title={this.state.subject.title} 
      sub={this.state.subject.sub}></Subject>
      <TOC data={this.state.contents}></TOC>
      <Content title={_title} desc={_desc}></Content>
    </div>
    )
  }
}

export default App;
