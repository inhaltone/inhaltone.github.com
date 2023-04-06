import styles from './pill.module.css';
import React from "react";

interface PillProps extends React.PropsWithChildren {
    text: string
}

export default function Pill({text, children}: PillProps) {
    return (
        <div className={styles.pill}>
            {children ? <span className={styles.icon}>{children}</span> : null}
            <span className={styles.text}>{text}</span>
        </div>
    )
}
