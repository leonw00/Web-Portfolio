import './header.css';
import {Link} from 'react-router-dom';

const header = (props) =>{

    return (
      <header>
        <div class = "left-section">
          <Link to = "/" class = "decor">LW</Link>
        </div>
        <div class = "right-section">
          <Link to = "/projects" class = "decor">Project</Link>
          <Link to = "/resume" class = "decor">Resume</Link>
        </div>
      </header>
    );

}


export default header;