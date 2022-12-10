class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
    }
    
        clear() {
      this.currentOperand = ''
      this.previousOperand = ''
      this.operation = undefined
    }
