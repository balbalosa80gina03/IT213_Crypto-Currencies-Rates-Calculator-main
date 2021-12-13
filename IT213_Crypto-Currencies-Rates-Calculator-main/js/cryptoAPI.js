const proxyURL = "https://cors-anywhere.herokuapp.com/";
const baseURL = 'https://pro-api.coinmarketcap.com/v1/';
const apiKey = 'CMC_PRO_API_KEY=3a0d7bd0-161a-4333-a­e04-555bd032ebe6';

const apiURL = `${proxyURL}${baseURL}`;
console.log(apiURL);

class CryptoAPI {

    // Query the REST API
    async queryAPI(cur, crypto) {
        const url = await fetch(`${apiURL}tools/price-conversion?amount=1&id=${crypto}&convert=${cur}&${apiKey}`);

        const conversion = await url.json();

        return {
            conversion
        }
    }

    async getCryptoCurrenciesList() {
        const url = await  fetch(`${apiURL}cryptocurrency/map?limit=99&${apiKey}`);

        const cryptoCurrencies = await url.json();

        return {
            cryptoCurrencies
        }
    }
}