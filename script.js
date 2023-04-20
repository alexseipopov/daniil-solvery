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

//      input

const inputEl = document.querySelector("#input");
const inputLabel = document.querySelector("#inputLabel");

// установить, получить, очистить весь, удалить один элемент.

const saveEl = (e) => {
  localStorage.setItem("test", e.target.value);
};

inputEl.addEventListener("change", saveEl);

inputLabel.innerHTML = localStorage.getItem("test");

// classes

class randomClass {
  constructor(a, b) {
    this._a = a;
    this._b = b;
    this.c = 10;
    this.d = 0;
  }
  randomFunc() {
    this.d = this._a + this.c;
  }
}

const obj = new randomClass(10, 20);
const obj2 = new randomClass(12, 21);

obj.randomFunc();
console.log(obj.d);

class someClass extends randomClass {
  randomFunc() {
    super.randomFunc();
    this.d = 25;
  }
}
const obj3 = new someClass(12, 21);

obj3.randomFunc();

console.log(obj3.d);
