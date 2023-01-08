import { HouseType, CityType, GovermentBuildingType } from "../02/02_02";
import { StudentType } from "../02/02";

export const addSkill = (student: StudentType, skill: string) => {
  student.technologies.push({ id: new Date().getTime(), title: skill });
};

export function makeStudentActive(st: StudentType) {
  st.isActive = true;
}

export const isStudentLivesIn = (st: StudentType, cityName: string) => {
  return st.address.city.title === cityName;
};

export const addMoneyToBudget = (
  building: GovermentBuildingType,
  budget: number
) => {
  return (building.budget += budget);
};

export const repairHouse = (houseType: HouseType) => {
  return (houseType.repaired = true);
};
export const toFireStaff = (building: GovermentBuildingType, staff: number) => {
  return (building.staffCount -= staff);
};
export const toHireStaff = (building: GovermentBuildingType, staff: number) => {
  return (building.staffCount += staff);
};

export const createMessage = (props: CityType) => {
  return `Hello ${props.title} citizens. I want you be happy. All ${props.citizensNumber} men`;
};
