export function fizzBuzz(numbers: number[]): string[] {
  const numbersFizzBuzz: string[] = numbers.map((number) => {
    if (isFizzBuzz(number)) {
      return "FizzBuzz";
    }
    if (isFizz(number)) {
      return "Fizz";
    }
    if (isBuzz(number)) {
      return "Buzz";
    }
    return number.toString();
  });

  return numbersFizzBuzz;
}

function isBuzz(number: number) {
  return number % 5 === 0;
}

function isFizz(number: number) {
  return number % 3 === 0;
}

function isFizzBuzz(number: number) {
  return isFizz(number) && isBuzz(number);
}
