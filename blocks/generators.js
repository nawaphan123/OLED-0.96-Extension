Blockly.Python['oled_setup'] = function(block) {
  Blockly.Python.definitions_['import_oled'] = 'import ssd1306';

  var dropdown_size = block.getFieldValue('Size');
  var dropdown_address = block.getFieldValue('address');
  var value_scl = Blockly.Python.valueToCode(block, 'scl', Blockly.Python.ORDER_ATOMIC);
  var value_sca = Blockly.Python.valueToCode(block, 'sda', Blockly.Python.ORDER_ATOMIC);
  var code = `oled = ssd1306.SSD1306_I2C(128, ${+dropdown_size == 0 ? 64 : 32},${value_scl},${value_sca},${+dropdown_address == 0 ? 0x3c : 0x3d})\n`;
  return code;
};
Blockly.Python['oled_print'] = function(block) {
  Blockly.Python.definitions_['import_oled'] = 'import ssd1306';
  
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);

  var code = `oled.text(${value_text}, ${value_x}, ${value_y})\noled.show()\n`;
  return code;
};

Blockly.Python['oled_clearData'] = function(block) {
  var code = 'oled.fill(0)\noled.show()\n';
  return code;
};