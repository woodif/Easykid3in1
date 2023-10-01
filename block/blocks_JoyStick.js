module.exports = function (Blockly) {
  'use strict';
  // =============================================================================
  // EasyKidsRobotics
  // =============================================================================

  Blockly.Blocks['Robot_Setup'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Easykid3in1: Show MAC Address on LCD")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(100);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['Read_Mac_Address'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Easykid3in1: Read MAC Address")
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(100);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['setup_data'] = {
    init: function () {
      this.jsonInit({
        "message0": "Easykid3in1: Setup %1",
        "args0": [{
          "type": "field_input",
          "name": "mac",
          "text": "FF:FF:FF:FF:FF:FF"
        }],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 200,
        "tooltip": "Send data to once KidBright32 via ESP-NOW",
        "helpUrl": "https://store.kidbright.info/"
      });
    }
  };

  Blockly.Blocks['Read_data'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Easykid3in1: Read Data")
        .appendField(new Blockly.FieldDropdown([["Cross", "JoyCross"], ["Square", "JoySquare"], ["Triangle", "JoyTriangle"], ["Circle", "JoyCircle"], ["Up", "JoyUp"], ["Down", "JoyDown"], ["Right", "JoyRight"], ["Left", "Joyleft"], ["L1", "JoyL1"], ["L2", "JoyL2"], ["R1", "JoyR1"], ["R2", "JoyR2"], ["Select", "JoySelect"], ["Start", "JoyStart"], ["PS", "JoyPS"], ["LX", "JoyLX"], ["LY", "JoyLY"], ["RX", "JoyRX"], ["RY", "JoyRY"]]), "readdata");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(200);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

}