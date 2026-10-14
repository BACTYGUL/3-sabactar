 console.log("bishkek213");
 console.warn("bishkek213");
console.error("bishkek213")

// const weather = prompt("погоданы жаз")

// if(weather>30){
//     console.log("ыссык");
// } else if (weather>17){
//     console.log("жылым");
// } else if (weather>0){
//     console.log("суук");
// }else{
//     console.log("кыш");   
// }



// const baa = prompt("бугунку кун кандай отту ошону жаз")


// if (baa> 5) {
//  console.log("аябай сонун")   
// } else if (baa>4){
// console.log("сонун")
// } else if (baa>3){
// console.log("жаман")
// } else{
// console.log("аябай жаман")
// }


// const school =prompt("мектеп кандай экен?")

// if (school> 100) {
//   console.log("ото жакшы")
// } else if (school> 85) {
//     console.log("жакшы")
// } else if (school> 25) {
//   console.log("жакшы эле")  
// } else{
//     console.log("ото начар")
// }


// const telefon =prompt("мугалимдер")
// if (telefon>100) {
//     console.log("")
// } else if (telefon>50) {
//  console.log("")   
// } else{
//     console.log("доступ жок")
// }

 const h1 = document.getElementById("text")

 const text = prompt("текст жаз")

 h1.innerHTML = text
 h1.style.color = "green"

console.log(h1);


const p =document.getElementById("mmmm")


 const okurmen = prompt(" айтти жонундо маалымат жаз")


 p.innerHTML = okurmen
  p.style.color = okurmen

const btn1 = document.getElementById("bbbbb")
const body = document.querySelector("body")

btn1.onclick = () =>{
     body.style.backgroundColor = "red"
 }


const btn2 = document.getElementById("ddd")

btn2.onclick = () =>{
    body.style.backgroundColor = "black"


 }

 const input1 = document. getElementById("name")

 console.log(input1)
 btn2.onclick = () => {
     p.innerHTML=input1.value
 }

 input1.oninput = () =>{
    p.innerHTML=input1.value

 }

 const input2 = document. getElementById("baha")


 console.log(input2)

 input2.oninput = () => {
    p.innerHTML=input2.value
     body.style.backgroundColor = input2.value
 }


 const input3 = document.getElementById("id")

 console.log(input3)

 input3.oninput = () => {
     p.innerHTML=input3.value
     body.style.backgroundColor = input3.value
 }


const input4 = document.getElementById("maron")

 console.log(input4)

 input4.oninput = () => {
    p.innerHTML=input4.value 
    body.style.backgroundColor=input4.value


 }


 const number = prompt("номеринди жаз")

 if  (number> 100) {
    console.log ("аябай мощный")
 } else if (number> 75) {
    console.log ("мощный")
 } else if ( number> 50) {
    console.log (number>25 )
 } else ("жаман")


