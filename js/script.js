let resetFields = test => {
  const age = document.getElementById('age');
  const height = document.getElementById('height');
  const weight = document.getElementById('weight');
  age.value="";
  height.value="";
  weight.value="";
  document.querySelector('input[name="gender"]').value="male";
  document.querySelector('input[name="activity"]').value="min";
}

let onInput = test => {
  const age = document.getElementById('age');
  const height = document.getElementById('height');
  const weight = document.getElementById('weight');
  const calcButton = document.getElementById('calcButton');
  const resetButton = document.getElementById('resetButton');
  if(age.value && height.value && weight.value){
      calcButton.disabled = false;
  }else{
      calcButton.disabled = true;
  }
  if(age.value || height.value || weight.value){
      resetButton.disabled = false;
  }else{
      resetButton.disabled = true;
  }
}

let calculateCalories = test => {
  const gender = document.querySelector('input[name="gender"]:checked');
  const age = document.getElementById('age');
  const height = document.getElementById('height');
  const weight = document.getElementById('weight');
  const activityMinimal = document.getElementById('activity-minimal');
  const activityLow = document.getElementById('activity-low');
  const activityMedium = document.getElementById('activity-medium');
  const activityHigh = document.getElementById('activity-high');
  const activityMaximal = document.getElementById('activity-maximal');
  const caloriesNorm = document.getElementById('calories-norm');
  const caloriesMinimal = document.getElementById('calories-minimal');
  const caloriesMaximal = document.getElementById('calories-maximal');

  let maleCalories = () => {
    return 5 + (10 * parseFloat(weight.value)) + (6.25 * parseFloat(height.value)) - (5 * parseFloat(age.value));
  }

  let femaleCalories = () => {
    return (10 * parseFloat(weight.value)) + (6.25 * parseFloat(height.value)) - (5 * parseFloat(age.value)) - 161;
  }

  if(gender.value === 'male' && activityMinimal.checked) {
      caloriesNorm.innerHTML = 1.2 * maleCalories();
    } else if(gender.value === 'male' && activityLow.checked) {
      caloriesNorm.innerHTML = 1.375 * maleCalories();
    } else if (gender.value === 'male' && activityMedium.checked) {
      caloriesNorm.innerHTML  = 1.55 * maleCalories();
    } else if(gender.value === 'male' && activityHigh.checked) {
      caloriesNorm.innerHTML = 1.725 * maleCalories();
    } else if(gender.value === 'male' && activityMaximal.checked) {
      caloriesNorm.innerHTML = 1.9 * maleCalories();
    } else if(gender.value === 'female' && activityMinimal.checked) {
      caloriesNorm.innerHTML = 1.2 * femaleCalories();
    } else if(gender.value === 'female' && activityLow.checked) {
      caloriesNorm.innerHTML = 1.375 * femaleCalories();
    } else if(gender.value === 'female' && activityMedium.checked) {
      caloriesNorm.innerHTML = 1.55 * femaleCalories();
    } else if(gender.value === 'female' && activityHigh.checked) {
      caloriesNorm.innerHTML = 1.725 * femaleCalories();
    } else if(gender.value === 'female' && activityMaximal) {
      caloriesNorm.innerHTML = 1.9 * femaleCalories();
    } 

    caloriesMinimal.innerHTML = caloriesNorm.innerHTML * 0.85;
    caloriesMaximal.innerHTML = caloriesNorm.innerHTML * 1.15;

    document.querySelector('.counter__result--hidden').style.visibility = 'visible';
    document.querySelector('.counter__result--hidden').style.opacity = '100';

       
}

