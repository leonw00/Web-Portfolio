import './RightProject.css'

const project = (props) => {

    return(
        <div class = "container">
            <div class = "text-side">
                {props.children}
                <div class = "link-container">
                    <a href = {props.demoLink}>DEMO</a>
                    <a href = {props.repoLink}>REPO</a>
                </div>
            </div>
            <div class = "image-side">
                <img src = {props.image} alt = ""/>
            </div>
        </div>
    );
}

export default project;