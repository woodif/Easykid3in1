module.exports = function(Blockly){
  
  // =============================================================================
  // EasyKidsRobotics
  // =============================================================================


  Blockly.JavaScript['Robot_Setup'] = function(block) {
    //var dropdown_sw = block.getFieldValue('swpin');
    // TODO: Assemble JavaScript into code variable.
    var code = `
    #SETUP
    joyStick_begin();
    #END
    
    showAddressLcd();

    `;
    // TODO: Change ORDER_NONE to the correct strength.
    //return [code, Blockly.JavaScript.ORDER_NONE];
    return code;
  };
  Blockly.JavaScript['Read_Mac_Address'] = function(block) {
    //var dropdown_pinreadio = block.getFieldValue('PINReadIO');
    // TODO: Assemble JavaScript into code variable.
    var code = `
    #SETUP
    joyStick_begin();
    #END
    
    joy.getAddress()
    
    
    
    
    `;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code];
  };

  Blockly.JavaScript['setup_data'] = function(block) {
    var text_mac = block.getFieldValue('mac');
    var code = '#SETUP joyStick_begin(); #END joy.begin("' + text_mac + '");\n';
    
    return code;
  };

  Blockly.JavaScript['Read_data'] = function(block) {
    var dropdown_data = block.getFieldValue('readdata');
    // TODO: Assemble JavaScript into code variable.
    var code = `${dropdown_data}()`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };


}