import React, { Component } from 'react'

export default class App extends Component {
  constructor (){
    super();
    this.state={
      username:"",
      age:null,
      password:"",
      address:""
    }
  }
  username1=(event)=>{
    console.log('event',event.target.value);
    this .setState({username:event.target.value})
  }
  userage=(event)=>{
    console.log('event',event.target.value);
    this .setState({age:event.target.value})
  }
  userpassword=(event)=>{
    console.log('event',event.target.value);
    this .setState({password:event.target.value})
  }
  useraddress=(event)=>{
    console.log('event',event.target.value);
    this .setState({address:event.target.value})
  }
  submit=(event)=>{
    event.preventDefault()
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <form onsubmit={this.submit}>
          <input onChange={this.username1}></input>
          <input onChange={this.userage}></input>
          <input onChange={this.userpassword}></input>
          <input onChange={this.useraddress}></input>
          
        </form>
        <input type={submit}></input>
      </div>
    )
  }
}
