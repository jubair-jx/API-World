const randomFetch = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => getFetchData(data));
};

const getFetchData = (data) => {
  let getId = document.getElementById("gender");
  getId.innerHTML = data.results[0].gender;

  let nameId = document.getElementById("name");
  nameId.innerHTML =
    data.results[0].name.first + "  " + data.results[0].name.last;

  let getImgId = document.getElementById("img-div");
  let newImg = document.createElement("div");
  newImg.innerHTML = `
        <img src="${data.results[0].picture.large}">
    `;
  getImgId.appendChild(newImg);
  console.log(data.results[0]);
};
randomFetch();
