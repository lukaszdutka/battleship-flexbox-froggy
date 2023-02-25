import "./LeftPanel.css"
import Editor from "./Editor";
import Instructions from "./Instructions";
import Header from "./Header";

const LeftPanel = ({levelPanel, levelDetails}) => {
    return (
        <div className="left-panel-container">
            <Header levelPanel={levelPanel}/>
            <Instructions instructions={levelDetails.instructions}/>
            <Editor editor={levelDetails.editor}/>
        </div>
    );
}

export default LeftPanel;