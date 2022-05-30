const feedback = document.querySelector('#feedback');
const number = document.querySelector('#number');
const submit = document.querySelector('#submit');
const container = document.querySelector('#numbers-container');

submit.addEventListener('click', () => {
  let val = number.value;
  if(typeof(Number(val)) === "number" && Number(val) > 0) {
    container.innerHTML = '';
    feedback.textContent = '';
    number.value = '';
    for(let i = 0; i <= val; i++) {
      let numbers = document.createElement('div')
      numbers.style.width = '100px';
      numbers.style.height= '100px';
      numbers.style.display = 'flex';
      numbers.style.justifyContent = 'center';
      numbers.style.alignItems = 'center';
      numbers.textContent = i;
      numbers.style.color = 'white';
      numbers.style.fontSize = '40px';
      numbers.style.fontWeight = '700';
      if(i % 2 === 0) {
        numbers.style.backgroundColor = 'rgb(10, 179, 10)';
        numbers.style.margin = '3px';
        container.appendChild(numbers);
      } else {
        numbers.style.backgroundColor = 'rgb(231, 231, 46)';
        numbers.style.margin = '3px';
        container.appendChild(numbers);
      }

      let flag = 0
      for(let j = 2; j < i; j++) {
        if(i % j === 0) {
          flag = 1
        }
      }
      if(i > 1 && flag === 0){
        numbers.style.backgroundColor = 'rgb(175, 28, 28)'
      }
    }
  }else if(val.length === 0) {
    feedback.textContent = 'Enter a number to generate numbers';
    number.value = ''
    container.innerHTML = '';
  }else if(typeof(val) === 'string') {
    feedback.textContent = 'Please enter number values only';
    number.value = ''
    container.innerHTML = '';
  } 
})