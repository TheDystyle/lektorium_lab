//CONST
// 1 - output NAME and COMMENTS into consol
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');

// 2 - get summ from div -> insert into input field  
const firstSum = document.querySelector('.first_sum');
const secondSum = document.querySelector('.second_sum');
const thirdSum = document.querySelector('.third_sum');
const inputField = document.getElementById('sum');

// 3 - press "mono_pay" or "google_pay" -> get "Накопичено" + sum from input field
const monoPayButton = document.getElementById('mono_pay');
const collectedValue = document.querySelector('.collected_value');

// 4 - press "google_pay" -> get "Накопичено" + sum from input field
const googlePayButton = document.getElementById('google_pay');

// 5 - press "mono_pay" or "google_pay"
const targetValue = document.querySelector('.target_value');
const bankBgImage = document.getElementById('bank_bg');


// FUNCTIONS
// 1 - output NAME and COMMENTS into consol
googlePayButton.addEventListener('click', printToConsole);
monoPayButton.addEventListener('click', printToConsole);
function printToConsole(){
  if(inputField.value > 0){
  console.log('Ім\'я:' + firstName.value);
  console.log('Кментар: ' + lastName.value);
  console.log('Сума донату: ' + inputField.value);}
}

// 2 - get summ from div -> insert into input field 
//                +100
//                +500
//                +1000
firstSum.addEventListener('click', function() {
    inputField.value = firstSum.textContent;
});

secondSum.addEventListener('click', function() {
    inputField.value = secondSum.textContent;
});

thirdSum.addEventListener('click', function() {
    inputField.value = thirdSum.textContent;
});

// 3 - press "mono_pay" -> get "Накопичено" + sum from input field
monoPayButton.addEventListener('click', function() {
    let currentCollectedValue = parseFloat(collectedValue.textContent);
    let inputValue = parseFloat(inputField.value);
    let newCollectedValue = currentCollectedValue + inputValue;
    collectedValue.textContent = newCollectedValue;
    inputField.value = '0';
});

// 4 - press "google_pay" -> get "Накопичено" + sum from input field
googlePayButton.addEventListener('click', function() {
  let currentCollectedValue = parseFloat(collectedValue.textContent);
  let inputValue = parseFloat(inputField.value);
  let newCollectedValue = currentCollectedValue + inputValue;
  collectedValue.textContent = newCollectedValue;
  inputField.value = '0';
});

// 5 - press "mono_pay" or "google_pay"
// -> get "Накопичено" and "Ціль"
// -> found %
// -> change bank background 
googlePayButton.addEventListener('click',changeBankImage);
monoPayButton.addEventListener('click', changeBankImage);

function changeBankImage() {
    // get the current field values collectedValue, targetValue
    let currentValue = parseFloat(collectedValue.textContent.replace(/\s+/g, '')); // Удаляем пробелы между числами
    let goalValue = parseFloat(targetValue.textContent.replace(/\s+/g, '')); // Удаляем пробелы между числами

    let progressPercent = (currentValue / goalValue) * 100;

    let newSrc = "img/bank_0.png"; // По умолчанию

    if (progressPercent >= 0 && progressPercent < 25) {
        newSrc = "img/bank_0.png";
    } else if (progressPercent >= 25 && progressPercent < 50) {
        newSrc = "img/bank_25.png";
    } else if (progressPercent >= 50 && progressPercent < 100) {
        newSrc = "img/bank_50.png";
    } else if (progressPercent >= 100) {
        newSrc = "img/bank_100.png";
    }

    bankBgImage.src = newSrc;
}

