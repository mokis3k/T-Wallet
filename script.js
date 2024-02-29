import { getCurrencyRate, currencyCodes } from "./js/mono.js";

getCurrencyRate();
const currencyRate = JSON.parse(localStorage.getItem("currencyRate"));
// console.log(currencyRate);

currencyRate.map((rate) => {
  //   debugger;
  Object.keys(rate).map((key) => {
    if (
      (!rate["rateCross"] && rate[key] === 980) ||
      rate[key] === 840 ||
      rate[key] === 978
    ) {
      console.log(
        `${currencyCodes[rate["currencyCodeA"]]} ${rate["rateBuy"]} ${
          currencyCodes[rate["currencyCodeB"]]
        }`
      );
      console.log(
        `${currencyCodes[rate["currencyCodeA"]]} ${rate["rateSell"]} ${
          currencyCodes[rate["currencyCodeB"]]
        }`
      );
    }
  });
});
