export function fizzBuzz(numbers: number[]): string[] {
  const numbersFizzBuzz: string[] = numbers.map((number) => {
    if (number % 3 === 0) {
      return "Fizz";
    }
    if (number % 5 === 0) {
      return "Buzz";
    }
    return number.toString();
  });

  return numbersFizzBuzz;
}
