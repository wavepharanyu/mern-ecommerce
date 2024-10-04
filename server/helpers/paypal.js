const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "Aasu3wqePmFp6EnGtC2cTy7zlKs9-jmxRQS3thzj4lCYerVx5zGlN4QKRtx_A8reydfhTTfTEcogfkq9",
  client_secret: "EPGBKyYLszOuT4jwyWMO0He6MMNZ3YWVphIpmudMQwb_ncrxayMbVbPiWSwnGk7_xQGwbMjSEBLn3S9F",
});

module.exports = paypal;