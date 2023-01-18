import { ManType } from "./Destructuring";

let props: ManType;
beforeEach(() => {
  props = {
    name: "Dimych",
    age: 32,
    lessons: [{ title: "1" }, { title: "2" }],
    address: {
      street: {
        title: "San Pablo st.",
      },
    },
  };
});

test("", () => {
  const { age, lessons } = props;
  const { title } = props.address.street;

  expect(age).toBe(32);
  expect(lessons.length).toBe(2);
  expect(title).toBe("San Pablo st.");
});

test("", () => {
  const [ls1, ls2] = props.lessons;
  const [l1, ...restLessons] = props.lessons;

  expect(ls1.title).toBe("1");
  expect(ls2.title).toBe("2");

  expect(l1.title).toBe("1");
  expect(restLessons.length).toBe(1);
});
