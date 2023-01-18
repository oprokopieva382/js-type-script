import { GovermentBuildingType, HouseType } from "../02/02_02";

export const getStreetsTitleOfGovBuildings = (
  buildings: GovermentBuildingType[]
) => {
  return buildings.map((b) => b.address.street.title);
};

export const getStreetsTitleOfBuildings = (buildings: HouseType[]) => {
  return buildings.map((b) => b.address.street.title);
};

export const createMessage = (houses: HouseType[]) => {
  return houses.map((h) => h.address.street.title);
};
