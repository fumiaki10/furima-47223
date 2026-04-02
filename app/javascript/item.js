console.log("item.js loaded");

const price = () => {



  const priceInput = document.getElementById("item-price");

  if (!priceInput) return;

  priceInput.addEventListener("input", () => {
    const priceValue = parseInt(priceInput.value, 10);

    if (isNaN(priceValue)) {
      document.getElementById("add-tax-price").textContent = "";
      document.getElementById("profit").textContent = "";
      return;
    }

    const tax = Math.floor(priceValue * 0.1);
    const profit = priceValue - tax;

    document.getElementById("add-tax-price").textContent = tax;
    document.getElementById("profit").textContent = profit;
  });
};

window.addEventListener("turbo:load", price);
window.addEventListener("turbo:render", price);