import React, {useEffect, useRef} from "react";
import style from '../css/terminal.module.css';
import IconClose from "./icons/IconClose";

export default function Terminal(props: any) {
    const terminalRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

    useEffect(() => {
        terminalRef.current!.classList.add('slide-in-blurred-bottom');
    }, []);

    function closeWindow(event: React.MouseEvent) {
        terminalRef.current?.classList.remove('slide-in-blurred-bottom');
        terminalRef.current?.classList.add('slide-out-blurred-bottom');
    }

    function dragAndMove(event: React.MouseEvent) {
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
            <div onMouseDown={dragAndMove} className={style.toolbox}>
                <div className={style.toolboxButtons}>
                    <button onClick={closeWindow} type="button" className={style.closeButton}><IconClose/>
                    </button>
                </div>
                <div className={style.terminalText}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
