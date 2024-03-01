const currencyRateTable = document.querySelector("#currencyRate");
const currencyCodes = {
  980: "UAH",
  840: "USD",
  978: "EUR",
};
let currencyRate;

const renderCurrencyRate = () => {
  const tbody = document.createElement("tbody");
  currencyRate.map((ratePair) => {
    if (!ratePair["rateCross"]) {
      const tr = document.createElement("tr");
      let ratePairArr = Object.entries(ratePair);
      [ratePairArr[1], ratePairArr[ratePairArr.length - 1]] = [
        ratePairArr[ratePairArr.length - 1],
        ratePairArr[1],
      ];
      ratePairArr.map((entryPair) => {
        if (entryPair[0] !== "date") {
          const td = document.createElement("td");
          td.innerHTML =
            entryPair[0] === "currencyCodeA" || entryPair[0] === "currencyCodeB"
              ? currencyCodes[entryPair[1]]
              : entryPair[1].toFixed(2);
          tr.append(td);
        }
      });
      tbody.append(tr);
    }
  });
  currencyRateTable.append(tbody);
};

const getCurrencyRate = async () => {
  try {
    let request = await fetch("https://api.monobank.ua/bank/currency");
    if (!request.ok) throw new Error(request.status);
    let response = await request.json();
    localStorage.setItem("currencyRate", JSON.stringify(response));
    currencyRate = JSON.stringify(response);
    renderCurrencyRate();
  } catch (err) {
    console.log(err);
    currencyRate = JSON.parse(localStorage.getItem("currencyRate"));
    renderCurrencyRate();
  }
};

// let currencyRate = localStorage.getItem("currencyRate")
//   ? JSON.parse(localStorage.getItem("currencyRate"))
//   : getCurrencyRate();

export { getCurrencyRate };
