// src/index.ts

type User = {
  id: number;
  name: string;
  email: string;
};

function greetUser(user: User): string {
  return `Hello, ${user.name}!`;
}

// Intentional type errors
const userName: number = "CircleCI"; // Type 'string' is not assignable to type 'number'

const fakeUser: User = {
  id: "not-a-number", // Type 'string' is not assignable to type 'number'
  name: "Jane Doe",
  email: 12345,        // Type 'number' is not assignable to type 'string'
};

console.log(greetUser(fakeUser));
