type StudentType = {
  id: number;
  name: string;
  age: number;
  isActive: true;
  address: AddressType;
  technologies: TechType[];
};

type AddressType = {
  streetTitle: string;
  city: LocalCityType;
};

type LocalCityType = {
  title: string;
  countryTitle: string;
};

type TechType = {
  id: number;
  title: string;
};

const student: StudentType = {
  id: 1,
  name: "Dimych",
  age: 32,
  isActive: true,
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
