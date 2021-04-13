import './App.css';
import Header from './header/header.js';
import MainBody from './bodyContent/mainBody.js'
import { Component } from 'react';


class App extends Component {

  state = {
    body: 0,
  };

  changeBodyHandler(type){
    this.setState({
      body: type,
    })
  }
  

  render(){
    return (
      <div className="App">
  
        <Header/>
      
  
        <MainBody/>
  
  
  
  
  
  
        <footer>
          <a>Github</a>
          <a>LinkedIn</a>
        </footer>
      </div>
    );
  }
}

export default App;
