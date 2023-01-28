let num = +prompt ("Введите число");

if (typeof num == 'number') 
  
  if(!isNaN(num))
    
    {
      if(num % 2 === 0) {
        console.log("Это четное число");
      }
      else {
        console.log("Это нечетное число")
      }
    }
  else {
    console.log("Упс, кажется, вы ошиблись")
  }

