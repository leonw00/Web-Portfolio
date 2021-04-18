import {Switch, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion'
import './mainBody.css';
import Main from './topics/main.js';
import Projects from './topics/projects.js';
import Resume from './topics/resume.js';


function MainBody(){

    const location = useLocation();
    return(
        <div class = "main-body"> 
            <AnimatePresence exitBeforeEnter>
                <Switch locaiton = {location}>
                    <Route path="/projects"><Projects/></Route>
                    <Route exact path="/resume"><Resume/></Route>
                    <Route exact path="/"><Main/></Route>
                </Switch>
            </AnimatePresence>

            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@300&family=Poiret+One&display=swap" rel="stylesheet"></link>
        </div>
    );
}


export default MainBody;