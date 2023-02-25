import "./Editor.css"

const Editor = ({editor}) => {
    const {codeBefore, codeAfter, requiredLines} = editor;

    const calculateLines = (string, requiredLines) => (string.match(/\n/g) || []).length + 3 + requiredLines
    const numberOfLines = (number) => [...Array(number).keys()].map(e => e + 1).join("\n");

    return (
        <div className="editor">
            <div className="css">
                <pre className="lines grid-part">
                    {numberOfLines(calculateLines(codeBefore + codeAfter, requiredLines))}
                </pre>
                <pre className="code grid-part">
                    <span>{codeBefore}</span>
                    <textarea id="code-text"/>
                    <span>{codeAfter}</span>
                </pre>
            </div>
        </div>
    );
}

export default Editor;