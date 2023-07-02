function fizzbuzz(param:number[]):string[];
function fizzbuzz(param:number):string;
function fizzbuzz(param:any):any{
  let isNumber:boolean = typeof param == 'number';
  let isArray:boolean = Array.isArray(param);
  let result:string = "";
  let numStr:string = "";
  let isDivisibleByThree:boolean = false;
  let isDivisibleByFive:boolean = false;
  let containsThree:boolean = false;
  let containsFive:boolean = false;
  let isResultEmpty:boolean = false;


  if(isNumber){

    let num: number = param;
    numStr = num.toString();

    isDivisibleByThree = num % 3 == 0;
    isDivisibleByFive = num % 5 == 0;
    containsThree = numStr.includes("3");
    containsFive = numStr.includes("5");
    
    result += isDivisibleByThree ? "Fizz" : "";
    result += containsThree ? "Fizz" : "";
    result += isDivisibleByFive ? "Buzz" : "";
    result += containsFive ? "Buzz" : "";

    isResultEmpty = result == "";

    result = isResultEmpty ? numStr : result;

    return result;

  }else if(isArray){

    let array:number[] = param;
    let arrayResult:string[] = [];

    array.forEach(number => {

      result = "";
      numStr = number.toString();
  
      isDivisibleByThree = number % 3 == 0;
      isDivisibleByFive = number % 5 == 0;
      containsThree = numStr.includes("3");
      containsFive = numStr.includes("5");
      
      result += isDivisibleByThree ? "Fizz" : "";
      result += containsThree ? "Fizz" : "";
      result += isDivisibleByFive ? "Buzz" : "";
      result += containsFive ? "Buzz" : "";
  
      isResultEmpty = result == "";
  
      result = isResultEmpty ? numStr : result;

      arrayResult.push(result);
    });
  
    return arrayResult;

  }
    return 'Sorry but you must enter a number or array of numbers.';
    
}
export default fizzbuzz;