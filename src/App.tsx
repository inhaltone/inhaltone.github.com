import React, {useState} from 'react';
import './styles/App.css';
import TerminalText from "./components/terminal/TerminalText";
import IconLogo from "./components/icons/IconLogo";
import Terminal from "./components/terminal/Terminal";
import Header from "./components/header/Header";

function App() {
    const [buttonState, setButtonState] = useState(false)

    function toggleModal() {
        setButtonState((prevState) => !prevState);
    }

    return (
        <div className="App">
            <Header/>
            <div className="home-banner">
                <div onClick={toggleModal} className="logo">
                    <IconLogo/>
                </div>
                {buttonState ?
                    <Terminal status={buttonState} windowName={"inhalt@inhaltone: ~/Home"}>
                        <TerminalText
                            text={"@inhaltone \n Front-End Developer with expertise in implementing SPAs utilizing modern JavaScript frameworks."}/>
                    </Terminal>
                    : null}
            </div>
        </div>
    );
}

export default App;
