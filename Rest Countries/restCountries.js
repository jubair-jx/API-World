const getRestCountry = () => {
  let url = `https://restcountries.com/v3.1/all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showTheData(data));
};

function showTheData(data) {
  let getIdFromHtml = document.getElementById("show-data");

  data.map((newData) => {
    let createDiv = document.createElement("div");
    createDiv.innerHTML = `
    <div class=" mx-auto g-6">
    <div class="col">
      <div class="card">
        <img src="${newData.flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Country Name: ${newData.name.common}</h5>
          <p class="card-text">Capital:${
            newData.capital ? newData.capital[0] : "Here Is No Capital"
          } </p>
        </div>
      </div>
    </div>
    </div>
        `;
    getIdFromHtml.appendChild(createDiv);
    console.log(newData.capital[0]);
  });

  console.log(data);
}
getRestCountry();
