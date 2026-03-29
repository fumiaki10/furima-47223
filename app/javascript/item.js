
document.addEventListener("turbo:load", () => {
  const priceInput = document.getElementById("item-price");

  if (!priceInput) return;

  priceInput.addEventListener("input", () => {
    const price = parseInt(priceInput.value, 10);

    if (isNaN(price)) {
      document.getElementById("add-tax-price").textContent = "0";
      document.getElementById("profit").textContent = "0";
      return;
    }

    const tax = Math.floor(price * 0.1);
    const profit = price - tax;

    document.getElementById("add-tax-price").textContent = tax;
    document.getElementById("profit").textContent = profit;
  });
});