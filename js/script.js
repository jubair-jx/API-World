const fetchData = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => fetchTheData(data));
};

function fetchTheData(data) {
  let getId = document.getElementById("quote");
  getId.innerHTML = `
  ${data.quote}

    `;
}
