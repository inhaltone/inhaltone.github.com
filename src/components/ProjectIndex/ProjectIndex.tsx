import data from './data/data.json';
import styles from './project-index.module.scss';

interface Project {
    Title?: string;
    Design?: string;
    Dev?: string;
    Framework?: string;
    Type?: string;
    Tech?: string;
    Description?: string;
    Url?: string;
    ImageUrl?: string | null;
    Year?: string;
}

export default function ProjectIndex() {
    const projects = data as Project[];

    return (
        <div className={styles.projectIndex}>
            {projects.map(({Title}, index) => {
                return (
                    <div key={index} className={styles.projectIndexItem}>
                        {Title}
                    </div>
                )
            })}
        </div>
    )
}
