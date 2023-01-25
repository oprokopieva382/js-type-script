// let user = {
//     "name": "Dimych",
//     "age": 12,
//     "address": {
//         "city": {
//             "title": "Minsk"
//         }
//     }
// }
// user["address"]["city"]["title"] //"Minsk"

let user = {
    "0": "Dima",
    "1": "Natasha",
    "2": "Valera",
    "3": "Katya"
}

Object.keys(user) // ["0", "1", "2", "3"]
Object.values(user) //["Dima", "Natasha", "Valera", "Katya"]

