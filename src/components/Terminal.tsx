import React, {useEffect, useRef, useState} from "react";
import style from '../css/terminal.module.css';
import IconClose from "./icons/IconClose";

enum TerminalWindowStatusEnum {
    CLOSED,
    OPENED
}

interface TerminalProps extends React.PropsWithChildren {
    windowName: string,
    status: boolean
}

export default function Terminal({children, windowName, status}: TerminalProps) {
    const terminalRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
    const [terminalStatus, setTerminalStatus] = useState(TerminalWindowStatusEnum.CLOSED);

    useEffect(() => {
        console.log('STATUS: => ', status);
        status ? openWindow() : closeWindow();
        // terminalRef.current!.classList.add('slide-in-blurred-bottom');
    }, [status]);

    function closeWindow() {
        terminalRef.current?.classList.remove('slide-in-blurred-bottom');
        terminalRef.current?.classList.add('slide-out-blurred-bottom');
        setTerminalStatus(TerminalWindowStatusEnum.CLOSED);
    }

    function openWindow() {
        terminalRef.current!.classList.add('slide-in-blurred-bottom');
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
