const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const bmi_results = document.querySelector('#bmi_results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
   var bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
}
// const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if(bmi<=18.6){
    bmi_re.innerHTML=` Your BMI is ${bmi} and it isUnder Wight`;
    // bmi_results.inserRule(div {background-color:red;})
  }
  else if(bmi>=18.6 && bmi<=24.9)
  bmi_re.innerHTML=` Your BMI is ${bmi} and it is Normal `;
else{
    bmi_re.innerHTML=` Your BMI is ${bmi} and it is Over Wight`
}
});

