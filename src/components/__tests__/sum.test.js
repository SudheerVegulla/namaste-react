import { Sum } from "../sum";

test("Sum function returns sum of two numbers", () => {
  const result = Sum(3, 5);

  expect(result).toBe(8);
});
