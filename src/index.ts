export function fizzbuzz(array:number[]):string[]{
  let arrayResult:string[] = [];
  array.forEach(number => {

    let result:string = "";
    let numStr:string = number.toString();

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