import "./LeftPanel.css"
import Editor from "./Editor";
import Instructions from "./Instructions";
import Header from "./Header";

const LeftPanel = ({levelPanel, levelDetails, answer, setAnswer}) => {
    return (
        <div className="left-panel-container">
            <Header levelPanel={levelPanel}/>
            <Instructions instructions={levelDetails.instructions}/>
            <Editor editor={levelDetails.editor} answer={answer} setAnswer={setAnswer}/>
        </div>
    );
}

export default LeftPanel;