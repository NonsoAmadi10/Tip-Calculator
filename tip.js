let tip = document.querySelector('#bill').value;
const button = document.querySelector('#button');
const label = document.getElementsByClassName('label');
const people = document.querySelector('#persons').value;

button.addEventListener('click',  function calculate(){
    let tip = document.querySelector('#bill').value;
  let tax = 0.19;
  let salesTax = parseInt(tip) * tax;
  let total = parseInt(tip) + salesTax;
  const people = document.querySelector('#persons').value;
  let sharing = Math.floor(total / people);

  let form =  document.querySelector('form');
  form.textContent = "The tip would be shared at " + sharing + " dollars  each for " + people +" persons while taking into consideration the VAT of 19.8% being added on every purchase\nThank you for your time!";
  

});

