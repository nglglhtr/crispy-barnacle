module.exports = {
  env: "prod",
  local: {
    domain: "http://localhost:3000"
  },
  staging: {
    domain: "https://testing-gift-api.herokuapp.com"
  },
  prod: {
    domain: "http://api.kernel.community"
  }
};