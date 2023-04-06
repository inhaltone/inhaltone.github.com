import styles from './header.module.css';
import Pill from "../pill/Pill";
import TerminalText from "../terminal/TerminalText";
import IconMail from "../icons/IconMail";
import IconGithub from "../icons/IconGithub";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerInfo}>
                <div className={styles.headerInfoBox}>
                    <TerminalText text={"Antonis Kalagkatsis ⚡ Front-End engineer"}/>
                </div>
                <div className={styles.headerInfoBox}>
                    <a className="App-link" href="mailto:inhalt.xyz@gmail.com">
                        <Pill text={"inhalt.xyz[at]gmail.com"}>
                            <IconMail/>
                        </Pill>
                    </a>
                    <a className="App-link" rel="noreferrer" href="https://github.com/inhaltone" target="_blank">
                    <Pill text={"@inhaltone"}>
                        <IconGithub/>
                    </Pill>
                    </a>
                </div>
            </div>
        </header>
    )
}
