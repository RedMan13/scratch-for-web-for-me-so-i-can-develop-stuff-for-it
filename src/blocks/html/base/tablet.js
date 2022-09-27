import Blockly from "blockly/core";

const blockName = "html_tablet";

const blockData = {
    "message0": "Add Table content %1 %2 ",
    "colour": "#218ceb",
    "args0": [
           
        {
            "type": "input_dummy",
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "The main block to add stuff to your website!"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `
<th>
${statements}
</th>
`;
    return code;
};