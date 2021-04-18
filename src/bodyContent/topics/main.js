import './main.css'
import {motion} from 'framer-motion'
import SplitText from '../../utils/SplitText.js'
import HumanImage from '../../assets/humanPhoto.jpeg';


const hiAnimateTime = 0.5;

function main(){
    return(
        <div class = "parent-main">
            <div class = "left-content">
                <motion.h2
                animate = {{scale: [0.5, 1]}}
                transition = {{duration: hiAnimateTime}}>
                    Hi, Leo Here!
                </motion.h2>
                <p> 
                    <SplitText
                    initial={{ y: '100%' }}
                    animate="visible"
                    variants={{
                      visible: i => ({
                        y: 0,
                        transition: {
                          delay: hiAnimateTime + i * 0.1
                        }
                      })
                    }}>
                    The name's Leonardo Warsito, a third-year computer science student studying at the University of Manitoba. 
                    I'm passionate about software development and machine learning.
                    </SplitText>
                </p>     
            </div>
            <div class = "right-content">
                <motion.img 
                animate = {{
                    opacity: [0, 1, 1],
                    scale: [1, 1.5, 1.5, 1.3],
                    rotate: [0, 0, 360, 360],
                    borderRadius: ["20%", "40%", "50%",],
                }} 
                transition = {{
                    duration: 1, 
                    delay: 3,
                }}
                src = {HumanImage} alt = "#"/>
            </div>
        </div>
    );

}

export default main;