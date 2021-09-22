import React, { Component } from 'react'

class Input extends Component {
  constructor(props){
    super(props);
    this.state = {
      password: null
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }
  handleInputChange = (event) => {
    event.preventDefault()
    var md5 = require('md5');
    // console.log(event);
    // console.log(event.target.name);
    // console.log(event.target.value);
    // console.log(md5(event.target.value));
    this.setState({
      [event.target.name]: md5(event.target.value)
    })
  }
  render() {
      const {password} = this.state
    return <div className="App">
    <form onSubmit={this.handleSubmit}>
      <input type="password" name="password" placeholder="Password" onChange={this.handleInputChange}></input>
    </form>
    <p>{password}</p>
  </div>   
  }
}

export default Input