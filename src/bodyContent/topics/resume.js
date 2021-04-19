import './resume.css'
import { Tooltip } from '@material-ui/core'
// import images
import Git from '../../assets/logo/git.png'
import JavaScript from '../../assets/logo/javascript.png'
import Python from '../../assets/logo/python.png'
import Java from '../../assets/logo/java.png'
import C from '../../assets/logo/c.png'
import Django from '../../assets/logo/django.png'
import Mongodb from '../../assets/logo/mongodb.png'
import Flutter from '../../assets/logo/flutter.png'
import React from '../../assets/logo/react.png'
import Dart from '../../assets/logo/dart.png'


const resume = () => {

    return(
        <div class = "parent-resume">
            

            <div class = "subject-container">
                <h1>Education</h1>
                <div class = "explanation">
                    <h2>Bachelor of Computer Science Honours </h2>
                    <h4>Aug 2018 - Present, University of Manitoba, GPA: 4.11/4.5</h4>
                </div>
            </div>


            <div class = "subject-container">
                <h1>Technical Skills</h1>
                <div class = "explanation">
                    <Tooltip title = "Python" arrow>
                        <img src = {Python} alt = 'logo'/>
                    </Tooltip>
                    <Tooltip title = "Java" arrow>
                        <img src = {Java} alt = 'logo' class = "specialImage"/>
                    </Tooltip>
                    <Tooltip title = "JavaScript" arrow>
                        <img src = {JavaScript} alt = 'logo'/>
                    </Tooltip>
                    <Tooltip title = "C" arrow>
                        <img src = {C} alt = 'logo'/>
                    </Tooltip>
                    <Tooltip title = "Git" arrow>
                        <img src = {Git} alt = 'logo'/>
                    </Tooltip>
                    <Tooltip title = "Django" arrow>
                        <img src = {Django} alt = 'logo'/>
                    </Tooltip>
                    <Tooltip title = "React" arrow>
                        <img src = {React} alt = 'logo'/>
                    </Tooltip>
                    <Tooltip title = "Flutter" arrow>
                        <img src = {Flutter} alt = 'logo'/>
                    </Tooltip>
                    <Tooltip title = "MongoDB" arrow>
                        <img src = {Mongodb} alt = 'logo'/>
                    </Tooltip>
                    <Tooltip title = "Dart" arrow>
                        <img src = {Dart} alt = 'logo'/>
                    </Tooltip>

                    <h4> </h4>
                </div>
            </div>



            <div class = "subject-container">
                <h1>Work Experience</h1>
                <div class = "explanation">
                    <h2>Grader / Marker </h2>
                    <ul>
                        <li>Provides constructive feedback on the students’ assignments to make sure they understand their mistakes.</li>
                        <li>Grade the students’ tests, quizzes and assignments based on the rubric provided by the instructor fairly and objectively. </li>
                    </ul>
                    <h4>Aug 2020 - Dec 2020, University of Manitoba</h4>
                </div>
            </div>

            <div class = "subject-container">
                <h1>Volunteer Experience</h1>
                <div class = "explanation">
                    <h2>Mentor, CanU – Inspire</h2>
                    <ul>
                        <li>Mentored and provided active guidance to elementary school students throughout all the program and classes.</li>
                        <li>Built confidence in students to seize opportunities and follow their dreams.</li>
                    </ul>
                    <h4>Aug 2018 – Apr 2019, CanU – Inspire</h4>

                    <h2>Member, Rhythm of Indonesia</h2>
                    <ul>
                        <li>Performed traditional Indonesian dances in cultural events to promote Indonesian culture to locals.</li>
                    </ul>
                    <h4>Aug 2018 – Dec 2018, Rhythm of Indonesia</h4>

                    <h2>Server, Gamelan</h2>
                    <ul>
                        <li>Served traditional Indonesian dishes and provided excellent customer service to guests.</li>
                    </ul>
                    <h4>Nov 2018, Indonesian Society of Manitoba</h4>
                </div>
            </div>


        </div>
    );

}

export default resume;