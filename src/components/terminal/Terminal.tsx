import React, {useEffect, useRef, useState} from "react";
import style from './terminal.module.scss';
import IconClose from "../icons/IconClose";

enum TerminalWindowStatusEnum {
    CLOSED,
    OPENED
}

interface TerminalProps extends React.PropsWithChildren {
    windowName: string,
    status: boolean
}

export default function Terminal({children, windowName, status}: TerminalProps) {
    // const classAnimationEnter = 'slide-in-blurred-bottom';
    // const classAnimationLeave = 'slide-out-blurred-bottom';
    const classAnimationEnter = 'scale-in-center';
    const classAnimationLeave = 'scale-out-center';
    const terminalRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
    const [terminalStatus, setTerminalStatus] = useState(TerminalWindowStatusEnum.CLOSED);

    useEffect(() => {
        terminalRef.current!.style.top = `${window.innerWidth / 2}px`;
        terminalRef.current!.style.top = `${window.innerHeight / 2}px`;
    }, [terminalRef]);

    useEffect(() => {
        status ? openWindow() : closeWindow();
        // terminalRef.current!.classList.add('slide-in-blurred-bottom');
    }, [status]);

    function closeWindow() {
        terminalRef.current?.classList.add(classAnimationLeave);
        terminalRef.current?.classList.remove(classAnimationEnter);
        setTimeout(() => setTerminalStatus(TerminalWindowStatusEnum.CLOSED), 500);
    }

    function openWindow() {
        terminalRef.current?.classList.remove(classAnimationLeave);
        terminalRef.current!.classList.add(classAnimationEnter);
        setTerminalStatus(TerminalWindowStatusEnum.OPENED);
    }

    function dragAndMove(event: React.MouseEvent) {
        event.stopPropagation();
        let previousPosX: number = event.clientX;
        let previousPosY: number = event.clientY;
        document.onmousemove = (event) => {
            const currentPosX: number = previousPosX - event.clientX;
            const currentPosY: number = previousPosY - event.clientY;

            previousPosX = event.clientX;
            previousPosY = event.clientY;

            terminalRef.current!.style.top = (terminalRef.current!.offsetTop - currentPosY) + 'px';
            terminalRef.current!.style.left = (terminalRef.current!.offsetLeft - currentPosX) + 'px';

        }
        document.onmouseup = () => {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    return (
        <div ref={terminalRef} className={style.terminal}>
            <div className={style.toolbox}>
                <div onMouseDown={dragAndMove} className={style.toolboxButtons}>
                    <div className={style.toolboxName}>
                        {windowName}
                    </div>
                    <button onClick={closeWindow} type="button" className={style.closeButton}><IconClose/>
                    </button>
                </div>
                <div className={style.terminalText}>
                    {terminalStatus === TerminalWindowStatusEnum.OPENED ? children : null}
                </div>
            </div>
        </div>
    )
}
