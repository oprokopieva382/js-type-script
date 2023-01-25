type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
  "101": { id: 101, name: "Dima" },
  "33454": { id: 33454, name: "Natasha" },
  "1212": { id: 1212, name: "Valera" },
  "1": { id: 1, name: "Katya" },
};
users[1]; ////faster search// O(1)
let user = {id: 100500, name: "igor"} ///adding user
users[user.id] = user;                ///adding user
delete users[user.id]                 ///delete user
users[user.id].name = "Vitya"         ///update user

export const usersArray = [
  { id: 101, name: "Dima" },
  { id: 33454, name: "Natasha" },
  { id: 1212, name: "Valera" },
  { id: 1, name: "Katya" },
];

usersArray.find((u) => u.id === 1); // slower search, because of iteration of each element in array //  O(n)
usersArray.push(user)
//let usersCopy = [...usersArray.filter(), user]                     /////adding user
//let usersrray = usersrray.filter(u=> u.id !== user.id)             ///delete user
