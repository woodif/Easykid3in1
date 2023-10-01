module.exports = function (Blockly) {
  'use strict';
  // =============================================================================
  // EasyKid
  // =============================================================================

  // Blockly.Blocks['easykbbegin'] = {
  //   init: function() {
  //     this.appendDummyInput()
  //         .appendField("EasyKid: Setup")
  //         //.appendField(new Blockly.FieldTextInput("0x42"), "ADDS");
  //     this.setInputsInline(true);
  //     this.setPreviousStatement(true, null);
  //     this.setNextStatement(true, null);
  //     this.setColour(30);
  //  this.setTooltip("");
  //  this.setHelpUrl("");
  //   }
  // };

  Blockly.Blocks['easykb_setuppin'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("EasyKids: Setup Pin")
        .appendField(new Blockly.FieldDropdown([["D0", "D0"], ["D1", "D1"], ["D2", "D2"], ["D3", "D3"], ["D4", "D4"], ["D5", "D5"], ["D6", "D6"]]), "PINIO")
        .appendField(new Blockly.FieldDropdown([["INPUT", "INPUT"], ["OUTPUT", "OUTPUT"]]), "MODE");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(70);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['easykb_writeio'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Easykid3in1: digitalOut")
        .appendField(new Blockly.FieldDropdown([["D0", "D0"], ["D1", "D1"], ["D2", "D2"], ["D3", "D3"], ["D4", "D4"], ["D5", "D5"], ["D6", "D6"]]), "EasyKB WriteIOPIN")
      this.appendDummyInput()
        .appendField("to")
        .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"]]), "Logic");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(90);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['easykb_readio'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Easykid3in1: digitalIn")
        .appendField(new Blockly.FieldDropdown([["D0", "D0"], ["D1", "D1"], ["D2", "D2"], ["D3", "D3"], ["D4", "D4"], ["D5", "D5"], ["D6", "D6"]]), "PINReadIO");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(120);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['easykb_readpull'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Easykid3in1: digitalIn_Pullup")
        .appendField(new Blockly.FieldDropdown([["D0", "D0"], ["D1", "D1"], ["D2", "D2"], ["D3", "D3"], ["D4", "D4"], ["D5", "D5"], ["D6", "D6"]]), "PINReadIO");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(120);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['easykb_readadc'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Easykid3in1: analog")
        .appendField(new Blockly.FieldDropdown([["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6", "A6"]]), "PINADC");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(150);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['easykb_readsw'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Easykid3in1: Switch Start")
      //.appendField(new Blockly.FieldDropdown([["A0","26"], ["A1","13"], ["A2","14"], ["A3","15"],["A4","27"],["A5","32"],["A6","33"]]), "PINADC");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(100);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['easykb_sw'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Easykid3in1: waitForStart")
      //.appendField(new Blockly.FieldDropdown([["4","4"]]), "swpin");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(90);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['easykb_vr'] = {
    init: function () {
      this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("Easykid3in1: VR");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.appendDummyInput()
        .appendField("0-100%")
      this.setColour(70);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  // Blockly.Blocks['easykb_vr'] = {
  //   init: function () {
  //     this.appendDummyInput()
  //       .appendField("EasyKids:VR");
  //     this.appendValueInput("valueVr")
  //       .setCheck("Number")
  //     this.setInputsInline(true);
  //     this.setPreviousStatement(true, null);
  //     this.setNextStatement(true, null);
  //     this.setColour(70);
  //     this.setTooltip("");
  //     this.setHelpUrl("");
  //   }
  // };

  // Blockly.Blocks['easykb_readadcmv'] = {
  //   init: function() {
  //     this.appendDummyInput()
  //         .appendField("EasyKid: ReadADC(mV)")
  //         .appendField(new Blockly.FieldDropdown([["A0","A0"], ["A1","A1"], ["A2","A2"], ["A3","A3"], ["A4","A4"], ["A5","A5"], ["A6","A6"], ["A7","A7"], ["A8","A8"], ["A9","A9"]]), "PINADC");
  //     this.setInputsInline(true);
  //     this.setOutput(true, "Number");
  //     this.setColour(180);
  //  this.setTooltip("");
  //  this.setHelpUrl("");
  //   }
  // };

  // #############################  DC Motor  ##################################
  // Blockly.Blocks['easy_dc_init'] = {
  //   init: function () {
  //     this.appendDummyInput()
  //       .appendField("EasyKid: DC-Motor Setup");
  //     this.appendValueInput("ENA")
  //       .setCheck("Number")
  //       .setAlign(Blockly.ALIGN_RIGHT)
  //       .appendField("Timer ch :")
  //       .appendField(new Blockly.FieldDropdown([["pwm0", "0"], ["pwm1", "1"], ["pwm2", "2"], ["pwm3", "3"], ["pwm4", "4"], ["pwm5", "5"], ["pwm6", "6"]]), "TIMER_A")
  //       .appendField(": M1+");
  //     this.appendValueInput("ENB")
  //       .setCheck("Number")
  //       .setAlign(Blockly.ALIGN_RIGHT)
  //       .appendField("Timer ch :")
  //       .appendField(new Blockly.FieldDropdown([["pwm1", "1"], ["pwm0", "0"], ["pwm2", "2"], ["pwm3", "3"], ["pwm4", "4"], ["pwm5", "5"], ["pwm6", "6"]]), "TIMER_B")
  //       .appendField(": M1-");
  //       this.appendValueInput("ENC")
  //       .setCheck("Number")
  //       .setAlign(Blockly.ALIGN_RIGHT)
  //       .appendField("Timer ch :")
  //       .appendField(new Blockly.FieldDropdown([["pwm2", "2"], ["pwm0", "0"], ["pwm1", "1"], ["pwm3", "3"], ["pwm4", "4"], ["pwm5", "5"], ["pwm6", "6"]]), "TIMER_C")
  //       .appendField(": M2+");
  //     this.appendValueInput("END")
  //       .setCheck("Number")
  //       .setAlign(Blockly.ALIGN_RIGHT)
  //       .appendField("Timer ch :")
  //       .appendField(new Blockly.FieldDropdown([["pwm3", "3"], ["pwm0", "0"], ["pwm1", "1"], ["pwm2", "2"], ["pwm4", "4"], ["pwm5", "5"], ["pwm6", "6"]]), "TIMER_D")
  //       .appendField(": M2-");
  //     this.setInputsInline(false);
  //     this.setPreviousStatement(true, null);
  //     this.setNextStatement(true, null);
  //     this.setColour(210);
  //     this.setTooltip("");
  //     this.setHelpUrl("");
  //   }
  // };
  Blockly.Blocks['easy_motor'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("EasyKids3in1: Motor1");
      this.appendValueInput("SPEED1")
        .setCheck("Number")
      this.appendValueInput("SPEED2")
        .setCheck("Number")
        .appendField(":Motor2");
      this.appendValueInput("SPEED3")
        .setCheck("Number")
        .appendField(":Motor3");
      this.appendValueInput("SPEED4")
        .setCheck("Number")
        .appendField(":Motor4");
      this.appendDummyInput()
        .appendField("% [ -100 to 100 ]")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(190);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  // Blockly.Blocks['easy_motor_backward'] = {
  //   init: function () {
  //     this.appendDummyInput()
  //       .appendField("EasyKids:Motor1 Backward Speed");
  //     this.appendValueInput("SPEED1")
  //       .setCheck("Number")
  //     this.appendDummyInput()
  //       .appendField("% [ 0-100 ]")
  //     this.appendDummyInput()
  //       .appendField(" :Motor2 Backward Speed");
  //     this.appendValueInput("SPEED2")
  //       .setCheck("Number")
  //     this.appendDummyInput()
  //       .appendField("% [ 0-100 ]")
  //     this.setInputsInline(true);
  //     this.setPreviousStatement(true, null);
  //     this.setNextStatement(true, null);
  //     this.setColour(240);
  //     this.setTooltip("");
  //     this.setHelpUrl("");
  //   }
  // };

  Blockly.Blocks['easy_dc_one'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("EasyKids3in1: Motor1 speed");
      this.appendValueInput("SPEED")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField("% [ -100 to 100 ]")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(190);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['easy_dc_two'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("EasyKids3in1: Motor2 speed");
      this.appendValueInput("SPEED")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField("% [ -100 to 100 ]")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(190);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['easy_dc_three'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("EasyKids3in1: Motor3 speed");
      this.appendValueInput("SPEED")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField("% [ -100 to 100 ]")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(190);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['easy_dc_four'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("EasyKids3in1: Motor4 speed");
      this.appendValueInput("SPEED")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField("% [ -100 to 100 ]")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(190);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['easykb_spinleft'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("EasyKids3in1:Motor SpinLeft Speed");
      this.appendValueInput("SPEED")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField("% [ 0 to 100 ]")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(320);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['easykb_spinright'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("EasyKids3in1:Motor SpinRight Speed");
      this.appendValueInput("SPEED")
        .setCheck("Number")
      this.appendDummyInput()
        .appendField("% [ 0 to 100 ]")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(320);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  // Blockly.Blocks['easy_dc_free'] = {
  //   init: function () {
  //     this.appendDummyInput()
  //       .appendField("EasyKids: DC-Motor Free");
  //     this.setInputsInline(true);
  //     this.setPreviousStatement(true, null);
  //     this.setNextStatement(true, null);
  //     this.setColour(210);
  //     this.setTooltip("");
  //     this.setHelpUrl("");
  //   }
  // };

  Blockly.Blocks['easykb_pwm_write'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("EasyKids3in1: PWM write pin")
        .appendField(new Blockly.FieldDropdown([["D0", "D0"], ["D1", "D1"], ["D2", "D2"], ["D3", "D3"], ["D4", "D4"], ["D5", "D5"], ["D6", "D6"]]), "pin");
      this.appendValueInput("value")
        .setCheck("Number")
        .appendField("value");
      this.appendDummyInput()
        .appendField("% [ 0-100 ]")
        .appendField("(timer ")
        .appendField(new Blockly.FieldNumber(0, 0, 7), "timer")
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(225);
      this.setTooltip("write PWM to pin (value 0-255) at 5KHz");
      this.setHelpUrl("https://en.wikipedia.org/wiki/Pulse-width_modulation");
    }
  };



  Blockly.Blocks['easymotorstopall'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("EasyKids3in1: Motor Stop All")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(300);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  // Blockly.Blocks['easykb_servowritem'] = {
  //   init: function() {
  //     this.appendDummyInput()
  //         .appendField("EasyKid: Servo Motor")
  //         .appendField(new Blockly.FieldDropdown([["Servo1","Servo1"], ["Servo2","Servo2"], ["Servo3","Servo3"]]), "PINServo");
  //         this.appendDummyInput()
  //         .appendField("Degree");
  //         this.appendValueInput("EasyKid ServowriteMvalue")
  //         .setCheck(null);
  //         this.appendDummyInput()
  //         .appendField("[ 0-180 ]");
  //     this.setInputsInline(true);
  //     this.setPreviousStatement(true, null);
  //     this.setNextStatement(true, null);
  //     this.setColour(330);
  //  this.setTooltip("");
  //  this.setHelpUrl("");
  //   }
  // };
  // }

  Blockly.Blocks['easykb_servo'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("EasyKids3in1: Servo Motor Pin")
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"]]), "pin");
      this.appendValueInput("value")
        .setCheck("Number")
        .appendField("value");
      this.appendDummyInput()
        .appendField("[ 0-180 Degree]")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(360);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['easykb_servo_speed'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("EasyKids3in1: Servo Motor Pin")
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"]]), "pin");
      this.appendValueInput("value")
        .setCheck("Number")
        .appendField("Speed");
        this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("[0-100%]  Angle");
      this.appendDummyInput()
        .appendField("[ 0-180 Degree]")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(360);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

}