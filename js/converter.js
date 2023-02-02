class Convert{
    constructor(startCurrency, endCurrency){
        this.startCurrency = startCurrency;
        this.endCurrency = endCurrency;
    }
    async convert(value){
        const response = await fetch(`https://api.frankfurter.app/latest?amount=${value}&from=${this.startCurrency}&to=${this.endCurrency}`);
        const data = await response.json();
        return data;
    }
}
