/*  ДЗ Пример с животными: Класс: млекопитающих, кошачьи, прямоходящие.
Сделать один общий класс, от него унаследовать еще классы (несколько видов от каждого класса)

Переопределить какую-нибудь функцию, к примеру speak() (Звуки животных), walk

*/

class animalClasses {
  constructor(options) {
    this.sound = options.sound;
    this.name = options.name;
  }
  call() {
    console.log("i am animal!");
  }
}

const animalClass = new animalClasses({
  color: "white",
  name: "cat",
  sound: "Meow",
});

class dog extends animalClasses {
  constructor(options) {
    super(options);
    this.color = options.color;
  }
  voice() {
    console.log("Dog");
  }
  call() {
    super.call();
    console.log("I am not a cat!");
    console.log("Guess who i am!");
  }
}

const dogClass = new dog({
  color: "black",
  name: "Dog",
  sound: "Гав",
});

dogClass.call();
