// Cart demo using localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".product-card .btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const product = e.target.parentElement.querySelector("h3").innerText;
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(product + " added to cart!");
  });
});

// Contact form alert
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for reaching out. We'll contact you soon!");
});
