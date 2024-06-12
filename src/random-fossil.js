import axios from "axios";

const randomButton = document.querySelector("#get-random-fossil");

async function getRandomFossil() {
  const res = await axios.get("/random-fossil.json");

  const fossilImg = res.data.img;
  const fossilName = res.data.name;
  const imgDiv = document.querySelector("#random-fossil-image");
  const nameP = document.querySelector("#random-fossil-name");

  imgDiv.innerHTML = `<img src="${fossilImg}" alt="${fossilName}" />`;
  nameP.innerText = fossilName;
}

randomButton.addEventListener("click", getRandomFossil);
