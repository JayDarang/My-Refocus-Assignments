function calculate(weight, height) {

  // converts weight pounds to kilograms and feet to meters
  let weightInKg = weight / 2.205;
  let heightInM = height / 3.281;

  let bmi = weightInKg / (heightInM * heightInM);

  console.log("BMI: " + bmi);

  if (bmi < 18.5) {
    console.log("Underweight");
  } else if (bmi >= 18.5 && bmi < 25) {
    console.log("Normal weight");
  } else if (bmi >= 25 && bmi < 30) {
    console.log("Overweight");
  } else {
    console.log("Obese");
  }
}

// Enter weight in pounds and height in feet

calculate(154, 5.5);
