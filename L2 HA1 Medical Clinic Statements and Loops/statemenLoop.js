const birth_year = 2000;
let birth_month = 0;

const current_month = new Date().getMonth();
let current_year = new Date().getFullYear();
current_year--;

let age = current_year - birth_year;

console.log(`Patient's age: ${age}`);


if(birth_month <= current_month){
    
    age++;
    console.log(`Patient's Accurate Age: ${age}`);
    
}







