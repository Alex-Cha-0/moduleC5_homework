const jsonString = `{
    "list": [
        {
            "name": "Petr",
            "age": "20",
            "prof": "mechanic"
        },
        {
            "name": "Vova",
            "age": "60",
            "prof": "pilot"
        }
    ]
}`

const data = JSON.parse(jsonString);
const list = data.list;
const arr = [];
let result;



for (const people of list){
    result = {
        name: people.name,
        age: people.age,
        prof: people.prof,
    }
    arr.push(result)
}

console.log(arr)