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
    var _title, _desc = null;
    if(this.state.mode === 'welcome') {
      console.log('if')
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      console.log("else if")
      _title = this.state.contents[0].title
      _desc = this.state.contents[0].desc
    }


    return (
    <div className="App">
     <Subject title={this.state.subject.title} 
      sub={this.state.subject.sub}
      onChangePage={function() {
        alert("hihihi");
      }.bind(this)}>
        </Subject> 
      {/* <header>
          <h1><a href="/" onClick={function (e) {
            console.log(e);
            e.preventDefault();
           this.setState({mode : "welcome"})
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
      </header> */}
      <TOC data={this.state.contents}></TOC>
      <Content title={_title} desc={_desc}></Content>
    </div>

    )
  }
}

export default App;
