import { getCurrencyRate } from "./js/cuurencyRate.js";

const dateContainer = document.querySelector("#dateContainer");

const renderCurrentDate = (DOMelem) => {
  let currentDate = new Date();
  const date = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  DOMelem.innerHTML = `${date < 10 ? `0${date}` : date}.${
    month + 1 < 10 ? `0${month + 1}` : month + 1
  }.${year}`;
};

getCurrencyRate();
renderCurrentDate(dateContainer);
