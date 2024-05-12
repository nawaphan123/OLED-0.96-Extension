Blockly.defineBlocksWithJsonArray([
  {
    "type": "oled_setup",
    "message0": "OLED Size%1 Address%2 SCL%3 SDA%4 |",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "Size",
        "options": [
          [
            "128x64",
            "0"
          ],
          [
            "128x32",
            "1"
          ]
        ],
      },
      {
        "type": "field_dropdown",
        "name": "address",
        "options": [
          [
            "0x3c",
            "0"
          ],
          [
            "0x3d",
            "1"
          ]
        ],
      },
      {
        "type": "input_value",
        "name": "scl",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "sda",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#4ca9e6",
    "tooltip": "Setup OLED 0.96 ",
    "helpUrl": ""
  },
  {
    "type": "oled_print",
    "message0": "OLED Print %1 At X: %2 | Y: %3 |",
    "args0": [
      {
        "type": "input_value",
        "name": "text"
      },
      {
        "type": "input_value",
        "name": "x",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#4ca9e6",
    "tooltip": "Draw text on OLED",
    "helpUrl": ""
  },
  {
    "type": "oled_clearData",
    "message0": "OLED Clear",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#4ca9e6",
    "tooltip": "clear screen",
    "helpUrl": ""
  }
]);
