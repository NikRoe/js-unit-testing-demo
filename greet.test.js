import { greet } from "./greet.js";

test("return 'Hello Jane!' if called with greet('Jane')", () => {
  const result = greet("Jane");
  expect(result).toBe("Hello Jane!");
});

test("return 'Hello stranger!' if called greet()", () => {
  const result = greet();
  expect(result).toBe("Hello stranger!");
});

test("return 'Hello coach!' if called with greet('Niklas')", () => {
  const result = greet("Niklas");
  expect(result).toBe("Hello coach!");
});
