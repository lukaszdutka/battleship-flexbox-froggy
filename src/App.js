import './App.css';
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import {useEffect, useState} from "react";
import levels from "./levels";

const maxLevel = 24;

function App() {
    // pre-added css is needed for others to work.
    // adding-css to other entity than "sea" is also needed

    const [level, setLevel] = useState(1);
    const [levelDetails, setLevelDetails] = useState(levels[0])
    const [answer, setAnswer] = useState("")

    useEffect(() => {
        const lvl = levels.find(lvl => lvl.id === level)
        setLevelDetails(lvl !== undefined ? lvl : levels[0])
    }, [level])

    return (
        <div className="container">
            <LeftPanel levelPanel={{level, setLevel, maxLevel}} levelDetails={levelDetails} answer={answer}
                       setAnswer={setAnswer}/>
            <RightPanel levelDetails={levelDetails} answer={answer}/>
        </div>
    );
}

export default App;
