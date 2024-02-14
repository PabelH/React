// console.log('What is happening here?');
// const array1 = new Array(); this is one way to do an array but isn't the traditional way

const array1 = [1,2,3,4];

// array1.push(1); this is not recomendable way to add items to an array.

let array2 = [...array1, 5];
// array2.push(5); push metthod add 5 to the two arrays.

const array3 =array2.map( function(number){
    return number * 2;
} );


console.log(array1);
console.log(array2);
console.log(array3);