/*
 * export a function named `bloodType` which
 * expects a number and returns
 * `A` if the number is greater than 1.
 * `B` if the number is less than 1.
 * and `O` if the number is 1.
 *
 * Do this without using `else`.
 */

export function bloodtype(number) {
  if (number > 1) {
    return "A";
  } else if (number < 1) {
    return "B";
  } else {
    return 0;
  }
}

/*
 * export a function named `advancedBloodType` which
 * expects two numbers and returns
 * `A` if the first number is greater than 1.
 * `B` if the first number is less than 1.
 * and `O` if the first number is 1.
 *
 * The return should be modified to include
 * `+` if the second number is > 0, and `-` if
 * the second number <= 0;
 *
 * Do this without using `else`.
 */

export function advancedBloodType(number1, number2) {
  var something = "";
  if (number1 > 1) {
    something += "A"
  } else if (number1 < 1) {
    something += "B";
  } else {
    something += "0";
  }
  if (number > 0) {
    something += "+"
    return something;
  } else {
    something += "-";
    return something;
  }
}


/*
 * export a function named `getType` which takes
 * a string (type) where:
 *
 * type will be one of `a`, `b`, `c`, `d`.
 *
 * then finds the "number" for that type where:
 *
 * (a=1, b=2,c=3, d=4)
 *
 * then returns the square of that number.
 *
 * do this using if, else if, else
 */

export function getType(type) {
  switch (type) {
    case "a":
      return 1 ^ 2;
      break;
    case "b":
      return 2 ^ 2;
      break;
    case "c":
      return 3 ^ 2;
      break;
    case "d":
      return 4 ^ 2;
      break;
    default:
      break;
  }
}

/*
 * export a function named `getTypeB` which takes
 * a string (type) where:
 *
 * type will be one of `a`, `b`, `c`, `d`, `e`.
 *
 * then finds the "number" for that type where:
 *
 * (a=1, b=2,c=3, d=4, e=5)
 *
 * then returns the square + 1 of that number.
 *
 * do this using a `switch` statement
 */

export function getTypeB(character) {
  switch (character) {
    case "a":
      return 1^2 + 1;
      break;
    case "b":
      return 2^2 + 1;
      break;
    case "c":
      return 3^2 + 1;
      break;
    case "d":
      return 4^2 + 1;
      break;
    case "e":
      return 5^2 + 1;
      break;
  }
}


