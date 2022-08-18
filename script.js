function BMI(weight, height){
    let result = weight / (height * height);
    return result;
  }
  
  console.log (BMI(70,1.7));
  
  function Status (Bmi) {
  if (BMI < 18.5)
  
      return("لديك نقص بالوزن");
      
      
  
  } else if (BMI >= 18.5 && Bmi <25){
      return `وزنك صحي`;
      
  
   
  } else if (Bmi >= 25){
  
      return`لديك زياده بالوزن`;
  
  }




function calculate () {

    let weight = document.getElementById(`weight`).value;
    let hight = document.getElementById(`hight`).value;
    
    
    let BMI = (weight,hight);
    let desc = Status(BMI);
    
    let div = document.getElementById('result');
    
    div.innerTEXT = BMI + " == " + desc;
    }
  