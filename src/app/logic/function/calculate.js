import Big from "big.js";

import operate from "../shared/operate";
import isNumber from "../shared/isNumber";

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:String      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */

// using calculate in hooks replaces value with returned object.
export default function calculate(obj, buttonName) {
  if (buttonName === "AC") { //user pressed clear
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === "0" && obj.next === "0") {
      return {        
        total: obj.total,
        operation: obj.operation,
        next: obj.next
      };
    }
    // If there is an operation, update next
    if (obj.operation) {
      if (obj.next) {
        return { next: obj.next + buttonName, total: obj.total, operation: obj.operation };
      }
      return { next: buttonName, total: obj.total, operation: obj.operation };
    }
    // If there is no operation, update next and clear the value
    if (obj.next) {
      const next = obj.next === "0" ? buttonName : obj.next + buttonName;
      return {
        next: next,
        total: null,
        operation: obj.operation
      };
    }
    return {
      next: buttonName,
      total: null,
      operation: obj.operation
    };
  }

  if (buttonName === "%") {
    if (obj.operation && obj.next) {
      const result = operate(obj.total, obj.next, obj.operation);
      return {
        total: Big(result)
          .div(Big("100"))
          .toString(),
        next: null,
        operation: null,
      };
    }
    if (obj.next) {
      return {
        total: obj.total,
        operation: obj.operation,
        next: Big(obj.next)
          .div(Big("100"))
          .toString(),
      };
    }
    return {        
      total: obj.total,
      operation: obj.operation,
      next: obj.next
    };
  }

  if (buttonName === ".") {
    if (obj.next) {
      // ignore a . if the next number already has one
      if (obj.next.includes(".")) {
        return {        
          total: obj.total,
          operation: obj.operation,
          next: obj.next
        };
      }
      return {
        next: obj.next + ".",
        total: obj.total,
        operation: obj.operation
      };
    }
    return { 
      next: "0.",
      total: obj.total,
      operation: obj.operation 
    };
  }

  if (buttonName === "=") {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    } else {
      // '=' with no operation, nothing to do
      return {        
        total: obj.total,
        operation: obj.operation,
        next: obj.next
      };
    }
  }

  if (buttonName === "+/-") {
    if (obj.next) {
      return { 
        next: (-1 * parseFloat(obj.next)).toString(),
        total: obj.total,
        operation: obj.operation,
       };
    }
    if (obj.total) {
      return { 
        next: obj.next,
        operation: obj.operation,
        total: (-1 * parseFloat(obj.total)).toString() 
      };
    }
    return {        
      total: obj.total,
      operation: obj.operation,
      next: obj.next
    };
  }

  // Button must be an operation

  // When the user presses an operation button without having entered
  // a number first, do nothing.
  // if (!obj.next && !obj.total) {
  //   return {};
  // }

  // User pressed an operation button and there is an existing operation
  if (obj.operation) {
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  // no operation yet, but the user typed one

  // The user hasn't typed a number yet, just save the operation
  if (!obj.next) {
    return { 
      operation: buttonName, 
      total: obj.total, 
      next: obj.next };
  }

  // save the operation and shift 'next' into 'total'
  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}