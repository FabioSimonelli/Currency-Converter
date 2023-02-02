class UI{
    constructor(){
        this.convertedAmount = document.querySelector("#convertedAmount");
        this.rounding = document.querySelector("#rounding");
    }
    insertData(data, endCurrency){
        this.convertedAmount.textContent = this.rounding.checked ? (Math.round(parseFloat(data.rates[endCurrency] + endCurrency))) : (data.rates[endCurrency] + endCurrency);
    }
}