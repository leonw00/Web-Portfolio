import './projects.css';
import RightProject from './Project/RightProject.js';
// import images
import SecretStoriesImage from '../../assets/mockSS.png';

function projects(){
    return(
        <div class = "parent-projects">
            <RightProject  
                image = {SecretStoriesImage}
                demoLink = "https://gentle-plateau-42680.herokuapp.com/"
                repoLink = "https://github.com/leonw00/secret-stories">
                    A web app where users could post stories online anonymously. 
                    The site is mainly built in Django. 
                    It is deployed to Heroku with the use of Docker as the container.
            </RightProject>


            <RightProject  
                image = "test">
                a full-stack* Product Designer living in Athens,
                with a high interest on product and polished user
                experiences.  
                a full-stack* Product Designer living in Athens,
                with a high interest on product and polished user
                experiences.  
                a full-stack* Product Designer living in Athens,
                with a high interest on product and polished user
                experiences.  
            </RightProject>


        </div>
    );
}

export default projects;