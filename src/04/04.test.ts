test("should take old men older then 90", () => {
  const age = [18, 20, 22, 1, 100, 90, 14];
  const oldAge = age.filter((age) => age > 90);

  expect(oldAge.length).toBe(1);
  expect(oldAge[0]).toBe(100);
});

test("should take courses cheeper 160", () => {
  const courses = [
    { title: "CSS", price: 100 },
    { title: "JS", price: 200 },
    { title: "React", price: 150 },
  ];
  const cheepCourses = courses.filter((c) => c.price < 160);

  expect(cheepCourses.length).toBe(2);
  expect(cheepCourses[0].title).toBe("CSS");
  expect(cheepCourses[1].title).toBe("React");
});

test("get only complited tasks", () => {
  const tasks = [
    { id: 1, title: "Bread", isDone: false },
    { id: 2, title: "Milk", isDone: true },
    { id: 3, title: "Salt", isDone: false },
    { id: 4, title: "Sugar", isDone: true },
  ];
  const complitedTasks = tasks.filter((t) => t.isDone);

  expect(complitedTasks.length).toBe(2);
  expect(complitedTasks[0].title).toBe("Milk");
  expect(complitedTasks[1].title).toBe("Sugar");
});

test("get only uncomplited tasks", () => {
  const tasks = [
    { id: 1, title: "Bread", isDone: false },
    { id: 2, title: "Milk", isDone: true },
    { id: 3, title: "Salt", isDone: false },
    { id: 4, title: "Sugar", isDone: true },
  ];
  const complitedTasks = tasks.filter((t) => !t.isDone);

  expect(complitedTasks.length).toBe(2);
  expect(complitedTasks[0].id).toBe(1);
  expect(complitedTasks[1].id).toBe(3);
});
