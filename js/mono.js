const getCurrencyRate = async () => {
  try {
    let request = await fetch("https://api.monobank.ua/bank/currency");
    if (!request.ok) throw new Error(request.status);
    let response = await request.json();
    localStorage.setItem("currencyRate", JSON.stringify(response));
  } catch (err) {
    console.log(err);
  }
};

const currencyCodes = {
  980: "UAH",
  840: "DOLL",
  978: "EUR"
};

export {getCurrencyRate, currencyCodes}
