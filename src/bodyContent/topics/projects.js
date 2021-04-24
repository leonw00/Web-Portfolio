import './projects.css';
import Project from './Project/project.js';
// import images
import SecretStoriesImage from '../../assets/mockSS.png';
import MoodDailyImage from '../../assets/mockMD.png';
import PortfolioImage from '../../assets/mockP.png';
import ReversibleImage from '../../assets/mockRL.png';


function projects(){
    return(
        <div class = "parent-projects">
            <Project  
                rightImage = {true}
                image = {SecretStoriesImage}
                demoLink = "https://gentle-plateau-42680.herokuapp.com/"
                repoLink = "https://github.com/leonw00/secret-stories">
                    A web app where users could post stories online anonymously. 
                    The site is mainly built in Django. 
                    It is deployed to Heroku with the use of Docker as its container.
            </Project>


            <Project  
                rightImage = {false}
                image = {MoodDailyImage}
                demoLink = ""
                repoLink = "https://github.com/leonw00/Daily-Mood-App">
                    A mobile application where users are able to record their feelings and look
                    back upon them on a later date. This application is made in flutter which makes 
                    it accessible on both android and ios. But so far, it has only been published on the 
                    google play store for android. Building this project, I have learned a lot of things
                    such as, being able to effeciently read and write to the firestore database, understand
                    how to publish an app to the google play store and built a working app in flutter.
            </Project>

            <Project  
                rightImage = {true}
                image = {PortfolioImage}
                demoLink = "https://www.leonardow.com"
                repoLink = "https://github.com/leonw00/Web-Portfolio">
                    This is a web portfolio about me. It is the second version of my portfolio, which is 
                    build with React as its core and Framer Motion for animation. This portfolio is an
                    improvement from my previous one which is a static portfolio built in html and css.
            </Project>

            <Project  
                rightImage = {false}
                image = {ReversibleImage}
                demoLink = ""
                repoLink = "https://github.com/leonw00/Daily-Mood-App">
                    An android application that allows users to create flashcards to study from. This is 
                    a group project for my software engineer course where the project is built in Android Studio. 
                    By doing this project, I learn about the Agile Development Cycle, the importance of unit tests, 
                    integrations tests and system tests, cooperating and communicating with my group members to work 
                    efficiently and effectively and have developed a sense of estimating feature management.
            </Project>

        </div>
    );
}

export default projects;