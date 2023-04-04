let obj = {
    num1: 100,
    num2: 50,
    sum: 150,
    difference: 50,
    product: 500,
    qoutient: 20
}

function showData (obj){

    console.log (
    `======================================= \
    \nFirst Number: ${obj.num1} \
    \nSecond Number: ${obj.num2} \
    \nThe sum is: ${obj.sum} \
    \nThe difference is: ${obj.difference} \
    \nThe product is: ${obj.product} \
    \nThe quotient is: ${obj.qoutient} `
    )

}

function add(num1, num2){
    num1 = obj.num1
    num2 = obj.num2
    let result = num1 + num2;
    return result;
}

function subtract(num1, num2){
    num1 = obj.num1
    num2 = obj.num2
    let result = num1 - num2;
    return result;
}

function multiply(num1, num2){
    num1 = obj.num1
    num2 = obj.num2
    let result = num1 * num2;
    return result;
}

function divide(num1, num2){
    num1 = obj.num1
    num2 = obj.num2
    let result = num1 / num2;
    return result;
}

function newSetOfNumbers (num1, num2){

    
    obj.num1 = num1;
    obj.num2 = num2;
    obj.sum = add();
    obj.difference = subtract();
    obj.product = multiply();
    obj.qoutient = divide();

    console.log (
        `======================================= \
        \nFirst Number: ${obj.num1} \
        \nSecond Number: ${obj.num2} \
        \nThe sum is: ${obj.sum} \
        \nThe difference is: ${obj.difference} \
        \nThe product is: ${obj.product} \
        \nThe quotient is: ${obj.qoutient} `
        )
}


showData (obj);
newSetOfNumbers (200, 10);
newSetOfNumbers (500, 20);


    

    
    




