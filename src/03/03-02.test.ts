import {
  addMoneyToBudget,
  repairHouse,
  toFireStaff,
  toHireStaff,
  createMessage,
} from "./03";
import { CityType } from "../02/02_02";

let city: CityType;

beforeEach(() => {
  city = {
    title: "New York",
    houses: [
      {
        buildedAt: 2012,
        repaired: false,
        address: { number: 100, street: { title: "White street" } },
      },
      {
        buildedAt: 2008,
        repaired: false,
        address: { number: 100, street: { title: "Happy street" } },
      },
      {
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
// создайте в одельном файле функцию чтобы тесты прошли
test("Budget should be for HOSPITAL", () => {
  addMoneyToBudget(city.govermentBuildings[0], 100000);

  expect(city.govermentBuildings[0].budget).toBe(300000);
});

//тесты должны пройти
test("Budget should be changed for FIRE-STATION", () => {
  addMoneyToBudget(city.govermentBuildings[1], -100000);

  expect(city.govermentBuildings[1].budget).toBe(400000);
});
//создайте в томже файле еще одну функцию, чтобы тесты прошли
test("house should be repair", () => {
  repairHouse(city.houses[1]);

  expect(city.houses[1].repaired).toBeTruthy();
});
//создайте в томже файле еще одну функцию, чтобы тесты прошли
test("staff should be decreased", () => {
  toFireStaff(city.govermentBuildings[0], 20);

  expect(city.govermentBuildings[0].staffCount).toBe(180);
});
//создайте в томже файле еще одну функцию, чтобы тесты прошли
test("staff should be increased", () => {
  toHireStaff(city.govermentBuildings[0], 20);

  expect(city.govermentBuildings[0].staffCount).toBe(220);
});

test("Greeting message should be correct", () => {
  const message = createMessage(city);

  expect(message).toBe(
    "Hello New York citizens. I want you be happy. All 1000000 men"
  );
});
