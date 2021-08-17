import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(props){
    super(props);
    this.clickName = this.clickName.bind(this);
    console.log("constructor->Run1");
    this.state ={
      name: 'Omar',
      age:21
    }
  }


  componentDidMount(){
    console.log("componentDidMount->Run2");

  }

  componentDidUpdate(){
   
    console.log("componentDidUpdate->Run4");
  }

  componentWillUnmount(){
    console.log("Deleted Component");
  }


  clickName(){
    this.setState({
      name: 'Ziya',
      age:50
    })
  }

  // run(){
  //   console.log("run->Run3");
  // }

  render(){
    // this.run();
    return(
     <div>
       <p>{this.state.name}</p>
       <p>{this.state.age}</p>
        <h1>componentDidMount</h1>
      <button onClick={this.clickName}>Change</button>
     </div>
    );
  }
}

 ReactDOM.render(<App/>,document.getElementById("root"))