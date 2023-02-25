import "./RightPanel.css"
import {useEffect, useState} from "react";

const RightPanel = ({levelDetails, answer}) => {
    const {targets, ships} = levelDetails.board;

    const [customStyles, setCustomStyles] = useState({})
    //bug:
    //Right now, when you input `answer` into answer area, key by key: i.e.
    // "background-color: red;"
    // it changes background to red, but when you start to remove keys one by one
    // it remains red UNTIL you go to state:
    // "background-color: "
    // but i'd like it to remain red ONLY UNTIL:
    // "background-color: re" - at this moment it should rerender to original color, but it doesn't.
    // happily, when you delete whole line then it resets to previous style, which is half-success.

    useEffect(() => {
        if (answer === "") {
            setCustomStyles({})
        }
        const styles = tryParseInputStyles(answer);
        if (styles === undefined) {
            setCustomStyles({})
            return;
        }
        setCustomStyles(styles)
    }, [answer])

    function tryParseInputStyles(answer) {
        try {
            return answer.split("\n")
                .reduce((acc, line) => {
                    const split = line.replaceAll(";", "").split(":").map(e => e.trim());
                    return split[1].length === 0
                        ? acc
                        : {...acc, [split[0]]: split[1]};
                }, {})
        } catch (e) {
            return undefined;
        }
    }

    return (
        <div id="right-panel-container">
            <div id="board">
                <div id="sea" style={customStyles} dangerouslySetInnerHTML={{__html: targets}}/>
                <div id="background" dangerouslySetInnerHTML={{__html: ships}}/>
            </div>
        </div>
    );
}

export default RightPanel;