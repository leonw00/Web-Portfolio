import './App.css';
import Header from './header/header.js';
import MainBody from './bodyContent/mainBody.js'
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';



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
      <BrowserRouter>
        <div className="App">
    
          <Header/>
        
    
          <MainBody/>
    
    
    
    
    
    
          <footer>
            <a href = "https://github.com/leonw00/">Github</a>
            <a href = "https://www.linkedin.com/in/leonardo-warsito-733157203/">LinkedIn</a>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
