// Endpoint URL for exchange rates API
const API_KEY = 'a0698959b294944d4165397f';
const BASE_URL = 'https://v6.exchangerate-api.com/v6';
const ENDPOINT = 'latest/USD';

// Construct the full URL
const url = `${BASE_URL}/${API_KEY}/${ENDPOINT}`;

// Function to fetch and display exchange rates
// async function fetchData() {

  fetch(url)
  .then(response => response.json())
  .then((data) => {
    const exchangeResult = document.getElementById('exchange-result')
    // const option = document.createElement('option');
    const covertBtn = document.getElementById('convert-btn')
    const inputBox = document.getElementById('input-box');
    const baseCurrency = document.getElementById('base-currency');
    baseCurrency.placeholder = data.base_code

      // Create and append the select dropdown for target currency
  const targetCurrency = document.createElement('select');
  targetCurrency.id = 'target-currency'; // Add an ID for easier access later
  inputBox.append(targetCurrency);

  // Populate the dropdown with currency options
  Object.keys(data.conversion_rates).forEach((key) => {
    const option = document.createElement('option');
    option.value = data.conversion_rates[key];
    // console.log(option.value)
    option.textContent = key;
    targetCurrency.appendChild(option);

  })
  
  covertBtn.addEventListener('click', () =>{
    // console.log(option)
    const amount = parseFloat(baseCurrency.value);
    const rate = parseFloat(targetCurrency.value);

    if(!isNaN(amount)){
      const conversion = (amount * rate).toFixed(2);
      exchangeResult.innerText = `USD ${baseCurrency.value} is ${targetCurrency.selectedOptions[0].text} ${conversion}`;
    }

  })

})
//   try {
//     // Fetch data from the API
//     const response = await fetch(url);
//     // console.log(data)

//     // Check for successful response
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data);

//     // Populate the currency data
//     renderCurrencyDropdown(data.rates);
  
// // }

// // Function to render the dropdown with currency options
// // function renderCurrencyDropdown(rates) {
 

//   // Create and append the select dropdown for target currency
//   const targetCurrency = document.createElement('select');
//   targetCurrency.id = 'target-currency'; // Add an ID for easier access later
//   inputBox.append(targetCurrency);

//   // Populate the dropdown with currency options
//   Object.keys(rates).forEach((key) => {
//     const option = document.createElement('option');
//     option.value = key;
//     option.textContent = key;
//     targetCurrency.appendChild(option);
//   });
// } catch (error) {
//   console.error("Error fetching data:", error);
// }
// }

// Call the function to fetch and display data
// fetchData();