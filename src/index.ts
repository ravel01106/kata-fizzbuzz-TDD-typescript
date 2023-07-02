function fizzbuzz(param:number[]):string[];
function fizzbuzz(param:number):string;
function fizzbuzz(param:any):any{
  let isNumber:boolean = typeof param == 'number';
  let isArray:boolean = Array.isArray(param);
  let result:string = "";
  let numStr:string = "";

  if(isNumber){
    let num: number = param;
    numStr = num.toString();
    if(num % 3 == 0){
      result += "Fizz";
    }
    if(numStr.includes("3")){
      result += "Fizz";
    }
    if(num % 5 == 0){
      result += "Buzz";
    }
    if(numStr.includes("5")){
      result += "Buzz";
    }
    if(result == ""){
      result = numStr;
    }
    return result;

  }else if(isArray){
    let array:number[] = param;
    let arrayResult:string[] = [];
    array.forEach(number => {

      result = "";
      numStr = number.toString();
  
      let isDivisibleByThree:boolean = number % 3 == 0;
      let isDivisibleByFive:boolean = number % 5 == 0;
      let containsThree:boolean = numStr.includes("3");
      let containsFive:boolean = numStr.includes("5");
      
      result += isDivisibleByThree ? "Fizz" : "";
      result += containsThree ? "Fizz" : "";
      result += isDivisibleByFive ? "Buzz" : "";
      result += containsFive ? "Buzz" : "";
  
      let isResultEmpty:boolean = result == "";
  
      result = isResultEmpty ? numStr : result;
  
      console.log(result)
      arrayResult.push(result);
    });
  
    return arrayResult;
  }
    return 'Sorry but you must enter a number or array of numbers.';
}
export default fizzbuzz;