/*  ДЗ Пример с животными: Класс: млекопитающих, кошачьи, прямоходящие.
Сделать один общий класс, от него унаследовать еще классы (несколько видов от каждого класса)

Переопределить какую-нибудь функцию, к примеру speak() (Звуки животных), walk

*/

class animalClasses {
  constructor(speed, sound, call) {
    this.speed = speed;
    this.sound = sound;
    this.call = call;
  }
  call(name) {
    this.name = name;
    console.log(this.name);
  }
  speak(sound) {
    this.sound = sound;
    console.log(this.sound);
  }
  walk(speed) {
    this.speed = speed;
    console.log(this.speed);
  }
}

const animalClass = new animalClasses(5, "Мяу", "Cat");
animalClass.speak();

class dog extends animalClasses {
  call(name) {
    super.call();
    this.name = "Dog";
  }
  speak(sound) {
    super.speak();
    this.sound = "Гав";
  }
  walk(speed) {
    super.walk();
    this.speed = 5;
  }
}

const dogClass = new dog(15, "Гав", "Dog");

dogClass.walk();
