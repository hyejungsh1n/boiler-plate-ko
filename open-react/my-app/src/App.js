import React, { Component } from 'react';
import TOC from "./components/TOC"
import Subject from "./components/Subject"
import CreateContent from "./components/CreateContent"
import ReadContent from "./components/ReadContent"
import Control from "./components/Control"
import './App.css';



class App extends Component {
  
  // step 1 : Add constructor 
  constructor(props) {
    super(props)
    this.max_content_id = 3; //state.contents 배열에 있는 id값 중 가장 큰 값과 같아야 함
    this.state = {
      mode: 'welcome',
      selected_content_id : 3,
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
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome') {
      console.log('if')
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'read') {
      console.log("else if")
      
      let i = 0;
      while(i < this.state.contents.length) {
        let data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i +1 
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc) {
        this.max_content_id = this.max_content_id + 1;
        let _contents = this.state.contents.concat(
          {id : this.max_content_id, title:_title, desc: _desc}
        );
        this.setState({
          contents: _contents
        });
        console.log(_title, _desc)
      }.bind(this)}></CreateContent>
    }

    console.log("render", this)


    return (
    <div className="App">
     <Subject title={this.state.subject.title} 
      sub={this.state.subject.sub}
      onChangePage={function() {
        this.setState({mode: 'welcome'})
      }.bind(this)}>
        </Subject> 
      <TOC 
            onChangePage={function(id){
              this.setState({
                mode: 'read',
               selected_content_id:Number(id)
              })
              }.bind(this)}
        data={this.state.contents}>
        </TOC>
        <Control onChangeMode={function(_mode) {
          this.setState({
            mode:_mode
          });
        }.bind(this)}></Control>
        {_article}
    </div>

    )
  }
}

export default App;
