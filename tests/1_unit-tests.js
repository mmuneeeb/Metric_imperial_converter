const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  suite('Verification Checks', function(){
    //#1 whole number
    test("Whole number input", function(done){
      let input = "2K";
      assert.equal(convertHandler.getNum(input), "2");
      done();
    });

    //#2 Decimal number
    test("Decimal number input", function(done){
      let input = "2.5L";
      assert.equal(convertHandler.getNum(input), 2.5);
      done();
    });

    //#3 Fraction
    test("Fraction", function(done){
      let input = "1/4K";
      assert.equal(convertHandler.getNum(input), 1/4);
      done();
    });
    
    //#4 Fraction with a decimal
    test("Fraction with a decimal", function(done){
      let input = "2.5/4K";
      assert.equal(convertHandler.getNum(input), 2.5/4);
      done();
    });
    
    //#5 Error double fraction
    test("Error double fraction", function(done){
      let input = "1/4/4K";
      assert.equal(convertHandler.getNum(input), undefined);
      done();
    });
    
    //#6 Default input 1
    test("Default input 1", function(done){
      let input = "K";
      assert.equal(convertHandler.getNum(input), 1);
      done();
    });
    
    //#7 Read Valid input unit
    test("Read Valid input unit", function(done){
      let input = "kg";
      assert.equal(convertHandler.getUnit(input), "kg");
      done();
    });
    
    //#8 Read Invalid input unit
    test("Read Invalid input unit", function(done){
      let input = "34kilograms";
      assert.equal(convertHandler.getUnit(input), undefined);
      done();
    });
    
    //#9 Return Valid Unit
    test("Return Valid Unit", function(done){
      let input = "mi";
      assert.equal(convertHandler.getReturnUnit(input), "km");
      done();
    });
    
    //#10 Return spelled-out string for each unit
   test("Return spelled-out string for each unit", function(done){
      let input = "kg";
      assert.equal(convertHandler.spellOutUnit(input), "kilogram");
      done();
    });
    
    //#11 Convert gal to L
    test("Convert gal to L", function(done){
      let input = "gal";
      assert.equal(convertHandler.getReturnUnit(input), "L");
      done();
    });
    
    //#12 Convert L to gal
    test("Convert L to gal", function(done){
      let input = "l";
      assert.equal(convertHandler.getReturnUnit(input), "gal");
      done();
    });
    
    //#13 Convert mi to km
    test("Convert mi to km", function(done){
      let input = "mi";
      assert.equal(convertHandler.getReturnUnit(input), "km");
      done();
    });
    
    //#14 Convert km to mi
    test("Convert km to mi", function(done){
      let input = "km";
      assert.equal(convertHandler.getReturnUnit(input), "mi");
      done();
    });
    
    //#15 Convert lbs to kg
    test("Convert lbs to kg", function(done){
      let input = "lbs";
      assert.equal(convertHandler.getReturnUnit(input), "kg");
      done();
    });
    
    //#16 Convert kg to lbs
    test("Convert kg to lbs", function(done){
      let input = "kg";
      assert.equal(convertHandler.getReturnUnit(input), "lbs");
      done();  
    });
  });
});