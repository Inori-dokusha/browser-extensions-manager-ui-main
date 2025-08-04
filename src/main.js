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
    toggleDarkmode();
}

function clicked() {
    const cards = document.querySelectorAll('.cards');
    const circle = document.querySelectorAll(".circle");
    cards.forEach(items => {
        items.addEventListener("click", e => {
            if (e.target.matches(".spinner") || e.target.matches(".circle")) {
                circle.forEach((c) => {
                    if (c == e.target || c.parentElement == e.target) {
                        c.classList.toggle("non-active");
                        c.parentElement.classList.toggle("bg-color");
                    }
                });
            }
        });
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

// Darkmode
function toggleDarkmode(path) {
    path = {
        dark: "assets/images/icon-moon.svg",
        light: "assets/images/icon-sun.svg"
    };
    const toggle = document.querySelector(".toggle");
    const icon = document.querySelector(".toggle .icon img");
    toggle.addEventListener("click", async () => {
        const attr = icon.getAttribute('src');
        if (attr === path.dark) {
            icon.setAttribute("src", path.light);
            // Toggle theme
            document.documentElement.setAttribute('data-theme', 'dark');
            // Simpan preferensi
            localStorage.setItem('theme', 'dark');
        } else {
            icon.setAttribute("src", path.dark)
        }
        
    })
}