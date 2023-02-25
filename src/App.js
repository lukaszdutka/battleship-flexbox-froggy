import './App.css';
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import {useEffect, useState} from "react";

const maxLevel = 24;

function App() {
    const [level, setLevel] = useState(1);

    const [levelDetails, setLevelDetails] = useState({})

    useEffect(() => {
        //take levelDetails from somewhere and set it
        //setLevelDetails({})
    },[level])

    return (
        <div className="container">
            <LeftPanel level={level} setLevel={setLevel} maxLevel={maxLevel}/>
            <RightPanel />
        </div>
    );
}

export default App;
