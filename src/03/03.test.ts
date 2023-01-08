import { addSkill, makeStudentActive, isStudentLivesIn } from "./03";
import { StudentType } from "../02/02";

let student: StudentType;

beforeEach(() => {
  student = {
    id: 1,
    name: "Dimych",
    age: 32,
    isActive: false,
    address: {
      streetTitle: "San Pablo",
      city: {
        title: "Minsk",
        countryTitle: "Belarus",
      },
    },
    technologies: [
      { id: 1, title: "HTML" },
      { id: 2, title: "CSS" },
      { id: 3, title: "React" },
    ],
  };
});

test("new tech skill should be added to student", () => {
  expect(student.technologies.length).toBe(3);
  addSkill(student, "JS");
  expect(student.technologies.length).toBe(4);
  expect(student.technologies[3].title).toBe("JS");
  expect(student.technologies[3].id).toBeDefined();
});

test("student should be active", () => {
  expect(student.isActive).toBe(false);
  makeStudentActive(student);
  expect(student.isActive).toBe(true);
});

test("Is student lives in city?", () => {
  let result1 = isStudentLivesIn(student, "Kiev");
  let result2 = isStudentLivesIn(student, "Minsk");

  expect(result1).toBe(false);
  expect(result2).toBe(true);
});
