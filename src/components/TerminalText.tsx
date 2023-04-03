import React from "react";
import TerminalCursor from "./TerminalCursor";

enum StatusEnum {
    PENDING = 'pending',
    COMPLETED = 'completed'
}

interface PropsInterface {
    text: string
}

interface TerminalTextInterface {
    text: string;
    status: StatusEnum
}

export default class TerminalText extends React.Component<PropsInterface, TerminalTextInterface> {
    charList: string[];
    speed: number = 20;

    constructor(props: PropsInterface) {
        super(props);
        this.state = {text: '', status: StatusEnum.PENDING};
        this.charList = [];
    }

    async componentDidMount() {
        const status = await this.animate();
        this.updateStatus(status);
    }

    async animate(): Promise<StatusEnum> {
        for (const char of this.props.text) {
            await this.delay();
            this.charList.push(char);
            this.updateText(this.charList.join(""));
        }
        return Promise.resolve(StatusEnum.COMPLETED);
    }

    delay(): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(), this.speed)
        })
    }

    updateText(charList: string) {
        this.setState(() => ({
            text: charList
        }));
    }

    updateStatus(status: StatusEnum) {
        this.setState(() => ({
            status: status
        }));
    }

    render() {
        return (
            <div className="caption">
                <span>{this.state.text}</span>
                <TerminalCursor/>
            </div>
        );
    }
}
