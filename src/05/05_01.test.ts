import { createGreetingMessage, ManType } from "./05_01";

let people: ManType[] = [
  { name: "Andrew Ivanov", age: 33 },
  { name: "Alexander Petrov", age: 24 },
  { name: "Dmitry Sidorov", age: 18 },
];

beforeEach(() => {
  people = [
    { name: "Andrew Ivanov", age: 33 },
    { name: "Alexander Petrov", age: 24 },
    { name: "Dmitry Sidorov", age: 18 },
  ];
});

test("should get array greeting messages", () => {
  const message = createGreetingMessage(people);

  expect(message.length).toBe(3);
  expect(message[0]).toBe("Hello Andrew. Welcome to IT-INCUBATOR");
  expect(message[1]).toBe("Hello Alexander. Welcome to IT-INCUBATOR");
  expect(message[2]).toBe("Hello Dmitry. Welcome to IT-INCUBATOR");
});
