/*  ДЗ Пример с животными: Класс: млекопитающих, кошачьи, прямоходящие.
Сделать один общий класс, от него унаследовать еще классы (несколько видов от каждого класса)

Переопределить какую-нибудь функцию, к примеру speak() (Звуки животных), walk

*/

class animalClasses {
  constructor(speed, sound, name) {
    this.speed = speed;
    this.sound = sound;
    this.name = name;
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

const animalClass = new animalClasses();
animalClass.speak("Мяу");
animalClass.walk("5");
animalClass.call("Cat");

class dog extends animalClasses {
  speed = 0;
  run() {
    this.speed = 30;
  }
  walk() {
    super.walk();
    this.run;
  }
}

const dogClass = new dog();

dogClass.walk();
