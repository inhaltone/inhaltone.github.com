import React from 'react';
import './App.css';
import TerminalText from "./components/TerminalText";
import IconLogo from "./components/icons/IconLogo";
import Terminal from "./components/Terminal";

function App() {
    return (
        <div className="App">
            <div className="home-banner">
                <div className="logo">
                    <IconLogo/>
                </div>
                <Terminal>
                    <TerminalText
                        text={"@inhaltone \n Front-End Developer with expertise in implementing SPAs utilizing modern JavaScript frameworks."}/>
                </Terminal>
            </div>
        </div>
    );
}

export default App;
