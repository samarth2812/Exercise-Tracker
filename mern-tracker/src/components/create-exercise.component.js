import React, { Component } from 'react'

export default class CreateExercise extends Component {
  constructor(props){
    super(props);

    this.state ={
      username:'',
      description:'',
      duration:'',
      date: new Date(),
      users:[]
    }
  }
  render() {
    return (
      <div>this is createExercise</div>
    )
  }
}

