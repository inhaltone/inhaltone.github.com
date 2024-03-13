import React from "react";
import styles from './header-info.module.scss';

type HeaderInfoProps = {
    showInfo: boolean
}
export default function HeaderInfo({showInfo}: HeaderInfoProps) {
    return (
        <div className={`${styles.infoContainer} ${showInfo ? styles.infoContainerVisible : null}`}>
            <div className={styles.infoContainerLayout}>
                <p>Antonis Kalagkatsis is a Front End Engineer dedicated to pushing the boundaries of creativity
                    and technology.</p>
                <p>He holds a Diploma in Fine and Applied Arts, specializing in physical computing, interactive
                    installations and 3D animation. This foundation provided a unique perspective on integrating
                    code as an artistic medium, enriching his approach to digital design.</p>
                <p>Further advancing his skills, he pursued a Master's degree in digital multi-user
                    environments, concentrating on user-centric design principles and Machine Learning
                    applications.</p>
                <div style={{
                    marginTop: '55px'
                }}>
                    <p>CONTACT</p>
                    <ul className={styles.socialList}>
                        <li>
                            <a href="mailto:antoniskalagk@gmail.com">
                                antoniskalagk@gmail.com
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/inhaltone">
                                GITHUB
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.instagram.com/inhalt__/">
                                INSTAGRAM
                            </a>
                        </li>
                        <li>
                            <a target="_blank"
                               href="https://www.linkedin.com/in/antonis-kalagkatsis-347404226/">
                                LINKEDIN
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
