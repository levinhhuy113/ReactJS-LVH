import React, { Component } from 'react'


export default class LVH_handleEvent3 extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: "Lê Vinh Huy",
            age: 19
        };    
    }
    handleChange = (e) =>{
        this.setState({
            name: "Đỗ Trọng Huy",
            age : 21,
        })
    }
  
  
    render() {
    return (
      <div className='alert alert-primary'>
            <h2>thay đổi dữ liệu trong state</h2>
            <p>dữ liệu: {this.state.name} - {this.state.age}</p>
            <button onClick={this.handleChange}>Thay đổi name</button>
            <button onClick={this.handleChange}>Thay đổi age</button>
      </div>
    )
  }
}
