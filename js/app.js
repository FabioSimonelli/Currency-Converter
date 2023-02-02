document.querySelector("#submit-button").addEventListener("click", submitConvert);

function submitConvert(e) {
  const inputValue = document.querySelector("#amount").value;
  if (inputValue.trim() !== "") {
    const inputFromCurrency = document.querySelector("#from-currency").value;
    const inputToCurrency = document.querySelector("#to-currency").value;
    const converter = new Convert(inputFromCurrency, inputToCurrency);
    const ui = new UI();
    converter.convert(inputValue)
      .then((data) => ui.insertData(data, inputToCurrency))
      .catch((error) => console.log(error));
  }
  else{
    document.querySelector("form").classList.add("shaking");
  }
  e.preventDefault();
}

document.querySelector("form").addEventListener("animationend", function() {
    this.classList.remove("shaking");
});
  
