import React from 'react';
import "./Header.css"
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai";

function Header({levelPanel}) {
    const {level, setLevel, maxLevel} = levelPanel;

    const decreaseLevel = () => {
        if (level > 1) {
            setLevel(level - 1)
        }
    }

    const increaseLevel = () => {
        if (level < maxLevel) {
            setLevel(level + 1)
        }
    }
    return (
        <div className="header">
            <div>
                <h1 className="title">Battleship Flexbox</h1>
            </div>
            <div id="level-counter">
                <AiFillCaretLeft onClick={decreaseLevel} className="clickable"/>
                level {level} of {maxLevel}
                <AiFillCaretRight onClick={increaseLevel} className="clickable"/>
            </div>
        </div>
    );
}

export default Header;