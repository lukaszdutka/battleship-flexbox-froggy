import React from 'react';
import "./Header.css"
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai";

function Header({level, setLevel, maxLevel}) {

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
                <AiFillCaretLeft onClick={decreaseLevel}/>
                level {level} of {maxLevel}
                <AiFillCaretRight onClick={increaseLevel}/>
            </div>
        </div>
    );
}

export default Header;