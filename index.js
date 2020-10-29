let map = new Map([
  ["apple", "green"],
 ["strawberry", "red"],
 ["blueberry",    "blue"]
])
let key = []
let value = []
let strKey = `Ключ — `
let strVal = `, значение - `
for (let name of map.keys()) {
  key.push(name)
}
for (let name1 of map.values()) {
  value.push(name1)
}
for (var i = 0; i < key.length; i++) {
 console.log( strKey + key[i] + strVal + value[i]);
}
