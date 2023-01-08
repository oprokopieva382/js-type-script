export type StudentType = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
  address: AddressType;
  technologies: TechType[];
};

export type AddressType = {
  streetTitle: string;
  city: LocalCityType;
};

export type LocalCityType = {
  title: string;
  countryTitle: string;
};

export type TechType = {
  id: number;
  title: string;
};

export const student: StudentType = {
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
