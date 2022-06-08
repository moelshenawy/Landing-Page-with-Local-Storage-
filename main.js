let buttonCard = document.querySelectorAll("#button_card");
let shopCar = document.querySelector(".shopCar i span ");
buttonCard.forEach((btn) => {
  btn.addEventListener("click", () => {
    cartNumbers();
  });
});

cartNumbers = () => {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    shopCar.textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    shopCar.textContent = 1;
  }
};

onLoadCartNumbers = () => {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    shopCar.textContent = productNumbers;
  }
};
onLoadCartNumbers();

// Get Current Year
let year = document.getElementById("year");
const currentYear = new Date().getFullYear();

year.textContent += `  © ${currentYear} Copyright`;
