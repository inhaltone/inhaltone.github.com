import React, {useCallback, useEffect, useState} from "react";
import TerminalCursor from "./TerminalCursor";
import styles from './terminal.module.scss';

enum AnimationStatusEnum {
    READY = 'ready',
    PENDING = 'pending',
    COMPLETED = 'completed'
}

interface PropsInterface {
    text: string
}

export default function TerminalText({text}: PropsInterface) {
    const charList: string[] = [];
    const speed: number = 20;
    const [animationTextState, setAnimationTextState] = useState('');
    const [animationStatusState, setAnimationStatusState] = useState(AnimationStatusEnum.READY);

    const doAnimation = useCallback(animate, [animate]);

    useEffect(() => {
        if (animationStatusState === AnimationStatusEnum.READY) {
            doAnimation().then(() => {});
        }
    }, [animationStatusState, doAnimation])

    async function animate(): Promise<AnimationStatusEnum> {
        setAnimationStatusState(AnimationStatusEnum.PENDING);
        for (const char of text) {
            await delay();
            charList.push(char);
            setAnimationTextState(charList.join(''));
        }
        setAnimationStatusState(AnimationStatusEnum.COMPLETED);
        return Promise.resolve(AnimationStatusEnum.COMPLETED);
    }

    function delay(): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(), speed)
        })
    }

    return (
        <div className={styles.terminalCaption}>
            <span>{animationTextState}</span>
            {animationStatusState !== AnimationStatusEnum.COMPLETED ? <TerminalCursor/> : null}
        </div>
    );
}
