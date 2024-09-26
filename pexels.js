const apiKey = "s5M72eMpZLLvhekseg2Yvi7Uswvyy36a9sd5JgL8sLYZEuWeFQ40v9CV";
const pexelsmotoURL = "https://api.pexels.com/v1/search?query=moto";
const pexelswomanURL = "https://api.pexels.com/v1/search?query=woman";
const card = document.querySelectorAll(".card");

const fetchImagesmoto = function () {
  fetch(pexelsmotoURL, {
    headers: { Authorization: apiKey },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella lettuare delle immagini");
      }
    })
    .then((arrayimgs) => {
      console.log(arrayimgs);
      const load = document.querySelector(".btn-primary");
      load.addEventListener("click", (e) => {
        e.preventDefault();
        card.forEach((element, i) => {
          const imgCard = element.querySelector("img");
          imgCard.src = arrayimgs.photos[i].src.medium;
          const small = element.querySelector(".text-muted");
          small.textContent = arrayimgs.photos[i].id;
        });
      });
    })
    .catch((error) => {
      console.log("error");
    });
};

fetchImagesmoto();

const fetchImageswoman = function () {
  fetch(pexelswomanURL, {
    headers: { Authorization: apiKey },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella lettuare delle immagini");
      }
    })
    .then((arrayimgs) => {
      console.log(arrayimgs);
      const load = document.querySelector(".btn-secondary");
      load.addEventListener("click", (e) => {
        e.preventDefault();
        card.forEach((element, i) => {
          const imgCard = element.querySelector("img");
          console.log(arrayimgs.photos[i].src.medium);
          imgCard.src = arrayimgs.photos[i].src.medium;
          const small = element.querySelector(".text-muted");
          small.textContent = arrayimgs.photos[i].id;
        });
      });
    })
    .catch((error) => {
      console.log("error");
    });
};

fetchImageswoman();

const funHide = function () {
  const btnEdit = document.querySelectorAll(".btn-outline-secondary");
  const editButtons = Array.from(btnEdit).filter(
    (button) => button.textContent.trim() === "Edit"
  );
  editButtons.forEach((p) => {
    p.innerText = "Hide";
    p.addEventListener("click", () => {
      const singleCard = p.closest(".card");
      if (singleCard) {
        singleCard.classList.add("d-none");
      }
    });
  });
};

funHide();
