function greet(name: string): string {
  return `Hello, ${name}!`;
}

let userName: number = "CircleCI"; // Type error: string assigned to number

console.log(greet(userName));
