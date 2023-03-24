export function greet(name = "stranger") {
  if (name === "Niklas") {
    return "Hello coach!";
  }

  return `Hello ${name}!`;
}
