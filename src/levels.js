const target = (color) => {
    return `<div class="target ${color}"></div>`
}

const ship = (color) => {
    return `<div class="ship ${color}"></div>`
}

const greenTarget = (number = 1) => {
    return target("green").repeat(number);
}

const redTarget = (number = 1) => {
    return target("red").repeat(number);
}

const blueTarget = (number = 1) => {
    return target("blue").repeat(number);
}

const greenShip = (number = 1) => {
    return ship("green").repeat(number);
}

const redShip = (number = 1) => {
    return ship("red").repeat(number);
}

const blueShip = (number = 1) => {
    return ship("blue").repeat(number);
}


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
        board: {
            targets: redTarget(),
            ships: redShip()
        },
        solutionStyles: {
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
        board: {
            targets: redTarget() + greenTarget(),
            ships: redShip() + greenShip()
        },
        solutionStyles: {"justify-content": "center"}
    },
    {
        id: 3,
        instructions: `
            <p>Help all three frogs find their lilypads just by using <code class="help">justify-content</code>. 
                This time, the lilypads have lots of space all around them.
            </p>
            <p>If you find yourself forgetting the possible values for a property, you can click on the property name 
                to view them. Try clicking on <code class="help">justify-content</code>.
            </p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 1
        },
        board: {
            targets: redTarget() + greenTarget() + blueTarget(),
            ships: redShip() + greenShip() + blueShip()
        },
        solutionStyles: {"justify-content": "space-around"}
    },
    {
        id: 4,
        instructions: `
            <p>Now the lilypads on the edges have drifted to the shore, increasing the space between them. 
                Use <code class="help">justify-content</code>. This time, the lilypads have equal spacing between them.
            </p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 1
        },
        board: {
            targets: redTarget() + greenTarget() + blueTarget(),
            ships: redShip() + greenShip() + blueShip()
        },
        solutionStyles: {"justify-content": "space-between"}
    },
    {
        id: 5,
        instructions: `
            <p>Now use <code class="help">align-items</code> to help the frogs get to the bottom of the pond. This CSS property aligns items vertically and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the top of the container.</li><li><code>flex-end</code>: Items align to the bottom of the container.</li><li><code>center</code>: Items align at the vertical center of the container.</li><li><code>baseline</code>: Items display at the baseline of the container.</li><li><code>stretch</code>: Items are stretched to fit the container.</li></ul>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 1
        },
        board: {
            targets: redTarget() + greenTarget() + blueTarget(),
            ships: redShip() + greenShip() + blueShip()
        },
        solutionStyles: {"align-items": "flex-end"}
    },
    {
        id: 6,
        instructions: `
            <p>Lead the frog to the center of the pond using a combination of <code class="help">justify-content</code> and <code class="help">align-items</code>.</p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 2
        },
        board: {
            targets: redTarget(),
            ships: redShip()
        },
        solutionStyles: {
            "justify-content": "center",
            "align-items": "center"
        }
    },
    {
        id: 7,
        instructions: `
            <p>The frogs need to cross the pond again, this time for some lilypads with plenty of space around them. Use a combination of <code class="help">justify-content</code> and <code class="help">align-items</code>.</p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 2
        },
        board: {
            targets: redTarget() + greenTarget() + blueTarget(),
            ships: redShip() + greenShip() + blueShip()
        },
        solutionStyles: {
            "justify-content": "space-around",
            "align-items": "flex-end"
        }
    },
    {
        id: 8,
        instructions: `
            <p>The frogs need to get in the same order as their lilypads using <code class="help">flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 1
        },
        board: {
            targets: redTarget() + greenTarget() + blueTarget(),
            ships: redShip() + greenShip() + blueShip()
        },
        solutionStyles: {
            "flex-direction": "row-reverse"
        }
    },
    {
        id: 9,
        instructions: `
            <p>Help the frogs find their column of lilypads using <code class="help">flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 1
        },
        board: {
            targets: redTarget() + greenTarget() + blueTarget(),
            ships: redShip() + greenShip() + blueShip()
        },
        solutionStyles: {
            "flex-direction": "column"
        }
    },
    {
        id: 10,
        instructions: `
            <p>Help the frogs get to their own lilypads. Although they seem close, it will take both <code class="help">flex-direction</code> and <code class="help">justify-content</code> to get them there.</p><p>Notice that when you set the direction to a reversed row or column, start and end are also reversed.</p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 2
        },
        board: {
            targets: redTarget() + greenTarget() + blueTarget(),
            ships: redShip() + greenShip() + blueShip()
        },
        solutionStyles: {
            "flex-direction": "row-reverse",
            "justify-content": "flex-end"
        }
    },
    {
        id: 11,
        instructions: `
            <p>Help the frogs find their lilypads using <code class="help">flex-direction</code> and <code class="help">justify-content</code>.</p><p>Notice that when the flex direction is a column, <code class="help">justify-content</code> changes to the vertical and <code class="help">align-items</code> to the horizontal.</p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 2
        },
        board: {
            targets: redTarget() + greenTarget() + blueTarget(),
            ships: redShip() + greenShip() + blueShip()
        },
        solutionStyles: {
            "flex-direction": "column",
            "justify-content": "flex-end"
        }
    },
    {
        id: 12,
        instructions: `
            <p>Help the frogs find their lilypads using <code class="help">flex-direction</code> and <code class="help">justify-content</code>.</p><p>Notice that when the flex direction is a column, <code class="help">justify-content</code> changes to the vertical and <code class="help">align-items</code> to the horizontal.</p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 2
        },
        board: {
            targets: redTarget() + greenTarget() + blueTarget(),
            ships: redShip() + greenShip() + blueShip()
        },
        solutionStyles: {
            "flex-direction": "column-reverse",
            "justify-content": "space-between"
        }
    },
    {
        id: 13,
        instructions: `
            <p>Help the frogs find their lilypads using <code class="help">flex-direction</code> and <code class="help">justify-content</code>.</p><p>Notice that when the flex direction is a column, <code class="help">justify-content</code> changes to the vertical and <code class="help">align-items</code> to the horizontal.</p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 3
        },
        board: {
            targets: redTarget() + greenTarget() + blueTarget(),
            ships: redShip() + greenShip() + blueShip()
        },
        solutionStyles: {
            "flex-direction": "row-reverse",
            "justify-content": "center",
            "align-items": "flex-end"
        }
    },
    { //todo doesnt work 14 throught 17 doesnt work because of styles needed to be on .ship, not on .sea
        id: 14,
        instructions: `
            <p>Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the <code class="help">order</code> property to individual items. By default, items have a value of 0, but we can use this property to also set it to a positive or negative integer value (-2, -1, 0, 1, 2).</p><p>Use the <code class="help">order</code> property to reorder the frogs according to their lilypads.</p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;\n}\n\n.yellow {",
            codeAfter: "}",
            requiredLines: 1
        },
        board: {
            targets: redTarget() + greenTarget() + blueTarget(),
            ships: redShip() + greenShip() + blueShip()
        },
        solutionStyles: {
            "order": 1 //but for .red, not for .sea
        }
    },
    {
        id: 18,
        instructions: `
            <p>Oh no! The frogs are all squeezed onto a single row of lilypads. Spread them out using the <code class="help">flex-wrap</code> property, which accepts the following values:</p><ul><li><code>nowrap</code>: Every item is fit to a single line.</li><li><code>wrap</code>: Items wrap around to additional lines.</li><li><code>wrap-reverse</code>: Items wrap around to additional lines in reverse.</li></ul>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 1
        },
        board: {
            targets: redTarget() + greenTarget(5) + blueTarget(),
            ships: redShip() + greenShip(5) + blueShip()
        },
        solutionStyles: {
            "flex-wrap": "wrap"
        }
    },
    {
        id: 19,
        instructions: `
            <p>Help destroy this army of ships. Form three orderly columns using a combination of 
                <code class="help">flex-direction</code> and <code class="help">flex-wrap</code>.
            </p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 2
        },
        board: {
            targets: greenTarget(5) + redTarget(5) + blueTarget(5),
            ships: greenShip(5) + redShip(5) + blueShip(5)
        },
        solutionStyles: {
            "flex-direction": "column",
            "flex-wrap": "wrap"
        }
    },
    {
        id: 20,
        instructions: `
            <p>The two properties <code class="help">flex-direction</code> and <code class="help">flex-wrap</code> are used so often together that the shorthand property <code class="help">flex-flow</code> was created to combine them. This shorthand property accepts the value of the two properties separated by a space.</p><p>For example, you can use <code>flex-flow: row wrap</code> to set rows and wrap them.</p><p>Try using <code class="help">flex-flow</code> to repeat the previous level.</p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 2
        },
        board: {
            targets: greenTarget(5) + redTarget(5) + blueTarget(5),
            ships: greenShip(5) + redShip(5) + blueShip(5)
        },
        solutionStyles: {
            "flex-flow": "column wrap"
        }
    },
    { //todo doesn't work because it prerequires additional hardcoded styling.
        id: 21,
        instructions: `
            <p>DOESN'T WORK, SORRY. WIP</p><p>The two properties <code class="help">flex-direction</code> and <code class="help">flex-wrap</code> are used so often together that the shorthand property <code class="help">flex-flow</code> was created to combine them. This shorthand property accepts the value of the two properties separated by a space.</p><p>For example, you can use <code>flex-flow: row wrap</code> to set rows and wrap them.</p><p>Try using <code class="help">flex-flow</code> to repeat the previous level.</p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;\n\tflex-wrap: wrap;",
            codeAfter: "}",
            requiredLines: 1
        },
        board: {
            targets: redTarget(15),
            ships: redShip(15)
        },
        solutionStyles: {
            "align-content": "flex-start",
        }
    },
    { //todo doesn't work because it prerequires additional hardcoded styling.
        id: 22,
        instructions: `
            <p>DOESN'T WORK, SORRY. WIP</p><p>Now the current has bunched the lilypads at the bottom. Use <code class="help">align-content</code> to guide the frogs there.</p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;\n\tflex-wrap: wrap;",
            codeAfter: "}",
            requiredLines: 1
        },
        board: {
            targets: redTarget(15),
            ships: redShip(15)
        },
        solutionStyles: {
            "align-content": "flex-end",
        }
    },
    { //todo doesn't work because it prerequires additional hardcoded styling.
        id: 23,
        instructions: `
            <p>DOESN'T WORK, SORRY. WIP</p><p>The frogs have had a party, but it is time to go home. Use a combination of <code class="help">flex-direction</code> and <code class="help">align-content</code> to get them to their lilypads.</p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;\n\tflex-wrap: wrap;",
            codeAfter: "}",
            requiredLines: 2
        },
        board: {
            targets: (redTarget() + greenTarget(3) + blueTarget()).repeat(3),
            ships: (redShip() + redShip(3) + blueShip()).repeat(3)
        },
        solutionStyles: {
            "flex-direction": "column-reverse",
            "align-content": "center"
        }
    },
    {
        id: 24,
        instructions: `
            <p>Bring the frogs home one last time by using the CSS properties you've learned:</p><ul><li><code class="help">justify-content</code></li><li><code class="help">align-items</code></li><li><code class="help">flex-direction</code></li><li><code class="help">order</code></li><li><code class="help">align-self</code></li><li><code class="help">flex-wrap</code></li><li><code class="help">flex-flow</code></li><li><code class="help">align-content</code><img src="https://code.org/api/hour/finish_flexbox_froggy.png"></li></ul>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 4
        },
        board: {
            targets: redTarget() + greenTarget(4) + blueTarget(2),
            ships: redShip() + greenShip(4) + blueShip(2)
        },
        solutionStyles: {
            "flex-direction": "column-reverse",
            "flex-wrap": "wrap-reverse",
            "align-content": "space-between",
            "justify-content": "center"
        }
    }
]

export default levels;