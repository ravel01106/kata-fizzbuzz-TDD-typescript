import {describe, test, expect} from 'vitest';
import {fizzbuzz} from '../index';


describe('FizzBuzz test', () => {
    test('if we pass [1, 2, 7, 4, 8] it should return us ["1","2","7", "4", "8"]', () =>{
        expect(fizzbuzz([1 ,2 ,7 ,4 ,8])).toStrictEqual(['1', '2', '7', '4', '8']);
    });
    test('if we pass [1, 2, 3, 4, 5, 60] it should return us ["1","2","FizzFizz", "4", "BuzzBuzz", "FizzBuzz"]', () =>{
        expect(fizzbuzz([1 ,2 ,3 ,4 ,5, 60])).toStrictEqual(['1', '2', 'FizzFizz', '4', 'BuzzBuzz', 'FizzBuzz']);
    });
    test('if we pass [1, 3, 9, 5, 10, 30, 35, 53, 135] it should return us ["1", "Fizz", "Buzz", "FizzFizz", "BuzzBuzz", "FizzFizzBuzz", "FizzBuzzBuzz","FizzBuzz", "FizzFizzBuzzBuzz]', () =>{
        expect(fizzbuzz([1 , 9, 10, 3, 5, 30, 35, 53, 135])).toStrictEqual(
            ['1', 'Fizz', 'Buzz', 'FizzFizz', 'BuzzBuzz', 'FizzFizzBuzz', 'FizzBuzzBuzz', 'FizzBuzz', 'FizzFizzBuzzBuzz']
            );
    });
});