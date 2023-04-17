const modalWindow = document.querySelector("#modal");

document.querySelector("#openModal").addEventListener("click", () => {
  tmp(".modal__content");
  modalWindow.classList.toggle("open");
});

modalWindow.addEventListener("click", (e) => {
  e.target.classList.toggle("open");
});

const tmp = (selector) => {
  const target = document.querySelector(selector);
  target.classList.remove("close");
  modalWindow.append(target);
};

const modalBtn = document.querySelector(".modal__btn ");

modalBtn.addEventListener("click", () => {
  modalWindow.classList.toggle("open");
});

// accordion

document.querySelectorAll(".accordion-item").forEach((elem) => {
  const content = elem.querySelector(".accordion__content");
  const headerBtn = elem.querySelector(".accordion__header--btn");
  headerBtn.addEventListener("click", (e) => {
    document.querySelectorAll(".accordion-item").forEach((elem_) => {
      elem_.querySelector(".accordion__content").classList.remove("open");
      elem_
        .querySelector(".accordion__header--btn")
        .classList.remove("rotated");
    });
    e.target.classList.toggle("rotated");
    content.classList.toggle("open");
  });
});
