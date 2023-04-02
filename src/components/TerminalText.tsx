import React from "react";
import TerminalCursor from "./TerminalCursor";

export default class TerminalText extends React.Component<any, any> {
    list: string[];
    speed: number = 100;

    constructor(props: any) {
        super(props);
        this.state = {text: ''};
        this.list = [];
    }

    componentDidMount() {
        this.main();
    }

    promise(i: number): Promise<string> {
        return new Promise((resolve) => {
            setTimeout(() => resolve('poutsa'), this.speed * i)
        })
    }

    main() {
        // @ts-ignore
        Array.from(this.props.text).forEach(async (char: string, index) => {
            await this.promise(index);
            this.list.push(char);
            console.log(this.list, index);
            this.updateState(this.list.join(""));
        });
    }

    updateState(list: string) {
        this.setState(() => ({
            text: list
        }));
    }


    render() {
        return (
            <div>
                <span>{this.state.text}</span>
                <TerminalCursor/>
            </div>
        );
    }
}
