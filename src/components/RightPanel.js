import "./RightPanel.css"

const RightPanel = ({targets, ships}) => {

    return (
        <div id="right-panel-container">
            <div id="sea">{targets}</div>
            <div id="background">{ships}</div>
        </div>
    );
}

export default RightPanel;