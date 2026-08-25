// IR Studio Website JavaScript

console.log("IR Studio website loaded successfully");


// SEARCH FUNCTION

const searchButton = document.querySelector(".search-box button");
const searchInput = document.querySelector(".search-box input");

if (searchButton && searchInput) {

  searchButton.addEventListener("click", function () {

    const searchText = searchInput.value.trim();

    if (searchText === "") {
      alert("Please enter a product name.");
      return;
    }

    alert("Searching for: " + searchText);

  });

}


// ORDER FORM

const orderForm = document.querySelector(".order-box form");

if (orderForm) {

  orderForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Order request submitted successfully!");

  });

}
