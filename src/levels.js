const levels = [
    {
        id: 1,
        instructions: `
            <p>Welcome to Battleship Flexbox, a game where you help aim bombs onto battleships by writing CSS code! Guide this
                aim to the battleship on the right by using the
                <code className="help">justify-content</code> property, which aligns items horizontally and accepts
                the following values:</p>
            <ul>
                <li><code>flex-start</code>: Items align to the left side of the container.</li>
                <li><code>flex-end</code>: Items align to the right side of the container.</li>
                <li><code>center</code>: Items align at the center of the container.</li>
                <li><code>space-between</code>: Items display with equal spacing between them.</li>
                <li><code>space-around</code>: Items display with equal spacing around them.</li>
            </ul>
            <p>For example, <code>justify-content: flex-end;</code> will move the aim to the right.</p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 1
        },
        solution_css: {
            "justify-content": "flex-end"
        }
    },
    {
        id: 2,
        instructions: `
            <p>Use <code class="help">justify-content</code> again to help these aims to target battleships. 
            Remember that this CSS property aligns items horizontally and accepts the following values:
            </p>
            <ul>
                <li><code>flex-start</code>: Items align to the left side of the container.</li>
                <li><code>flex-end</code>: Items align to the right side of the container.</li>
                <li><code>center</code>: Items align at the center of the container.</li>
                <li><code>space-between</code>: Items display with equal spacing between them.</li>
                <li><code>space-around</code>: Items display with equal spacing around them.</li>
            </ul>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 1
        },
        solution: {}
    }
]

export default levels;