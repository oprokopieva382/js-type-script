import { CityType } from "../02/02_02";
import {
  getStreetsTitleOfGovBuildings,
  getStreetsTitleOfBuildings,
  createMessage,
} from "./05_02";
let city: CityType;

beforeEach(() => {
  city = {
    title: "New York",
    houses: [
      {
        id: 1,
        buildedAt: 2012,
        repaired: false,
        address: { number: 100, street: { title: "White street" } },
      },
      {
        id: 2,
        buildedAt: 2008,
        repaired: false,
        address: { number: 100, street: { title: "Happy street" } },
      },
      {
        id: 3,
        buildedAt: 2020,
        repaired: false,
        address: { number: 101, street: { title: "Happy street" } },
      },
    ],
    govermentBuildings: [
      {
        type: "HOSPITAL",
        budget: 200000,
        staffCount: 200,
        address: { street: { title: "Central Str" } },
      },
      {
        type: "FIRE-STATION",
        budget: 500000,
        staffCount: 1000,
        address: { street: { title: "South Str" } },
      },
    ],
    citizensNumber: 1000000,
  };
});

test("list of streets titles of goverments buildings", () => {
  let streetNames = getStreetsTitleOfGovBuildings(city.govermentBuildings);

  expect(streetNames.length).toBe(2);
  expect(streetNames[0]).toBe("Central Str");
  expect(streetNames[1]).toBe("South Str");
});

test("list of streets titles", () => {
  let streetNamesAll = getStreetsTitleOfBuildings(city.houses);

  expect(streetNamesAll.length).toBe(3);
  expect(streetNamesAll[0]).toBe("White street");
  expect(streetNamesAll[1]).toBe("Happy street");
  expect(streetNamesAll[2]).toBe("Happy street");
});
test("create greeting message for street", () => {
  let messeges = createMessage(city.houses);
  expect(messeges.length).toBe(3);
  expect(messeges[0]).toBe("White street");
  expect(messeges[1]).toBe("Happy street");
  expect(messeges[2]).toBe("Happy street");
});
