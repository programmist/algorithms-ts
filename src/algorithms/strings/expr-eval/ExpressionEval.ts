import LinkedStack from "../../../datastructures/stack/LinkedStack";
import { Operator, opPrecedence, tokenize } from "./tokenizer";

function processOperation(operator: Operator, operands: LinkedStack<number>) {
  const right = operands.pop();
  const left = operands.pop();
  switch (operator) {
    case "+":
      operands.push(left + right);
      break;
    case "-":
      operands.push(left - right);
      break;
    case "*":
      operands.push(left * right);
      break;
    case "/":
      operands.push(left / right);
      break;
    case "%":
      operands.push(left % right);
      break;
    default:
      throw Error(`Invalid operator: ${operator}`);
  }
}

// TODO: Update to handle any number of parentheses.
//      Infix notation is ambiguous wrt precedence, so you must
//        1) Convert to Postfix (or prefix) notation
//        2) Group all terms with parentheses
//      Probably prefer converting to postfix
//
// https://www.geeksforgeeks.org/expression-evaluation/
// https://www.google.com/search?q=infix+expression+parentheses+evaluation+with+optional+parentheses&sca_esv=592912896&ei=UKaEZde6Cc2rqtsP_J-JsAE&oq=infix+xpression+evaluation+with+optional+parentheses&gs_lp=Egxnd3Mtd2l6LXNlcnAiNGluZml4IHhwcmVzc2lvbiBldmFsdWF0aW9uIHdpdGggb3B0aW9uYWwgcGFyZW50aGVzZXMqAggAMgoQIRigARjDBBgKSLFIUIQWWI0ncAF4AJABAJgBX6AB_AWqAQIxMLgBAcgBAPgBAcICCBAhGKABGMME4gMEGAEgQYgGAQ&sclient=gws-wiz-serp#ip=1

/**
 * Evaluate infix numerical expressions.
 *
 * @param expr
 * @returns numerical value of the expression
 */
export function evaluateInfix(expr: string) {
  const operators = new LinkedStack<Operator>();
  const operands = new LinkedStack<number>();

  for (let token of tokenize(expr)) {
    switch (token.type) {
      case "parenthesis":
        // if (token.value === "(") {
        //   operators.push(token.value);
        // }
        // if (token.value === ")") {
        //   processOperation(operators.pop(), operands);
        // }
        break;
      case "operator":
        const operator = token.value as Operator;
        while (
          operators.size() > 0 &&
          opPrecedence(operators.peek())! >= opPrecedence(operator)!
        ) {
          processOperation(operators.pop(), operands);
        }
        operators.push(token.value as Operator);
        break;
      case "operand":
        operands.push(Number(token.value));
        break;
    }
  }

  while (operators.size() > 0) {
    processOperation(operators.pop(), operands);
  }

  return operands.pop();
}
