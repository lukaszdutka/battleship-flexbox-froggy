import "./Editor.css"

const Editor = ({editor, answer, setAnswer}) => {
    const {codeBefore, codeAfter, requiredLines} = editor;

    const calculateLines = (string, requiredLines) => (string.match(/\n/g) || []).length + 3 + requiredLines
    const numberOfLines = (number) => [...Array(number).keys()].map(e => e + 1).join("\n");

    const changeAnswer = e => {
        const newValue = e.target.value;
        const numberOfLines = (str) => (str.match(/\n/g) || []).length + 1;
        if (numberOfLines(newValue) > requiredLines) {
            return;
        }
        setAnswer(newValue);
    };

    return (
        <div className="editor">
            <div className="css">
                <pre className="lines grid-part">
                    {numberOfLines(calculateLines(codeBefore + codeAfter, requiredLines))}
                </pre>
                <pre className="code grid-part">
                    <span>{codeBefore}</span>
                    <textarea id="code-text" style={{height: requiredLines * 20, maxLines: requiredLines}}
                              value={answer} onChange={changeAnswer}/>
                    <span>{codeAfter}</span>
                </pre>
            </div>
        </div>
    );
}

export default Editor;