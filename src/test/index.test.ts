import {describe, test, expect} from 'vitest';
import fizzbuzz from '../index';


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
    test('if we pass 1 it should return us "1"', () =>{
        expect(fizzbuzz(1)).toStrictEqual('1');
    });
    test('if we pass 3 it should return us "FizzFizz"', () =>{
        expect(fizzbuzz(3)).toStrictEqual('FizzFizz');
    });
    test('if we pass 5 it should return us "BuzzBuzz"', () =>{
        expect(fizzbuzz(5)).toStrictEqual('BuzzBuzz');
    });
    test('if we pass 10 it should return us "Buzz"', () =>{
        expect(fizzbuzz(10)).toStrictEqual('Buzz');
    });
    test('if we pass 6 it should return us "Fizz"', () =>{
        expect(fizzbuzz(6)).toStrictEqual('Fizz');
    });
    test('if we pass 35 it should return us "FizzBuzzBuzz"', () =>{
        expect(fizzbuzz(35)).toStrictEqual('FizzBuzzBuzz');
    });
    test('if we pass 53 it should return us "FizzBuzz"', () =>{
        expect(fizzbuzz(53)).toStrictEqual('FizzBuzz');
    });
    test('if we pass 53 it should return us "FizzBuzz"', () =>{
        expect(fizzbuzz("Hola")).toStrictEqual('Sorry but you must enter a number or array of numbers.');
    });
});