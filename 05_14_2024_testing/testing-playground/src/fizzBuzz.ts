export function fizzBuzz(numbers: number[]): string {
  const numbersFizzBuzz: string = numbers.reduce(
    (accumulator, currentValue, currentIndex) => {
      if (currentValue === 0) {
        return concatenateFizzBuzz(
          currentIndex,
          currentValue.toString(),
          accumulator
        );
      }
      if (isFizzBuzz(currentValue)) {
        return concatenateFizzBuzz(currentIndex, "FizzBuzz", accumulator);
      }
      if (isFizz(currentValue)) {
        return concatenateFizzBuzz(currentIndex, "Fizz", accumulator);
      }
      if (isBuzz(currentValue)) {
        return concatenateFizzBuzz(currentIndex, "Buzz", accumulator);
      }
      return concatenateFizzBuzz(
        currentIndex,
        currentValue.toString(),
        accumulator
      );
    },
    ""
  );

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

function concatenateFizzBuzz(
  currentIndex: number,
  currentValue: string,
  accumulator: string
) {
  return currentIndex === 0 ? currentValue : accumulator + ", " + currentValue;
}
