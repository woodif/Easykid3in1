module.exports = function (Blockly) {
  'use strict';

  // =============================================================================
  // neopixel
  // =============================================================================

  Blockly.Blocks['rgb_clear'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("EasyKids3in1: RGB")
        .appendField(new Blockly.FieldDropdown([["Board", "rgb"], ["Car", "rgbCar"]]), "PINADC");
      this.appendDummyInput()
        .appendField("Clear")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['rgb_setBrightness'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("EasyKids3in1: RGB")
        .appendField(new Blockly.FieldDropdown([["Board", "rgb"], ["Car", "rgbCar"]]), "instance");
      this.appendValueInput("BRIGHT")
        .appendField("setBrightness (0-255)")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["rgb_setPixelColor"] = {
    init: function () {
      this.appendValueInput("NUM")
        .appendField("EasyKids3in1: RGB")
        .appendField(new Blockly.FieldDropdown([["Board", "rgb"], ["Car", "rgbCar"]]), "instance")
        .setCheck("Number")
        .appendField("set Pixel");
      this.appendDummyInput()
        .appendField("set Color")
        .appendField(new Blockly.FieldColour("#FFFFFF"), "COLOR");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["rgb_setPixelvar"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("EasyKids3in1: RGB")
        .appendField(new Blockly.FieldDropdown([["Board", "rgb"], ["Car", "rgbCar"]]), "instance")
        .appendField("ColorShow");
      this.appendValueInput("NUM")
        .setCheck("Number")
        .appendField("set Pixel");
      this.appendValueInput("red")
        .setCheck("Number")
        .appendField("RED");
      this.appendValueInput("green")
        .setCheck("Number")
        .appendField("Green");
      this.appendValueInput("blue")
        .setCheck("Number")
        .appendField("Blue");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(30);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["neopixel_rgb_fillLED"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("EasyKids3in1: RGB")
        .appendField(new Blockly.FieldDropdown([["Board", "rgb"], ["Car", "rgbCar"]]), "instance")
        .appendField("fill all LED color")
        .appendField(new Blockly.FieldColour("#FFFFFF"), "COLOR");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["neopixel_rgb_colorWipe"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("EasyKids3in1: RGB")
        .appendField(new Blockly.FieldDropdown([["Board", "rgb"], ["Car", "rgbCar"]]), "instance")
        .appendField("colorWipe")
        .appendField(new Blockly.FieldColour("#FFFFFF"), "COLOR");
      this.appendValueInput("TIME")
        .setCheck("Number")
        .appendField("Time(ms)");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["neopixel_rgb_theaterChase"] = {
    init: function () {
      this.appendDummyInput()
      .appendField("EasyKids3in1: RGB")
      .appendField(new Blockly.FieldDropdown([["Board", "rgb"], ["Car", "rgbCar"]]), "instance")
        .appendField("theaterChase")
        .appendField(new Blockly.FieldColour("#FFFFFF"), "COLOR");
      this.appendValueInput("TIME")
        .setCheck("Number")
        .appendField("Time(ms)");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["neopixel_rgb_rainbow_begin"] = {
    init: function () {
      this.appendDummyInput()
      .appendField("EasyKids3in1: RGB")
      .appendField(new Blockly.FieldDropdown([["Board", "rgb"], ["Car", "rgbCar"]]), "instance")
        .appendField("rainbow Begin");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["neopixel_rgb_rainbow"] = {
    init: function () {
      this.appendValueInput("TIME")
        .setCheck("Number")
        .appendField("EasyKids3in1: RGB")
        .appendField(new Blockly.FieldDropdown([["Board", "rgb"], ["Car", "rgbCar"]]), "instance")
        .appendField("rainbow Time(ms)");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["neopixel_rgb_rainbowCycle"] = {
    init: function () {
      this.appendValueInput("TIME")
        .setCheck("Number")
        .appendField("EasyKids3in1: RGB")
        .appendField(new Blockly.FieldDropdown([["Board", "rgb"], ["Car", "rgbCar"]]), "instance")
        .appendField("rainbowCycle Time(ms)");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
}