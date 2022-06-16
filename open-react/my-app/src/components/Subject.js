import React, { Component } from 'react';


class Subject extends Component {
    render() {
      console.log('Subject render');
      return (
        <header>
          <h1><a href="/" onClick={function(e){
            e.preventDefault();
            this.props.onChangePage(); // 이벤트 설치
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      )
    }
  }

  export default Subject;