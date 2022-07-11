import React, { Component } from "react";


class UpdateContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.data.title
        };
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
                    onChange={function(e) {
                        console.log(e.target.value, "######")
                        this.setState({title:e.target.value});
                    }.bind(this)}></input></p>
           <p>
             <textarea name="desc" placeholder="description"></textarea>
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