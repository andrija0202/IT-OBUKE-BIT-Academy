"use strict";

// (function () {
//   console.log("Hi!");

//   function Person(name, surname) {
//     this.name = name;
//     this.surname = surname;
//     this.getData = function () {
//       return this.name + " " + this.surname;
//     };
//   }

//   function Seat(number, category = "e") {
//     this.number = number;
//     this.category = category;
//     this.getData = function () {
//       return this.number + "," + this.category.toUpperCase();
//     };
//   }
//   function Passenger(person, seat) {
//     this.person = person;
//     this.seat = seat;
//     this.getData = function () {
//       return this.seat.getData() + ", " + this.person.getData();
//     };
//   }

//   function Flight(relation, date, passenger) {
//     this.relation = relation;
//     this.date = date;
//     this.passenger = passenger;
//     //  let passengers = [];
//     this.addPassenger = function () {
//       let passengers = [];
//       passengers.push(this.passenger);
//       // return JSON.stringify(passengers);
//       // return passengers.toString();
//       // return this.passengers.forEach((element) => {});
//     };
//     this.getData = function () {
//       return `${this.relation} ${this.date} ${this.addPassenger()}`;
//     };
//   }

//   function Airport(name = "Nikola Tesla", flight) {
//     this.name = name;
//     this.flight = flight;
//     this.flights = [];
//     this.addFlight = function () {
//       return this.flights.push(this.flight);
//     };
//     this.getData = function () {
//       return `${this.name} ${this.addFlight()}`;
//     };
//   }

//   let person = new Person("John", "Snow");
//   let seat = new Seat(12, "B");

//   let passenger = new Passenger(person, seat);
//   let flight = new Flight("Nis - Beograd", "25.10.2023", passenger);
//   flight.addPassenger();
//   let airport = new Airport(flight);
//   // console.log(person.getData());
//   // console.log(passenger.seat);

//   console.log(flight.getData());
// })();

// ----------------------------------------------------------------------------------------

(function () {
  console.log("hello");

  // Person

  function Person(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  Person.prototype.getData = function () {
    return `${this.name} ${this.surname}`;
  };

  // Seat

  function Seat(number, category = "E") {
    this.number = number || Math.floor(Math.random() * 91) + 10;
    this.category = category;
  }
  Seat.prototype.getData = function () {
    return `${this.number} ${this.category.toUpperCase()}`;
  };

  // Passenger

  function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;
  }
  Passenger.prototype.getData = function () {
    return `\t${this.person.getData()} ${this.seat.getData()}`;
  };

  // Flight

  function Flight(date, relation) {
    this.relation = relation;
    this.date = date;
    this.passengers = [];
  }

  Flight.prototype.addPassenger = function (passenger) {
    this.passengers.push(passenger);
  };
  Flight.prototype.getData = function () {
    let passengersData = "";
    this.passengers.forEach((passenger) => {
      passengersData += `\n ${passenger.getData()}`;
    });
    return `${this.date} ${this.relation} ${passengersData}`;
  };

  // Airport

  function Airport(name = "Nikola Tesla") {
    this.name = name;
    this.flights = [];
  }
  Airport.prototype.addFlight = function (flight) {
    this.flights.push(flight);
  };
  Airport.prototype.getData = function () {
    let flightData = "";
    this.flights.forEach((flight) => {
      flightData += `${flight.getData()}`;
    });
    return `${this.name} \n${flightData}`;
  };

  // Create Flight

  function CreateFlight(relation, date) {
    this.relation = relation;
    this.date = date;
    return `${this.relation} ${this.date}`;
  }

  const person = new Person("John", "Snow");
  const seat = new Seat("", "b");
  const passenger = new Passenger(person, seat);
  const flight = new Flight("25 Oct 2023", "Belgrade - Nis");
  const airport = new Airport();
  const createFlight = new CreateFlight();
  flight.addPassenger(passenger);
  airport.addFlight(flight);

  console.log(createFlight);
})();

// --------------------------------------------------------------------------------------------

// (function () {
//   function Person(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   Person.prototype.getData = function () {
//     return `${this.name} ${this.surname}`;
//   };

//   function Seat(number, category = "e") {
//     this.number = number || Math.floor(Math.random() * (100 - 10 + 1) + 10);
//     this.category = category;
//   }

//   Seat.prototype.getData = function () {
//     return `${this.number}, ${this.category.toUpperCase()}`;
//   };

//   function Passenger(person, seat) {
//     this.person = person;
//     this.seat = seat;
//   }

//   Passenger.prototype.getData = function () {
//     return `${this.seat.getData()}, ${this.person.getData()}`;
//   };

//   function Flight(relation, date) {
//     this.relation = relation;
//     this.date = new Date(date);
//     this.passengers = [];
//   }

//   Flight.prototype.addPassenger = function (passenger) {
//     this.passengers.push(passenger);
//   };

//   Flight.prototype.getData = function () {
//     let passengersData = "";
//     this.passengers.forEach((passenger) => {
//       passengersData += `\n ${passenger.getData()}`;
//     });
//     return `${this.date.toLocaleDateString()}, ${
//       this.relation
//     }\n${passengersData}`;
//   };

//   function Airport(name = "Nikola Tesla") {
//     this.name = name;
//     this.flights = [];
//   }

//   Airport.prototype.addFlight = function (flight) {
//     this.flights.push(flight);
//   };

//   Airport.prototype.getData = function () {
//     let flightsData = "";
//     let totalPassengers = 0;
//     this.flights.forEach((flight) => {
//       flightsData += `\n ${flight.getData()}`;
//       totalPassengers += flight.passengers.length;
//     });
//     return `Airport: ${this.name}, total passengers: ${totalPassengers}\n${flightsData}`;
//   };

//   function createFlight(relation, date) {
//     return new Flight(relation, date);
//   }

//   function createPassenger(firstName, lastName, seatNumber, category) {
//     const person = new Person(firstName, lastName);
//     const seat = new Seat(seatNumber, category);
//     return new Passenger(person, seat);
//   }

//   const airport = new Airport();
//   const flight1 = createFlight("Belgrade - New York", "Oct 25 2017");
//   const flight2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");
//   const passenger1 = createPassenger("John", "Snow", 1, "b");
//   const passenger2 = createPassenger("Cersei", "Lannister", 2, "b");
//   const passenger3 = createPassenger("Daenerys", "Targaryen", 14);

//   console.log(flight1);
// })();
