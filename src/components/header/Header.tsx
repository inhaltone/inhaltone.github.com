import styles from './header.module.scss';
import TerminalText from "../terminal/TerminalText";
import React, {useState} from "react";
import Terminal from "../terminal/Terminal";
import HeaderInfo from "../HeaderInfo/HeaderInfo";
import IconBrand from "../icons/IconBrand";

export default function Header() {
    const [showInfo, setShowInfo] = useState<boolean>(false);
    const [showTerminal, setShowTerminal] = useState<boolean>(false);
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerInfo}>
                    <div className={styles.headerInfoBox}>
                        <span onClick={() => setShowTerminal(!showTerminal)}>
                        <TerminalText text={"ANTONIS KALAGKATSIS /** FRONT END ENGINEER"}/>
                        </span>
                    </div>
                    <div style={{
                        width: '123px',
                        height: 'auto',
                        marginRight: 'auto',
                        marginLeft: '246px'
                    }}>
                        <IconBrand/>
                    </div>
                    <div className={styles.headerInfoBox}>
                        <button type={'button'} onClick={() => setShowInfo(!showInfo)}
                                className={styles.headerAction}>
                            {showInfo ? 'CLOSE' : 'INFO'}
                        </button>
                    </div>
                </div>
            </header>
            <HeaderInfo showInfo={showInfo}/>
            <Terminal status={showTerminal} windowName={"inhalt@inhaltone: ~/Home"}>
                <TerminalText
                    text={"@inhaltone \n Front-End Developer with expertise in implementing SPAs utilizing modern JavaScript frameworks."}/>
            </Terminal>
        </>
    )
}
