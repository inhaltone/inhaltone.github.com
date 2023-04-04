import React from "react";
import style from '../css/terminal.module.css';
import IconClose from "./icons/IconClose";
import TerminalText from "./TerminalText";

export default class TerminalWindow extends React.Component<any, any> {
    public previousPosX: number;
    public previousPosY: number;
    public currentPosX: number;
    public currentPosY: number;
    private terminalWindowElement: HTMLElement;
    private readonly terminalWindow: React.RefObject<HTMLDivElement>;

    constructor(props: any) {
        super(props);
        this.previousPosX = 0;
        this.previousPosY = 0;
        this.currentPosX = 0;
        this.currentPosY = 0;
        this.terminalWindowElement = document.createElement('div');
        this.terminalWindow = React.createRef();
    }

    componentDidMount() {
        setTimeout(() => this.terminalWindow.current?.classList.add('slide-in-blurred-bottom'), 1000);
    }

    drag(event: React.MouseEvent<HTMLElement>) {
        this.terminalWindowElement = event.currentTarget;
        this.previousPosX = event.clientX;
        this.previousPosY = event.clientY;
        document.onmousemove = (event) => {
            this.currentPosX = this.previousPosX - event.clientX;
            this.currentPosY = this.previousPosY - event.clientY;

            this.previousPosX = event.clientX;
            this.previousPosY = event.clientY;

            this.terminalWindowElement.style.top = (this.terminalWindowElement.offsetTop - this.currentPosY) + 'px';
            this.terminalWindowElement.style.left = (this.terminalWindowElement.offsetLeft - this.currentPosX) + 'px';
        };
        document.onmouseup = () => {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    close() {
        this.terminalWindow.current?.classList.remove('slide-in-blurred-bottom');
        this.terminalWindow.current?.classList.add('slide-out-blurred-bottom');
    }


    render() {
        return (
            <div ref={this.terminalWindow} onMouseDown={(event) => this.drag(event)} className={style.terminal}>
                <div className={style.toolbox}>
                    <div className={style.toolboxButtons}>
                        <button onClick={() => this.close()} type="button" className={style.closeButton}><IconClose/>
                        </button>
                    </div>
                </div>
                <div className={style.terminalText}>
                    <TerminalText
                        text={"@inhaltone"}/>
                </div>
            </div>
        )
    }
}
