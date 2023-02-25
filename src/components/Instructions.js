import "./Instructions.css"

const Instructions = ({instructions}) => {
    return (
        <div id="instructions" dangerouslySetInnerHTML={{__html: instructions}}/>
    );
}

export default Instructions;