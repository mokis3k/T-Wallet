const nameSpan = document.querySelector("#name");
const balanceSpan = document.querySelector("#balance");

export const getData = async () => {
  try {
    let request = await fetch("https://api.monobank.ua/personal/client-info", {
      method: `GET`,
      headers: {
        "Content-type": "application/json",
        "X-Token": "ub8wfjfAMt-SrFDNbKmfxhCMpwxUK2xuKkM4tMS-Eq8E",
      },
    });
    if (!request.ok) throw new Error(request.status);
    let response = await request.json();
    renderData(response);
  } catch (err) {
    console.log(err);
  }
};

const renderData = (data) => {
  console.log(data);
  let name = data.name;
  let balance = data.accounts[0].balance / 100;
  nameSpan.innerHTML = name;
  balanceSpan.innerHTML = `${balance}`;
};
