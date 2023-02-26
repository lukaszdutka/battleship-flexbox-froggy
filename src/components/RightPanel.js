import "./RightPanel.css"
import {useEffect, useState} from "react";

const RightPanel = ({levelDetails, answer}) => {
    const {board, styles} = levelDetails;

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
        setCustomStyles({targets: styles}) //todo decide which one
    }, [answer])

    function tryParseInputStyles(answer) {
        try {
            return answer.split("\n")
                .reduce((acc, line) => {
                    const split = line.replaceAll(";", "").split(":").map(e => e.trim());
                    console.log({line})
                    return split[0].length === 0
                        ? acc
                        : {...acc, [split[0]]: split[1]};
                }, {})
        } catch (e) {
            return undefined;
        }
    }

    const renderTargets = (board, startingCustomStyles, playerStyles) =>
        board.map(color => {
            const startingStyles = startingCustomStyles[`targets_${color}`];
            const playerStyle = playerStyles[color];
            const classes = `target ${color}`
            return <div className={classes} style={{...startingStyles, ...playerStyle}}/>
        });

    const renderShips = (board, startingCustomStyles, playerStyles) =>
        board.map(color => {
            const startingStyles = startingCustomStyles[`ships_${color}`];
            const playerStyle = playerStyles[color];
            const classes = `ship ${color}`
            return <div className={classes} style={{...startingStyles, ...playerStyle}}/>
        });

    const targets = renderTargets(board, styles, customStyles);
    const ships = renderShips(board, styles, customStyles);

    return (
        <div id="right-panel-container">
            <div id="board">
                <div id="sea" style={{...styles.targets, ...customStyles.targets}}>
                    {targets}
                </div>
                <div id="background" style={styles.ships}>
                    {ships}
                </div>
            </div>
        </div>
    );
}

export default RightPanel;