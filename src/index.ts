export function fizzbuzz(array:number[]):string[]{
  let arrayResult:string[] = [];
  array.forEach(number => {

    let result:string = "";
    let numStr:string = number.toString();
    
    if(number % 3 == 0){
      result += "Fizz";
    }
    if(numStr.includes("3")){
      result += "Fizz";
    }
    if(number % 5 == 0){
      result += "Buzz";
    }
    if(numStr.includes("5")){
      result += "Buzz";
    }
    if(result == ""){
      result = numStr;
    }

    console.log(result)
    arrayResult.push(result);
  });

  return arrayResult;
}
