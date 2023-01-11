import { CityType, GovermentBuildingType } from "./../02/02_02";

export function demoHousesOnTheStreet(city: CityType, street: string) {
  city.houses = city.houses.filter((b) => b.address.street.title !== street);
}

export const getBuildingsStaffCountGreater = (
  govBuildings: Array<GovermentBuildingType>,
  number: number
) => {
  return govBuildings.filter((b) => b.staffCount > number);
};
