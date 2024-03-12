import data from './data/data.json';
import styles from './project-index.module.scss';

interface Project {
    Title?: string;
    Year?: string;
}

export default function ProjectIndex() {
    const projects = data as Project[];

    return (
        <div className={styles.projectIndex}>
            {projects.map(({Title}) => {
                return (
                    <div className={styles.projectIndexItem}>
                        {Title}
                    </div>
                )
            })}
        </div>
    )
}
