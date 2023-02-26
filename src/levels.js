const repeat = (color, number = 1) => Array(number).fill(color)
const repeatArray = (number, arr) => Array(number).fill(arr).flat();

const red = (number = 1) => repeat("red", number)
const green = (number = 1) => repeat("green", number)
const blue = (number = 1) => repeat("blue", number)

const flat = (...arrays) => arrays.flat();


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
        board: red(),
        styles: {
            ships: {"justify-content": "flex-end"},
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
        board: flat(red(), green()),
        styles: {
            ships: {"justify-content": "center"},
        }
    },
    {
        id: 3,
        instructions: `
            <p>Help all three targets aim their ships just by using <code class="help">justify-content</code>. 
                This time, the ships have lots of space all around them.
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
        board: flat(red(), green(), blue()),
        styles: {
            ships: {"justify-content": "space-around"},
        }
    },
    {
        id: 4,
        instructions: `
            <p>Now the ships on the edges have drifted to the shore, increasing the space between them. 
                Use <code class="help">justify-content</code>. This time, the ships have equal spacing between them.
            </p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 1
        },
        board: flat(red(), green(), blue()),
        styles: {
            ships: {"justify-content": "space-between"},
        }
    },
    {
        id: 5,
        instructions: `
            <p>Now use <code class="help">align-items</code> to help the targets aim at the bottom of the sea. This CSS property aligns items vertically and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the top of the container.</li><li><code>flex-end</code>: Items align to the bottom of the container.</li><li><code>center</code>: Items align at the vertical center of the container.</li><li><code>baseline</code>: Items display at the baseline of the container.</li><li><code>stretch</code>: Items are stretched to fit the container.</li></ul>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 1
        },
        board: flat(red(), green(), blue()),
        styles: {
            ships: {"align-items": "flex-end"},
        }
    },
    {
        id: 6,
        instructions: `
            <p>Lead the target to the center of the sea using a combination of <code class="help">justify-content</code> and <code class="help">align-items</code>.</p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 2
        },
        board: red(),
        styles: {
            ships: {
                "justify-content": "center",
                "align-items": "center"
            },
        }
    },
    {
        id: 7,
        instructions: `
            <p>The targets need to cross the sea again, this time for some ships with plenty of space around them. Use a combination of <code class="help">justify-content</code> and <code class="help">align-items</code>.</p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 2
        },
        board: flat(red(), green(), blue()),
        styles: {
            ships: {
                "justify-content": "space-around",
                "align-items": "flex-end"
            }
        }
    },
    {
        id: 8,
        instructions: `
            <p>The targets need to get in the same order as their ships using <code class="help">flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 1
        },
        board: flat(red(), green(), blue()),
        styles: {
            ships: {
                "flex-direction": "row-reverse"
            }
        }
    },
    {
        id: 9,
        instructions: `
            <p>Help the targets find their column of ships using <code class="help">flex-direction</code>. This CSS property defines the direction items are placed in the container, and accepts the following values:</p><ul><li><code>row</code>: Items are placed the same as the text direction.</li><li><code>row-reverse</code>: Items are placed opposite to the text direction.</li><li><code>column</code>: Items are placed top to bottom.</li><li><code>column-reverse</code>: Items are placed bottom to top.</li></ul>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 1
        },
        board: flat(red(), green(), blue()),
        styles: {
            ships: {
                "flex-direction": "column"
            }
        }
    },
    {
        id: 10,
        instructions: `
            <p>Help the ships get to their own ships. Although they seem close, it will take both <code class="help">flex-direction</code> and <code class="help">justify-content</code> to get them there.</p><p>Notice that when you set the direction to a reversed row or column, start and end are also reversed.</p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 2
        },
        board: flat(red(), green(), blue()),
        styles: {
            ships: {
                "flex-direction": "row-reverse",
                "justify-content": "flex-end"
            }
        }
    },
    {
        id: 11,
        instructions: `
            <p>Help the ships find their ships using <code class="help">flex-direction</code> and <code class="help">justify-content</code>.</p><p>Notice that when the flex direction is a column, <code class="help">justify-content</code> changes to the vertical and <code class="help">align-items</code> to the horizontal.</p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 2
        },
        board: flat(red(), green(), blue()),
        styles: {
            ships: {
                "flex-direction": "column",
                "justify-content": "flex-end"
            }
        }
    },
    {
        id: 12,
        instructions: `
            <p>Help the targets find their ships using <code class="help">flex-direction</code> and <code class="help">justify-content</code>.</p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 2
        },
        board: flat(red(), green(), blue()),
        styles: {
            ships: {
                "flex-direction": "column-reverse",
                "justify-content": "space-between"
            }
        }
    },
    {
        id: 13,
        instructions: `
            <p>Help the targets find their ships using <code class="help">flex-direction</code>, <code class="help">justify-content</code>, and <code class="help">align-items</code>.</p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 3
        },
        board: flat(red(), green(), blue()),
        styles: {
            ships: {
                "flex-direction": "row-reverse",
                "justify-content": "center",
                "align-items": "flex-end"
            }
        }
    },
    {
        id: 14,
        instructions: `
            <p>Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the <code class="help">order</code> property to individual items. By default, items have a value of 0, but we can use this property to also set it to a positive or negative integer value (-2, -1, 0, 1, 2).</p><p>Use the <code class="help">order</code> property to reorder the ships according to their ships.</p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;\n}\n\n.red {",
            codeAfter: "}",
            requiredLines: 1
        },
        board: flat(green(), red(), blue()),
        styles: {
            ships_red: {"order": 1}
        },
        toEdit: "red"
    },
    {
        id: 15,
        instructions: `
            <p>Use the <code class="help">order</code> property to send the red target to his red ship.</p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;\n}\n\n.red {",
            codeAfter: "}",
            requiredLines: 1
        },
        board: flat(green(3), red(), green()),
        styles: {
            ships_red: {"order": -1}
        },
        toEdit: "red"
    },
    {
        id: 16,
        instructions: `
            <p>Another property you can apply to individual items is <code class="help">align-self</code>. This property accepts the same values as <code class="help">align-items</code> and its value for the specific item.</p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;\n}\n\n.red {",
            codeAfter: "}",
            requiredLines: 1
        },
        board: flat(green(2), red(), green(2)),
        styles: {
            ships_red: {"align-self": "flex-end"}
        },
        toEdit: "red"
    },
    {
        id: 17,
        instructions: `
            <p>Combine <code class="help">order</code> with <code class="help">align-self</code> to help the ships to their destinations.</p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;\n}\n\n.red {",
            codeAfter: "}",
            requiredLines: 2
        },
        board: flat(red(), green(), red(), green(2)),
        styles: {
            ships_red: {
                "order": 1,
                "align-self": "flex-end"
            }
        },
        toEdit: "red"
    },
    {
        id: 18,
        instructions: `
            <p>Oh no! The ships are all squeezed onto a single row of ships. Spread them out using the <code class="help">flex-wrap</code> property, which accepts the following values:</p><ul><li><code>nowrap</code>: Every item is fit to a single line.</li><li><code>wrap</code>: Items wrap around to additional lines.</li><li><code>wrap-reverse</code>: Items wrap around to additional lines in reverse.</li></ul>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 1
        },
        board: flat(red(), green(5), blue()),
        styles: {
            ships: {
                "flex-wrap": "wrap"
            }
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
        board: flat(red(5), green(5), blue(5)),
        styles: {
            ships: {
                "flex-direction": "column",
                "flex-wrap": "wrap"
            }
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
            requiredLines: 1
        },
        board: flat(red(5), green(5), blue(5)),
        styles: {
            ships: {
                "flex-flow": "column wrap"
            }
        }
    },
    {
        id: 21,
        instructions: `
            <p>The targets are spread all over the sea, but the ships are bunched at the top. You can use <code class="help">align-content</code> to set how multiple lines are spaced apart from each other. This property takes the following values:</p><ul><li><code>flex-start</code>: Lines are packed at the top of the container.</li><li><code>flex-end</code>: Lines are packed at the bottom of the container.</li><li><code>center</code>: Lines are packed at the vertical center of the container.</li><li><code>space-between</code>: Lines display with equal spacing between them.</li><li><code>space-around</code>: Lines display with equal spacing around them.</li><li><code>stretch</code>: Lines are stretched to fit the container.</li></ul><p>This can be confusing, but <code class="help">align-content</code> determines the spacing between lines, while <code class="help">align-items</code> determines how the items as a whole are aligned within the container. When there is only one line, <code class="help">align-content</code> has no effect.</p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;\n\tflex-wrap: wrap;",
            codeAfter: "}",
            requiredLines: 1
        },
        board: red(15),
        styles: {
            targets: {
                "flex-wrap": "wrap",
            },
            ships: {
                "flex-wrap": "wrap",
                "align-content": "flex-start"
            }
        }
    },
    {
        id: 22,
        instructions: `
            <p>Now the current has bunched the ships at the bottom. Use <code class="help">align-content</code> to guide the ships there.</p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;\n\tflex-wrap: wrap;",
            codeAfter: "}",
            requiredLines: 1
        },
        board: red(15),
        styles: {
            targets: {
                "flex-wrap": "wrap",
            },
            ships: {
                "flex-wrap": "wrap",
                "align-content": "flex-end"
            }
        }
    },
    {
        id: 23,
        instructions: `
            <p>The ships have had a party, but it is time to go home. Use a combination of <code class="help">flex-direction</code> and <code class="help">align-content</code> to get them to their ships.</p>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;\n\tflex-wrap: wrap;",
            codeAfter: "}",
            requiredLines: 2
        },
        board: repeatArray(3, flat(red(), green(3), blue())),
        styles: {
            targets: {
                "flex-wrap": "wrap",
            },
            ships: {
                "flex-wrap": "wrap",
                "flex-direction": "column-reverse",
                "align-content": "center"
            }
        }
    },
    {
        id: 24,
        instructions: `
            <p>Target the battleships one last time by using the CSS properties you've learned:</p><ul><li><code class="help">justify-content</code></li><li><code class="help">align-items</code></li><li><code class="help">flex-direction</code></li><li><code class="help">order</code></li><li><code class="help">align-self</code></li><li><code class="help">flex-wrap</code></li><li><code class="help">flex-flow</code></li><li><code class="help">align-content</code></li></ul>
        `,
        editor: {
            codeBefore: "#sea {\n\tdisplay: flex;",
            codeAfter: "}",
            requiredLines: 4
        },
        board: flat(red(), green(4), blue(2)),
        styles: {
            ships: {
                "flex-direction": "column-reverse",
                "flex-wrap": "wrap-reverse",
                "align-content": "space-between",
                "justify-content": "center"
            }
        }
    }
]

export default levels;