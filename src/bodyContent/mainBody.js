import { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './mainBody.css';
import Main from './topics/main.js';
import Projects from './topics/projects.js';


class MainBody extends Component{

    constructor(props){
        super(props);
        this.state.option = props.option;
    }

    state = {
        option: 0,
    };

    

    render(){
        return(
            <div class = "main-body">
                <Switch>
                    <Route path="/projects"><Projects/></Route>
                    <Route exact path="/"><Main/></Route>
                </Switch>

                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@300&family=Poiret+One&display=swap" rel="stylesheet"></link>
            </div>
        );
    }
}


export default MainBody;