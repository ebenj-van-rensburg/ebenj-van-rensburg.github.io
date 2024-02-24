"use strict";

document.getElementById("calculate").onclick = calculateResult

function calculateResult() {
    let selectedOperator,
        returnValue,

        operand1 = document.getElementById("operand1").value,
        operand2 = document.getElementById("operand2").value,

        operandselect1 = document.getElementById("operandselect1"),
        operandselect2 = document.getElementById("operandselect2"),

        operandType1 = operandselect1.value,
        operandType2 = operandselect2.value,

        operator = document.getElementsByName("operator");

        switch (operandType1) {
            case "number":
                operand1 = Number(operand1);
                break;
            case "string":
                operand1 = String(operand1);
                break;
        }

        switch (operandType2) {
            case "number":
                operand2 = Number(operand2);
                break;
            case "string":
                operand2 = String(operand2);
                break;
        }

        for (let i = 0; i < operator.length; i++) {
            if (operator[i].checked) {
                selectedOperator = operator[i].value;

                switch (selectedOperator) {
                    case "+":
                        returnValue = operand1 + operand2;
                        break;
                    case "-":
                        returnValue = operand1 - operand2;
                        break;
                    case "*":
                        returnValue = operand1 * operand2;
                        break;
                    case "/":
                        returnValue = operand1 / operand2;
                        break;
                    case "%":
                        returnValue = operand1 % operand2;
                        break;
                    case "concat":
                        returnValue = operand1 + operand2;
                        selectedOperator = "+"
                        break;
                    case "==":
                        returnValue = operand1 == operand2;
                        break;
                    case "===":
                        returnValue = operand1 === operand2;
                        break;
                    case "!=":
                        returnValue = operand1 != operand2;
                        break;
                    case "!==":
                        returnValue = operand1 !== operand2;
                        break;
                    case ">":
                        returnValue = operand1 > operand2;
                        break;
                    case ">=":
                        returnValue = operand1 >= operand2;
                        break;
                    case "<":
                        returnValue = operand1 < operand2;
                        break;
                    case "<=":
                        returnValue = operand1 <= operand2;
                        break;
                    default:
                        break;
                }
                break;
            }
        }
        
        document.getElementById("operation").innerHTML = operand1 + " " + selectedOperator + " " + operand2;

        document.getElementById("result").innerHTML = returnValue;
}
