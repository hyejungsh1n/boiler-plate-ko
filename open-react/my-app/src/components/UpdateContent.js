import React, { Component } from "react";


class UpdateContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.data.title,
            desc : this.props.data.desc
        };
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    inputFormHandler(e) {
        this.setState({[e.target.value]:e.target.value})
    }

    render() {

    console.log("this.props.data", this.props.data)
      return (
        <article>
          <h2>Update</h2>

          <form action="/create_process" method="post"
          
          onSubmit={function(e) {
            e.preventDefault()
           // debugger;
           this.props.onSubmit(
             e.target.title.value,
             e.target.desc.value
           )
            alert("등록 되었습니다")
          }.bind(this)}
          >
           <p><input type="text" 
                    name="title" 
                    placeholder="title"
                    value={this.state.title}
                    onChange={this.inputFormHandler}></input></p>
           <p>
             <textarea name="desc" 
             placeholder="description"
             value={this.state.desc} 
             onChange={this.inputFormHandler}></textarea>
            </p> 
            <p>
              <input type="submit"></input>
            </p>
          </form>
      </article>
      )
    }
  }
  
  export default UpdateContent;