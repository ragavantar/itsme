import { ProjectsList } from '../../constants';

const Projects = () => {
    return (
        <div className="projects">
            {
                ProjectsList.map(val =>
                    <div className="item">
                        <div className="title">{val.title}</div>
                        <div className="description">{val.description}</div>
                        <div className="text">{val.text}</div>
                        <div className="technology">Technology : {val.technology}</div>
                    </div>)
            }
        </div>
    );
}

export default Projects;