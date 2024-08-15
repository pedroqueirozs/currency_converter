const USD = 4.37;
const EUR = 5.32;
const GBP = 6.08;

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

amount.addEventListener("input", () => {
  /*Removendo os valores de texto do input - O Input nao aceita valores de texto (D) Maiusculo 
  Se refere a letras*/
  const hasCaracteresRegex = /\D+/g;
  amount.value = amount.value.replace(hasCaracteresRegex, "");
});

/* Capturando o evento de submit do formulario */
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "US€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

/* Função para converter a moeda */

function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;
    let total = amount * price;

    if (isNaN(total)) {
      alert("Digite um valor valido ");
    }
    total = formatCurrencyBRL(total).replace("R$", "");
    result.textContent = `${total} Reais`;

    footer.classList.add("show-result");
  } catch (error) {
    footer.classList.remove("show-result");
    alert("Não foi possivel converter! Tente novamente.");
  }
}

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
