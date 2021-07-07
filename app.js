//  1 - dom elements


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')



// 2 - make (constructor function)the calculator class
// this takes the previousOperandTextElement & the  currentOperandTextElement
//this is for the display on the Calculator

class Calculator{

constructor(previousOperandTextElement, currentOperandTextElement){
this.previousOperandTextElement = previousOperandTextElement
this.currentOperandTextElement = currentOperandTextElement
this.clear()
 }

 //  3 - define the functions for, clear delete , append numbers
 // choose operations, compute values & update display.

clear(){

this.currentOperand = ''
this.previousOperand = ''
this.operation = undefined
}


delete(){



}


appendNumber(number){
  //stop the function from executing whilst the "." is already in use
  if(number === '.' && this.currentOperand.includes('.')) return
  //convert the operators to strings so that more than one number can be selected in display
this.currentOperand = this.currentOperand.toString() + number.toString()

}


chooseOperation(operation){
this.operation = operation
this.previousOperand = this.currentOperand
this.currentOperand = ''


}


compute(){


}


updateDisplay(){

this.currentOperandTextElement.innerText = this.currentOperand

 }
}


//  4 create calculator, pass the constructor argument through this.



const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);


//  5 - add event listeners to buttons to carry out functions(on click)
//  loop over integers - make floating point numbers later with logic


numberButtons.forEach(button => {
  button.addEventListener('click', () =>{
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})


// 6 - the exact same (step 5) thing can be done for the operations buttons
// instead of apending an number, select an operator
operationButtons.forEach(button => {
  button.addEventListener('click', () =>{
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})
