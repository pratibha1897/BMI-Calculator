function bmiCalculator(weight, height) {
  var calculateBmi = weight / Math.pow(height, 2);
  return Math.round(calculateBmi);
}

var weight = parseInt(prompt("Enter weight to calculate BMI"));
var height = parseInt(prompt("Enter height to caculate BMI"));

var bmi = bmiCalculator(weight, height);
console.log(bmi);
