import React from 'react';
import './App.css';
import TerminalText from "./components/TerminalText";
import TerminalWindow from "./components/TerminalWindow";

function App() {
    return (
        <div className="App">
            <div className="home-banner">
                <div className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-capsule"
                         viewBox="0 0 16 16">
                        <path
                            d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429l4.243 4.242Z"/>
                    </svg>
                </div>
                <TerminalWindow />
                <TerminalText text={"@inhaltone \n Front-End Developer with expertise in implementing SPAs utilizing modern JavaScript frameworks."}/>
            </div>
        </div>
    );
}

export default App;
