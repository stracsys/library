window.onload = function () {
  const btnEpreuves = document.querySelectorAll(".btn-epreuves");
  const btnMesEpreuves = document.querySelectorAll(".btn-mes-epreuves");

  const epreuves = document.querySelector("#epreuves");
  const mesEpreuves = document.querySelector("#mes-epreuves");

  const showEpreuves = () => {
    if (mesEpreuves.classList.contains("grid")) {
      mesEpreuves.classList.remove("grid");
      mesEpreuves.classList.add("hidden");
    }

    if (!epreuves.classList.contains("grid")) {
      epreuves.classList.remove("hidden");
      epreuves.classList.add("grid");

      for (let i = 0; i < btnMesEpreuves.length; i++) {
        btnMesEpreuves[i].classList.remove("bg-white");
      }
      for (let i = 0; i < btnEpreuves.length; i++) {
        btnEpreuves[i].classList.add("bg-white");
      }
    }
  };

  const showMesEpreuves = () => {
    if (epreuves.classList.contains("grid")) {
      epreuves.classList.remove("grid");
      epreuves.classList.add("hidden");
    }

    if (!mesEpreuves.classList.contains("grid")) {
      mesEpreuves.classList.remove("hidden");
      mesEpreuves.classList.add("grid");

      for (let i = 0; i < btnEpreuves.length; i++) {
        btnEpreuves[i].classList.remove("bg-white");
      }
      for (let i = 0; i < btnMesEpreuves.length; i++) {
        btnMesEpreuves[i].classList.add("bg-white");
      }
    }
  };

  for (let i = 0; i < btnEpreuves.length; i++) {
    btnEpreuves[i].addEventListener("click", (event) => showEpreuves());
  }

  for (let i = 0; i < btnMesEpreuves.length; i++) {
    btnMesEpreuves[i].addEventListener("click", (event) => showMesEpreuves());
  }
};
