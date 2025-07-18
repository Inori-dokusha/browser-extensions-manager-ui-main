// fect data from data/data.json
fetch("./src/data/data.json")
  .then((response) => response.json())
  .then((response) => {
    getItems(response);
  });

function getItems(items) {
  cards = "";
  items.forEach((item) => {
    cards += showItems(item);
  });
  const container = document.querySelector(".extensions");
  container.innerHTML = cards;
  clicked();
}

function clicked() {
  document.addEventListener("click", async function (e) {
    const t = e.target.chill(".cirlce");
    console.log(t);
  });
}

function showItems(i) {
  return `<div class="cards">
            <div class="row">
              <div class="row-1">
                <div class="icon">
                  <img src="${i.logo}">
                </div>
                <div class="info">
                  <span>${i.name}</span>
                  <p>${i.description}</p>
                </div>
              </div>
              <div class="row-2">
                <button class="remove">Remove</button>
                <div class="spinner" id="${i.isActive}">
                  <div class="circle"></div>
                </div>
              </div>
            </div>
          </div>`;
}
