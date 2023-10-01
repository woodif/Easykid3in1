module.exports = function (Blockly) {

  // =============================================================================
  // EasyKidsRobotics
  // =============================================================================

  // Blockly.JavaScript['easykbbegin'] = function(block) {
  //   var text_adds = block.getFieldValue('ADDS');
  //   // TODO: Assemble JavaScript into code variable.
  //   var code =
  //       `
  // #EXTINC#include <Wire.h>#END
  // #EXTINC#include <EasyKB.h>#END

  // #VARIABLE
  // EasyKB KB1;
  // #END
  // KB1.begin(0x42);
  // \n
  // `;
  //   return code;
  // };

  Blockly.JavaScript['easykb_setuppin'] = function (block) {
    var dropdown_pinio = block.getFieldValue('PINIO');
    var dropdown_mode = block.getFieldValue('MODE');
    // TODO: Assemble JavaScript into code variable.
    var code = `pinMode(${dropdown_pinio},${dropdown_mode});\n`;
    return code;
  };

  Blockly.JavaScript['easykb_writeio'] = function (block) {
    var dropdown_easykb_writeiopin = block.getFieldValue('EasyKB WriteIOPIN');
    var dropdown_logic = block.getFieldValue('Logic');
    // TODO: Assemble JavaScript into code variable.
    var code = `digitalOut(${dropdown_easykb_writeiopin},${dropdown_logic});\n`;
    return code;
  };

  Blockly.JavaScript['easykb_readadc'] = function (block) {
    var dropdown_pinadc = block.getFieldValue('PINADC');
    // TODO: Assemble JavaScript into code variable.
    var code = `analog(${dropdown_pinadc})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  // Blockly.JavaScript['easykb_readadcmv'] = function(block) {
  //   var dropdown_pinadc = block.getFieldValue('PINADC');
  //   // TODO: Assemble JavaScript into code variable.
  //   var code = `KB1.ReadadcmV(${dropdown_pinadc})`;
  //   // TODO: Change ORDER_NONE to the correct strength.
  //   return [code, Blockly.JavaScript.ORDER_NONE];
  // };

  Blockly.JavaScript['easykb_readio'] = function (block) {
    var dropdown_pinreadio = block.getFieldValue('PINReadIO');
    // TODO: Assemble JavaScript into code variable.
    var code = `digitalIn(${dropdown_pinreadio})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['easykb_readpull'] = function (block) {
    var dropdown_pinreadio = block.getFieldValue('PINReadIO');
    // TODO: Assemble JavaScript into code variable.
    var code = `digitalIn_Pullup(${dropdown_pinreadio})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  Blockly.JavaScript['easykb_readsw'] = function (block) {
    //var dropdown_pinreadio = block.getFieldValue('PINReadIO');
    // TODO: Assemble JavaScript into code variable.
    var code = `sw_Start()`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  Blockly.JavaScript['easykb_sw'] = function (block) {
    //var dropdown_sw = block.getFieldValue('swpin');
    // TODO: Assemble JavaScript into code variable.
    var code = `waitForStart();`;
    // TODO: Change ORDER_NONE to the correct strength.
    //return [code, Blockly.JavaScript.ORDER_NONE];
    return code;
  };

  Blockly.JavaScript['easykb_vr'] = function (block) {
    var value_pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `vr(${value_pin})`
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['easykb_pwm_write'] = function (block) {
    var value_pin = block.getFieldValue('pin');
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    var number_timer = block.getFieldValue('timer');
    var code = `
    #SETUP  ledcSetup(${number_timer}, 5000, 8);#END
    #SETUP  ledcAttachPin(${value_pin}, ${number_timer});#END

    int val = ${value_value};
    val = map(val, 0, 100, 0, 255);
    ledcWrite(${number_timer}, val);
  `;
    return code;
  };

  // #############################  DC Motor  ##################################
  //   Blockly.JavaScript['easy_dc_init'] = function (block) {

  //     var code =
  //       `
  // #VARIABLE
  // #define _EN_A  16
  // #define _EN_B  17
  // #define _EN_C  18
  // #define _EN_D  19
  // #define _MotorA_ch  5
  // #define _MotorB_ch  6
  // #define _MotorC_ch  7
  // #define _MotorD_ch  8
  // int m1 = 0;
  // int m2 = 0;
  // int m3 = 0;
  // int m4 = 0;
  // #END

  // ledcSetup(_MotorA_ch, 5000, 8);
  // ledcAttachPin(_EN_A, _MotorA_ch);
  // ledcSetup(_MotorB_ch, 5000, 8);
  // ledcAttachPin(_EN_B, _MotorB_ch);
  // ledcSetup(_MotorC_ch, 5000, 8);
  // ledcAttachPin(_EN_C, _MotorC_ch);
  // ledcSetup(_MotorD_ch, 5000, 8);
  // ledcAttachPin(_EN_D, _MotorD_ch);\n`;
  //     return code;
  //   };
  Blockly.JavaScript['easy_motor'] = function (block) {
    var number_speed1 = Blockly.JavaScript.valueToCode(block, 'SPEED1', Blockly.JavaScript.ORDER_ATOMIC);
    var number_speed2 = Blockly.JavaScript.valueToCode(block, 'SPEED2', Blockly.JavaScript.ORDER_ATOMIC);
    var number_speed3 = Blockly.JavaScript.valueToCode(block, 'SPEED3', Blockly.JavaScript.ORDER_ATOMIC);
    var number_speed4 = Blockly.JavaScript.valueToCode(block, 'SPEED4', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
    motor(1,${number_speed1});
    motor(2,${number_speed2});
    motor(3,${number_speed3});
    motor(4,${number_speed4});
      
    `;
    return code;
  };

  // Blockly.JavaScript['easy_motor_backward'] = function (block) {
  //   var number_speed1 = Blockly.JavaScript.valueToCode(block, 'SPEED1', Blockly.JavaScript.ORDER_ATOMIC);
  //   var number_speed2 = Blockly.JavaScript.valueToCode(block, 'SPEED2', Blockly.JavaScript.ORDER_ATOMIC);
  //   var code = `
  //       m1 = ${number_speed1};
  //       m1 = map(m1, 0, 100, 0, 255);
  //       ledcWrite(_MotorA_ch, m1);
  //       ledcWrite(_MotorB_ch, 0);;
  //       m2 = ${number_speed2};
  //       m2 = map(m2, 0, 100, 0, 255);
  //       ledcWrite(_MotorC_ch, m2);
  //       ledcWrite(_MotorD_ch, 0);\n`;
  //   return code;
  //   };

  Blockly.JavaScript['easy_dc_one'] = function (block) {
    var number_speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
    motor(1,${number_speed});
    `;
    return code;
  };

  Blockly.JavaScript['easy_dc_two'] = function (block) {
    var number_speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
    motor(2,${number_speed});
    `;
    return code;
  };

  Blockly.JavaScript['easy_dc_three'] = function (block) {
    var number_speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
    motor(3,${number_speed});
    `;
    return code;
  };

  Blockly.JavaScript['easy_dc_four'] = function (block) {
    var number_speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
    motor(4,${number_speed});
    `;
    return code;
  };

  Blockly.JavaScript['easykb_spinleft'] = function (block) {
    var number_speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `
    motor(1,${number_speed});//+
    motor(2,-${number_speed});//-
    motor(3,${number_speed});//+
    motor(4,-${number_speed});//-

    `;
    return code;
  };

  Blockly.JavaScript['easykb_spinright'] = function (block) {
    var number_speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `
    motor(1,-${number_speed});//-
    motor(2,${number_speed});//+
    motor(3,-${number_speed});//-
    motor(4,${number_speed});//+

    `;
    return code;
  };

  //   Blockly.JavaScript['easy_dc_free'] = function (block) {
  //     var code = `
  // ledcWrite(_MotorA_ch, 0);
  // ledcWrite(_MotorB_ch, 0);
  // ledcWrite(_MotorC_ch, 0);
  // ledcWrite(_MotorD_ch, 0);\n`;
  //     return code;
  //   };

  // Blockly.JavaScript['easykb_extmotor'] = function(block) {
  //   var value_easykb_extmotor = block.getFieldValue('EasyKB extMotorNumber');
  //   var value_easykb_extmotor1dir = block.getFieldValue('EasyKB extMotorDIR');
  //   var value_easykb_extmotor1speed = Blockly.JavaScript.valueToCode(block, 'EasyKB extMotorSPEED', Blockly.JavaScript.ORDER_ATOMIC);
  //   // TODO: Assemble JavaScript into code variable.
  //   var code = `KB1.Motor${value_easykb_extmotor}(${value_easykb_extmotor1dir},${value_easykb_extmotor1speed});\n`;
  //   return code;
  // };


  Blockly.JavaScript['easymotorstopall'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = `
    motorStopAll();\n`;
    return code;
  };

  // Blockly.JavaScript['easykb_servowritem'] = function(block) {
  //   var dropdown_pinservo = block.getFieldValue('PINServo');
  //   var value_easykb_servowritemvalue = Blockly.JavaScript.valueToCode(block, 'EasyKB ServowriteMvalue', Blockly.JavaScript.ORDER_ATOMIC);
  //   // TODO: Assemble JavaScript into code variable.
  //   var code = `KB1.ServowriteM(${dropdown_pinservo},${value_easykb_servowritemvalue});\n`;
  //   return code;
  // };
  // }

  // Blockly.JavaScript['easykb_servowritem'] = function(block) {
  //   var dropdown_pinservo = block.getFieldValue('PINServo');
  //   var value_easykb_servowritemvalue = Blockly.JavaScript.valueToCode(block, 'EasyKB ServowriteMvalue', Blockly.JavaScript.ORDER_ATOMIC);
  //   // TODO: Assemble JavaScript into code variable.
  //   var code = `KB1.ServowriteM(${dropdown_pinservo},${value_easykb_servowritemvalue});\n`;
  //   return code;
  // };
  // }


  Blockly.JavaScript['easykb_servo'] = function (block) {
    var dropdown_pinservo = block.getFieldValue('pin');
    var value_servo = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
  servo(${dropdown_pinservo},${value_servo});
  
  `;
    return code;
  };

  Blockly.JavaScript['easykb_servo_speed'] = function (block) {
    var dropdown_pinservo = block.getFieldValue('pin');
    var value_servo = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
    var value_speed = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
  servoSpeed(${dropdown_pinservo}, ${value_speed},${value_servo});
  `;
    return code;
  };

}