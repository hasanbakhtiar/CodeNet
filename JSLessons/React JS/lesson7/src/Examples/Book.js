
import React, { Component } from 'react'

export class Book extends Component {
    constructor(props) {
        super(props);
        this.newBook = this.newBook.bind(this); 
        this.oldBook = this.oldBook.bind(this); 
        this.state = {
          name: 1984,
          author: "George Orwell",
          pageLenght: 201
        };
      }
    
      newBook(){
          this.setState({
            name: "Heyvanistan",
            author:"GO",
            pageLenght: 100
          })
      }
    
      oldBook(){
        this.setState({
          name: 1984,
          author: "George Orwell",
          pageLenght: 201
        })
    }
    
      render() {
        return (
          <div>
            <h1> {this.state.name} </h1> 
            <p> {this.state.author} </p>
            <p> {this.state.pageLenght} </p>
    <button onClick={this.newBook}>New Book</button>
    <button onClick={this.oldBook}>Old Book</button>
          </div>
        );
      }
}

export default Book

