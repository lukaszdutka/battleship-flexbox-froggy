import "./Editor.css"

const Editor = () => {
    const numberOfLines = (number) => [...Array(number).keys()].map(e => e + 1).join("\n");

    const codeBefore = () => `.sea {\n\tdisplay: flex;`;
    const codeAfter = () => `}\n`;

    return (
        <div className="editor">
            <div className="css">
                <pre className="lines grid-part">
                    {numberOfLines(5)}
                </pre>
                <pre className="code grid-part">
                    <span>{codeBefore()}</span>
                    <textarea id="code-text"/>
                    <span>{codeAfter()}</span>
                </pre>
            </div>
        </div>
    );
}

export default Editor;