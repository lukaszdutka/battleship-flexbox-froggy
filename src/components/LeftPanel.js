import "./LeftPanel.css"
import Editor from "./Editor";
import Instructions from "./Instructions";
import Header from "./Header";

const LeftPanel = ({level, setLevel, maxLevel}) => {
    return (
        <div className="left-panel-container">
            <Header level={level} setLevel={setLevel} maxLevel={maxLevel}/>
            <Instructions/>
            <Editor/>
        </div>
    );
}

export default LeftPanel;