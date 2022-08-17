function BMI(weight, height){
  let result = weight / (height * height);
  return result;
}

console.log (BMI(70,1.7));

function Status (Bmi) {
if id="b1"(BMI < 18.5) {

    return("لديك نقص بالوزن");
    
    document.getElementById("b1").style.color = "orange";

} else if id="b2"(BMI >= 18.5 && Bmi <25){
    return `وزنك صحي`;

    document.getElementById("b2").style.color = "green";

 

} else if id="b3"(Bmi >= 25){

    return`لديك زياده بالوزن`;

    document.getElementById("b3").style.color = "red";
}




function calculate () {

let weight = document.getElementById(`weight`).value;
let hight = document.getElementById(`hight`).value;


let BMI = (weight,hight);
let desc = Status(BMI);

let div = document.getElementById('result');

div.innerTEXT = BMI + " == " + desc
}}