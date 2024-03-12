import styles from './header.module.scss';
import Pill from "../pill/Pill";
import TerminalText from "../terminal/TerminalText";
import IconMail from "../icons/IconMail";
import IconGithub from "../icons/IconGithub";
import React, {useState} from "react";
import IconAt from "../icons/IconAt";
import IconInsta from "../icons/IconInsta";
import IconLinkedin from "../icons/IconLinkedin";
import Terminal from "../terminal/Terminal";

export default function Header() {
    const [showInfo, setShowInfo] = useState<boolean>(false);
    const [showTerminal, setShowTerminal] = useState<boolean>(false);
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerInfo}>
                    <div className={styles.headerInfoBox}>
                        <span onClick={() => setShowTerminal(!showTerminal)}>
                        <TerminalText text={"ANTONIS KALAGKATSIS ** FRONT END ENGINEER"}/>
                        </span>
                    </div>
                    <div className={styles.headerInfoBox}>
                        <button type={'button'} onClick={() => setShowInfo(!showInfo)}
                                className={styles.headerAction}>
                            {showInfo ? 'CLOSE' : 'INFO'}
                        </button>
                        {/*<a className="App-link" href="mailto:inhalt.xyz@gmail.com">*/}
                        {/*    <Pill text={"inhalt.xyz[at]gmail.com"}>*/}
                        {/*        <IconMail/>*/}
                        {/*    </Pill>*/}
                        {/*</a>*/}
                        {/*<a className="App-link" rel="noreferrer" href="https://github.com/inhaltone" target="_blank">*/}
                        {/*    <Pill text={"@inhaltone"}>*/}
                        {/*        <IconGithub/>*/}
                        {/*    </Pill>*/}
                        {/*</a>*/}
                    </div>
                </div>
                <div className={styles.headerInfo}>
                    {/*<Pill text={'Info'}/>*/}
                </div>
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
            </header>
            <Terminal status={showTerminal} windowName={"inhalt@inhaltone: ~/Home"}>
                <TerminalText
                    text={"@inhaltone \n Front-End Developer with expertise in implementing SPAs utilizing modern JavaScript frameworks."}/>
            </Terminal>
        </>
    )
}
