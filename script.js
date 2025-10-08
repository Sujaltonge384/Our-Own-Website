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


// Add Success Message to form subbmission

const form = document.querySelector("form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      alert("✅ Message sent successfully!");
      form.reset();
    } else {
      alert("❌ Something went wrong. Please try again.");
    }
  });


  // for 

  import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yourpersonalemail@gmail.com",
      pass: "your-app-password"
    }
  });

  const mailOptions = {
    from: email,
    to: "yourpersonalemail@gmail.com",
    subject: `New message from ${name}`,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false, error });
  }
});

app.listen(3000, () => console.log("Server started"));
