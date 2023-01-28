"use strict";

// class Person {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }
// }

// class Employee extends Person {
//   constructor(name, surname, job, salary) {
//     super(name, surname);
//     this.job = job;
//     this.salary = salary;
//   }
//   getData() {
//     return `${this.name} ${this.surname} ${this.salary}`;
//   }
//   getSalary() {
//     return this.salary;
//   }
//   increaseSalary() {
//     // return (this.salary * 10) / 100;
//     return (this.salary *= 1.1);
//   }
// }

// class Developer extends Employee {
//   constructor(name, surname, job, salary, specialization) {
//     super(name, surname, job, salary);
//     this.specialization = specialization;
//   }
//   getSpecialization() {
//     console.log(`${this.specialization} is his specialization !!!`);
//     return this;
//   }
// }

// class Manager extends Employee {
//   constructor(name, surname, job, salary, department) {
//     super(name, surname, job, salary);
//     this.department = department;
//   }
//   getDepartment() {
//     console.log(`${this.department} is his department !!!`);
//   }
//   changeDepartment(dep) {
//     return (this.department = dep);
//   }
// }

// const personOne = new Person("andrija", "cvorovic");
// const employeOne = new Employee("milan", "vaskovic", "dizajner", 150);
// const developerOne = new Developer(
//   "bee",
//   "mnisi",
//   "developer",
//   "15k",
//   "webflow"
// );

// const managerOne = new Manager("aki", "mnisi", "manager", "144k", "elementor");

// // console.log(managerOne.changeDepartment("skola"));
// // console.log(managerOne);

// // console.log(employeOne.getData());
// // console.log(employeOne.increaseSalary());
// // console.log(employeOne.getSalary());

// class App {
//   constructor(name, licence, stars) {
//     this.name = name;
//     this.licence = licence;
//     this.stars = stars;
//   }
//   isCCLicence() {
//     return this.licence == "common" ? "Licence is CC" : "Netacno";
//   }
//   like() {
//     this.stars++;
//     console.log(this.stars);
//   }
//   showStars() {
//     console.log(this.stars);
//   }
// }

// class WebApp extends App {
//   constructor(name, url, licence, stars) {
//     super(name, licence, stars);

//     this.url = url;
//     this.technologies = [];
//   }
//   addTechnology(technology) {
//     this.technologies.push(technology);
//   }
//   getData() {
//     return this;
//   }
//   reactBased() {
//     if (this.technologies == "react") {
//       console.log("true");
//     }
//   }
// }

// class MobileApp extends App {
//   constructor(name, licence, stars, platforms) {
//     super(name, licence, stars);
//     this.platforms = platforms;
//   }
//   getData() {
//     return this;
//   }
//   forAndroid() {
//     return this.platforms == "android" ? "true" : "false";
//   }
// }

// let webApp = new WebApp("andrija", "googl.com", "java script", "1");

// webApp.addTechnology("react");

// let mobileApp = new MobileApp("rada", "common", "1", "android");

// // let app = new App();

// // console.log(JSON.stringify(webApp));
// // console.log(mobileApp);

// // app.isCCLicence("da");
// console.log(webApp.like());

// $("h1").addClass("big-title margin-50");
// console.log($("h1").css("font-size"));
// $("h1").removeClass("big-title");
// $("h1").hasClass("margin-50");

// $("h1").text("Bye");
// $("button").html("<em>Hey</em>");

/////////////////////////////////////////////////////////////

// 1.
// a)Create a Car class with properties (brand, model, motion) and methods (check motion, accelerate, break).
// Check motion method should check the speed and returns if the car are in move or not (speed is greater than zero). Accelerate method should increase the speed for some number we provide.
// Break method should decrease the speed for the number we provided (pay attention if the speed is negative number after decreasing).
// b) Add the status method that displays all current data for the car (model, brand, motion state, speed => something like "Ford Mondeo is running at 150km/h, car is moving").
// c) Add a new method to stop the car immediately (set the speed to 0). It doesn't need parameters.
// d) Create a 3 car objects and test it!

// let speed = 50;
// let accSpeed;

class Car {
  constructor(brand, model, motion, speed, acc) {
    this.brand = brand;
    this.model = model;
    this.motion = motion;
    this.speed = speed;
    this.acc = acc;
  }
  checkMotion() {
    return this.speed > 0 ? true : false;
  }
  accelerate() {
    this.acc = Math.round(Math.random() * 201);
    return this.acc;
  }
  newSpeed() {
    this.accelerate();
    return (this.speed += this.acc);
  }
  break() {
    this.accelerate();
    this.speed -= this.acc;

    if (this.speed < 0) {
      console.log(`Car is Stoped!!! ${this.speed}`);
    } else {
      console.log(`Car is moving ! ${this.speed}`);
    }
    return;
  }
  status() {
    this.accelerate();
    return this;
  }
  stop() {
    return (this.speed = 0);
  }
}
// this.accelerate();

let car = new Car("Ford", "Focus", "Moving", 50, 0);
let car1 = new Car("BMW", "520i", "Stop", 20, 0);
let car2 = new Car("Toyota", "Yaris", "Moving", 100, 0);
// car.accelerate();

// console.log(car1.break());

function Tv(brand, channel = 1, volume = 50, value) {
  if (channel < 50) {
    this.channel = channel;
  } else {
    channel;
  }
  this.brand = brand;

  this.volume = volume;

  this.value = value;
}
Tv.prototype.increaseVolume = function () {
  if (this.volume > 0 && this.volume < 100) {
    return (this.volume += this.value);
  }
};
Tv.prototype.decreaseVolume = function () {
  if (this.volume > 0 && this.volume < 100) {
    return (this.volume -= this.value);
  }
};
// Tv.prototype.setChanel = function () {
//   if (this.channel >= 1 && this.channel <= 50) {
//     return this.channel;
//   } else {
//   }
// };
let tv = new Tv("sony", 70, 79, 12);
console.log(tv);
