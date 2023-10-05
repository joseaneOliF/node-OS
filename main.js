//const app = document.querySelector("#app");
const fetchUrl = fetch("https://localhost:3001/stats")
  .then((response) => response.json())
  .then((data) => {
    return data;
  });
module.exports = fetchUrl;
