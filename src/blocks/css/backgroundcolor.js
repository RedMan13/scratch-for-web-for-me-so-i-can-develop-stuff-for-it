import Blockly from "blockly/core";

const blockName = "html_backgroundcolor";

const blockData = {
    "message0": "CSS Background Color %1 %2",
    "colour": "#218ceb",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_value",
            "name": "color",
            "check": ["String", "color"]
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Set background color of webpage"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const color = Blockly.JavaScript.valueToCode(block, "color", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `
background-color:${color};
`;
    return code;
};