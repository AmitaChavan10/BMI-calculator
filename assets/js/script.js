/* Author: 
*/
const btn = document.getElementById('btn');
btn.addEventListener('click', bmi);

function bmi() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    height = height * 12;
    height = height * 0.025;

    var bmiVal = weight / (height * height);
    bmiVal = Math.round(bmiVal);
    document.getElementById('result').value = bmiVal;
    console.log(bmiVal);
}



















