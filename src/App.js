import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Chat, MyAwesomeComponent} from './Demo.js';

const timerStyles = {color: 'red'}

class Timer2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    setInterval(() => {
        this.setState({
          date: new Date()
        })
    }, 1000)
  }
  render() {
    const { showFullDate } = this.props;
    if (showFullDate) {
      return(
        <h1 style={timerStyles}>{ this.state.date.toLocaleString() }</h1>
      )  
    }
    return(
      <h1>{ this.state.date.toLocaleTimeString() }</h1>
    )
  }
}


// const Timer = (props) => {
//   const {date} = props;
//   return (
//     <h1>{ date.toLocalTimeString() }</h1>
//   )
// }

// class App extends Component {

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>Tell me</p>
//         <Timer2 showFullDate={ true }/>
//       </div>
//     );
//   }
// }

const App = () => (
  <div>
    <Chat msg="hi">
      <p>LOl</p>
    </ Chat>
    <MyAwesomeComponent />
  </div>
);

export default App;
