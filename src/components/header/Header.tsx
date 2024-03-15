import styles from './header.module.scss';
import TerminalText from "../terminal/TerminalText";
import React, {useState} from "react";
import HeaderInfo from "../HeaderInfo/HeaderInfo";
import IconBrand from "../icons/IconBrand";

export default function Header() {
    const [showInfo, setShowInfo] = useState<boolean>(false);
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerInfo}>
                    <div className={styles.headerInfoCol}>
                        <TerminalText text={"ANTONIS KALAGKATSIS"}/>
                    </div>
                    <div className={styles.headerInfoCol}>
                        <TerminalText text={"/** FRONT END ENGINEER \n x MULTIMEDIA DESIGNER"}/>
                    </div>
                    <div className={styles.headerInfoCol}>
                        <IconBrand/>
                    </div>
                    <div className={styles.headerInfoCol}>
                        <button type={'button'} onClick={() => setShowInfo(!showInfo)}
                                className={styles.headerAction}>
                            {showInfo ? 'CLOSE' : 'INFO'}
                        </button>
                    </div>
                </div>
            </header>
            <HeaderInfo showInfo={showInfo}/>
        </>
    )
}
