import React, {useRef, useState} from "react";
import styles from './project-slot.module.scss';
import {Project} from "../../model/project";
import IconBoxArrowUpRight from "../icons/IconBoxArrowUpRight";
import HyperObserver from "../HyperObserver/HyperObserver";
import ImageLazy from "../ImageLazy/ImageLazy";

type ProjectSlotProps = {
    project: Project;
};
export default function ProjectSlot({project}: ProjectSlotProps) {
    const [isCollapse, setIsCollapse] = useState<boolean>(false);
    const projectTitle = useRef<HTMLDivElement>(null);

    return (
        <div className={styles.projectIndexItem}>
            <div ref={projectTitle} onClick={() => setIsCollapse((!isCollapse))}
                 className={`${styles.projectIndexTitle} ${isCollapse ? styles.projectIndexTitleActive : ''}`}>
                {project.Title}
            </div>
            <div className={`${styles.projectCollapse} ${isCollapse ? styles.projectCollapseExpanded : null}`}>
                <div className={`${styles.projectIndexInfo} ${isCollapse ? styles.projectIndexInfoExpanded : null}`}>
                    <div className={styles.projectIndexInfoCol}>
                        <div className={styles.projectIndexInfoColHeading}>
                            <p>Info</p>
                        </div>
                        <ul>
                            <li>
                                <span>year</span>
                                <span>{project.Year}</span>
                            </li>
                            <li>
                                <span>status</span>
                                <span>{project.Status}</span>
                            </li>
                            <li>
                                <span>type</span>
                                <span>{project.Type}</span>
                            </li>
                            <li>
                                <span>Technology</span>
                                <span>{project.Tech}</span>
                            </li>
                            <li>
                                <span>frontend framework</span>
                                <span>{project.FrontendFramework}</span>
                            </li>
                            <li>
                                <span>backend framework</span>
                                <span>{project.BackendFramework}</span>
                            </li>
                            <li>
                                <span>designer</span>
                                <span>{project.Design}</span>
                            </li>
                            <li>
                                <span>developer</span>
                                <span>{project.Dev}</span>
                            </li>
                            <li>
                                <span>client</span>
                                <span>{project.Client}</span>
                            </li>
                        </ul>
                        <a rel={'noreferrer'} href={project.Url} target={'_blank'} className={styles.linkButton}>
                            <span>VIEW PROJECT</span>
                            <IconBoxArrowUpRight/>
                        </a>
                    </div>
                    <div className={styles.projectIndexInfoCol}>
                        <div className={styles.projectIndexInfoColHeading}>
                            <p>Description</p>
                        </div>
                        <div className={styles.projectIndexInfoColText}>
                            {project.Description}
                        </div>
                    </div>
                    <div className={styles.projectIndexInfoCol}>
                        <div className={styles.projectIndexInfoColHeading}>
                            <p>View</p>
                            {/*<a aria-label={`View ${project.Title}`} href={project.Url} target={'_blank'}*/}
                            {/*   rel="noreferrer"><IconBoxArrowUpRight/></a>*/}
                        </div>
                        {project.imageList ? (
                            <HyperObserver>
                                <div className={styles.projectIndexInfoColAssets}>
                                    {project.imageList ? project.imageList.split(',').map((e, index) => {
                                        return (
                                            <ImageLazy key={index} src={`/image/${e.trim()}`}
                                                       alt={`${project.Title} view ${index}`}/>
                                        )
                                    }) : null}
                                </div>
                            </HyperObserver>) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
