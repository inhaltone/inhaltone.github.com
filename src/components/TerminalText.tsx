import React, {useEffect, useState} from "react";
import TerminalCursor from "./TerminalCursor";

enum AnimationStatusEnum {
    READY = 'ready',
    PENDING = 'pending',
    COMPLETED = 'completed'
}

interface PropsInterface {
    text: string
}

export default function TerminalText(props: PropsInterface) {
    const charList: string[] = [];
    const speed: number = 20;
    const [animationTextState, setAnimationTextState] = useState('');
    const [animationStatusState, setAnimationStatusState] = useState(AnimationStatusEnum.READY);

    useEffect(() => {
        async function doAnimation() {
            const status = await animate();
            // if (status === AnimationStatusEnum.READY) {
            console.log('telos to animation', status);
            // updateStatus(status);
            // }
        }

        doAnimation();
        updateStatus(AnimationStatusEnum.PENDING);
    }, [animationStatusState]);

    async function animate(): Promise<AnimationStatusEnum> {
        for (const char of props.text) {
            await delay();
            charList.push(char);
            updateText(charList.join(""));
        }
        return Promise.resolve(AnimationStatusEnum.COMPLETED);
    }

    function delay(): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(), speed)
        })
    }

    function updateText(charList: string) {
        setAnimationTextState(charList);
    }

    function updateStatus(status: AnimationStatusEnum) {
        setAnimationStatusState(status);
    }

    return (
        <div className="caption">
            <span>{animationTextState}</span>
            <TerminalCursor/>
        </div>
    );
}
