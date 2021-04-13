import { Component } from 'react';
import './mainBody.css';
import Main from './topics/main.js';


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
            {this.state.option == 0 ? <Main/> : null}
                

         </div>
        );
    }
}


export default MainBody;