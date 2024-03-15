import React from "react";
import styles from './header-info.module.scss';

type HeaderInfoProps = {
    showInfo: boolean
}
export default function HeaderInfo({showInfo}: HeaderInfoProps) {
    return (
        <div className={`${styles.infoContainer} ${showInfo ? styles.infoContainerVisible : ''}`}>
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
                    <div className={styles.infoContainerLayoutStack}>
                        <div>
                            <p>Follow</p>
                            <ul className={styles.socialList}>
                                <li>
                                    <a target="_blank" href="https://github.com/inhaltone" rel="noreferrer">
                                        GITHUB
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://www.instagram.com/inhalt__/" rel="noreferrer">
                                        INSTAGRAM
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank"
                                       href="https://www.linkedin.com/in/antonis-kalagkatsis-347404226/"
                                       rel="noreferrer">
                                        LINKEDIN
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p>Contact</p>
                            <ul className={styles.socialList}>
                                <li>
                                    <a href="tel:00306947585487">
                                        +30 694 75 85 487
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:antoniskalagk@gmail.com">
                                        antoniskalagk@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
