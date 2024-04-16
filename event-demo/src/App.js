import React, { Component } from 'react'
import LVH_handleEvent1 from './components/LVH_handleEvent1';
import LVH_handleEvent2 from './components/LVH_handleEvent2';
import LVH_handleEvent3 from './components/LVH_handleEvent3';
import LVH_handleEvent4 from './components/LVH_handleEvent4';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1> Event form demo </h1>
        <LVH_handleEvent1/>
        <LVH_handleEvent2/>
        <LVH_handleEvent3/>
        <LVH_handleEvent4/>
        

      </div>
    );
  }
}
