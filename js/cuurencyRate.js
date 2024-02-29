const currencyRateTable = document.querySelector("#currencyRate");
const currencyCodes = {
  980: "UAH",
  840: "USD",
  978: "EUR",
};

const formCurrencyList = (codeA, rateBuy, rateSell, codeB) => {
  return `${codeA} ${rateBuy.toFixed(2)} ${rateSell.toFixed(2)} ${codeB}`;
};

// const renderCurrencyRate = () => {
//   currencyRate.map((ratePair) => {
//     if (!ratePair["rateCross"]) {
//       const tbody = document.createElement("tbody");
//       const tr = document.createElement("tr");
//       const td = document.createElement("td");

//       const li = document.createElement("li");
//       li.className = "currency--li";
//       li.innerHTML = formCurrencyList(
//         currencyCodes[ratePair["currencyCodeA"]],
//         ratePair["rateBuy"],
//         ratePair["rateSell"],
//         currencyCodes[ratePair["currencyCodeB"]]
//       );
//       currencyRateTable.append(li);
//     }
//   });
// };

const renderCurrencyRate = () => {
  const tbody = document.createElement("tbody");
  currencyRate.map((ratePair) => {
    if (!ratePair["rateCross"]) {
      const tr = document.createElement("tr");
      Object.entries(ratePair).map((entryPair) => {
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
  } catch (err) {
    console.log(err);
  }
};

let currencyRate = localStorage.getItem("currencyRate")
  ? JSON.parse(localStorage.getItem("currencyRate"))
  : getCurrencyRate();

export { renderCurrencyRate };
