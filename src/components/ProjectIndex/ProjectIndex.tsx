import data from './data/data.json';
import styles from './project-index.module.scss';
import {Project} from "../../model/project";
import ProjectSlot from "../ProjectSlot/ProjectSlot";

export default function ProjectIndex() {
    const projects = data as Project[];

    return (
        <div className={styles.projectIndexLayout}>
            <div className={styles.projectIndex}>
                {projects.map((project, index) => {
                    return (
                        <ProjectSlot project={project} key={index}/>
                    )
                })}
            </div>
        </div>
    )
}
