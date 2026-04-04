document.addEventListener("turbo:load", () => {
  const form = document.getElementById("charge-form");
  if (!form) return;

  const publicKey = gon.public_key;
  if (!publicKey) return;

  const payjp = Payjp(publicKey);
  const elements = payjp.elements();

  const numberElement = elements.create("cardNumber");
  const expiryElement = elements.create("cardExpiry");
  const cvcElement = elements.create("cardCvc");

  numberElement.mount("#number-form");
  expiryElement.mount("#expiry-form");
  cvcElement.mount("#cvc-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    payjp.createToken(numberElement)
      .then((response) => {
        if (response.error) {
          alert(response.error.message);
        } else {
          const token = response.id;

          const tokenInput = document.createElement("input");
          tokenInput.setAttribute("type", "hidden");
          tokenInput.setAttribute("name", "token");
          tokenInput.setAttribute("value", token);

          form.appendChild(tokenInput);
          form.submit();
        }
      })
      .catch((error) => {
        console.error(error);
        alert("トークンの生成に失敗しました");
      });
  });
});