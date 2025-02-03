const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    it('should add a positive and a negative number', () => {
      expect(calculator.add(5, -2)).toBe(3);
    });

    it('should add two negative numbers', () => {
      expect(calculator.add(-4, -1)).toBe(-5);
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers', () => {
      expect(calculator.subtract(5, 2)).toBe(3);
    });

    it('should subtract a negative number from a positive number', () => {
      expect(calculator.subtract(5, -2)).toBe(7);
    });

    it('should subtract a positive number from a negative number', () => {
      expect(calculator.subtract(-5, 2)).toBe(-7);
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    it('should multiply a number by zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    it('should multiply two negative numbers', () => {
      expect(calculator.multiply(-2, -3)).toBe(6);
    });
  });

  describe('divide', () => {
    it('should divide two positive numbers', () => {
      expect(calculator.divide(6, 2)).toBe(3);
    });

    it('should divide a number by one', () => {
      expect(calculator.divide(5, 1)).toBe(5);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow("Cannot divide by zero.");
    });
  });
});

