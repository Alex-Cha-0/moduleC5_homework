const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;



const xmlDom = new DOMParser().parseFromString(xmlString, "text/xml")
const listNode = xmlDom.querySelectorAll("student")

let arr = [] // массив данных
let result;

for (const student of listNode) {
    const name = student.querySelector("name");
    const langName = name.getAttribute('lang');
    const age = student.querySelector("age");
    const prof = student.querySelector("prof");

    result = {
    name: name.textContent,
    age: age.textContent,
    prof: prof.textContent,
    langName: langName}

    arr.push(result)
}
console.log(arr)







