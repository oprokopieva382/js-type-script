const age = [18, 20, 22, 1, 100, 90, 14];

const oldAge = [100]; // > 90

type CourseType = {
  title: string;
  price: number;
};
const courses = [
  { title: "CSS", price: 100 },
  { title: "JS", price: 200 },
  { title: "React", price: 150 },
];

const cheepCourses = [
  { title: "CSS", price: 100 },
  { title: "React", price: 150 },
]; // < 160
