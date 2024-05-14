export function fizzBuzz(numbers: number[]): string[] {
  const numbersFizzBuzz: string[] = numbers.map((number) => {
    if (number % 3 === 0) {
      return "Fizz";
    }
    return number.toString();
  });

  return numbersFizzBuzz;
}
