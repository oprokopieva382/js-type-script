import { mult, splitIntoWords, sum } from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
  a = 1;
  b = 2;
  c = 3;
});
test("sum should be correct", () => {
  //data

  //action
  const result1 = sum(a, b);
  const result2 = sum(b, c);
  //expect result
  expect(result1).toBe(3);
  expect(result2).toBe(5);
});

test("multiplication should be correct", () => {
  const mresult1 = mult(a, b);
  const mresult2 = mult(b, c);

  expect(mresult1).toBe(2);
  expect(mresult2).toBe(6);
});

test("spelling into words should be correct", () => {
  const sent1 = "Hello my friends!";
  const sent2 = "JS - the best programming language";

  const resultspel1 = splitIntoWords(sent1);
  const resultspel2 = splitIntoWords(sent2);

  expect(resultspel1.length).toBe(3);
  expect(resultspel1[0]).toBe("hello");
  expect(resultspel1[1]).toBe("my");
  expect(resultspel1[2]).toBe("friends");

  expect(resultspel2.length).toBe(5);
  expect(resultspel2[0]).toBe("js");
  expect(resultspel2[1]).toBe("the");
  expect(resultspel2[2]).toBe("best");
  expect(resultspel2[3]).toBe("programming");
  expect(resultspel2[4]).toBe("language");
});
