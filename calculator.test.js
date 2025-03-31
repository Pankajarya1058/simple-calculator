"use strict";

var Calculator = require('./calculator');
describe('Calculator', function () {
  var calculator;
  beforeEach(function () {
    calculator = new Calculator();
  });
  describe('add', function () {
    it('should add two positive numbers', function () {
      expect(calculator.add(2, 3)).toBe(5);
    });
    it('should add a positive and a negative number', function () {
      expect(calculator.add(5, -2)).toBe(3);
    });
    it('should add two negative numbers', function () {
      expect(calculator.add(-4, -1)).toBe(-5);
    });
  });
  describe('subtract', function () {
    it('should subtract two positive numbers', function () {
      expect(calculator.subtract(5, 2)).toBe(3);
    });
    it('should subtract a negative number from a positive number', function () {
      expect(calculator.subtract(5, -2)).toBe(7);
    });
    it('should subtract a positive number from a negative number', function () {
      expect(calculator.subtract(-5, 2)).toBe(-7);
    });
  });
  describe('multiply', function () {
    it('should multiply two positive numbers', function () {
      expect(calculator.multiply(2, 3)).toBe(6);
    });
    it('should multiply a number by zero', function () {
      expect(calculator.multiply(5, 0)).toBe(0);
    });
    it('should multiply two negative numbers', function () {
      expect(calculator.multiply(-2, -3)).toBe(6);
    });
  });
  describe('divide', function () {
    it('should divide two positive numbers', function () {
      expect(calculator.divide(6, 2)).toBe(3);
    });
    it('should divide a number by one', function () {
      expect(calculator.divide(5, 1)).toBe(5);
    });
    it('should throw an error when dividing by zero', function () {
      expect(function () {
        return calculator.divide(5, 0);
      }).toThrow("Cannot divide by zero.");
    });
  });
});