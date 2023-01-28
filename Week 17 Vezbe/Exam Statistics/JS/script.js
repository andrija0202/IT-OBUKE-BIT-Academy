"use strict";
// Subject JS

class Subject {
  constructor(subject) {
    this.subject = subject;
  }
  getSubjectName() {
    return this.subject;
  }
}

let subject = new Subject("JavaScript");

// Studen JS

class Student {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getStudentData() {
    return [this.name, this.surname];
  }
}

let student = new Student("Mika", "Arsic");

// console.log(student.getStudentData());

// Exam JS

class Exam {
  constructor(subject, student, grade) {
    this.subject1 = subject;
    this.student1 = student;
    this.grade = grade;
  }
  getExamInfo() {
    // `${subject}${student}`
    return [subject, student];
  }
  hasPassed() {
    if (this.grade > 5) {
      return true;
    } else {
      return false;
    }
  }
}

let exam = new Exam(subject.getSubjectName(), student.getStudentData(), 10);

// console.log(JSON.stringify(exam.getExamInfo()));
// console.log(exam.getExamInfo());
// console.log(JSON.stringify(exam.hasPassed()));

// Form JS

let nameInputField = document.querySelector("#name-input");
let gradeInputField = document.querySelector("#grade-input");
let btn = document.querySelector(".add-btn");

let itemsPassed = document.querySelector("#items-passed");
let itemsFailed = document.querySelector("#items-failed");
let item = document.querySelector(".item");

let numPassed = document.querySelector(".num-passed");
let numFailed = document.querySelector(".num-failed");

let count = document.querySelector(".count");

let formFunc = function () {
  let li = document.createElement("li");
  let nameSpan = document.createElement("span");
  let gradeSpan = document.createElement("span");
  let gradeInput;

  if (gradeInputField.value >= 1 && gradeInputField.value <= 10) {
    gradeInput = gradeInputField.value;
  } else {
    gradeInput = "NAN";
  }

  let nameInput = nameInputField.value;

  if (gradeInput > 5 && gradeInput <= 10) {
    nameSpan.appendChild(document.createTextNode(nameInput));
    gradeSpan.appendChild(document.createTextNode(gradeInput));

    li.appendChild(nameSpan);
    li.appendChild(gradeSpan);
    li.classList.add("uspeh");
    itemsPassed.appendChild(li);
  } else {
    nameSpan.appendChild(document.createTextNode(nameInput));
    gradeSpan.appendChild(document.createTextNode(gradeInput));

    li.appendChild(nameSpan);
    li.appendChild(gradeSpan);
    li.classList.add("fail");
    itemsFailed.appendChild(li);
  }
  nameInputField.value = "";
  gradeInputField.value = "";
  statisticFunc(gradeInput);
};

let statisticFunc = function (gradeInput) {
  let numPassedNew = itemsPassed.querySelectorAll(".uspeh").length;
  let numFailedNew = itemsFailed.querySelectorAll(".fail").length;

  if (gradeInput > 5) {
    numPassed.textContent = numPassedNew;
  } else if (gradeInput < 5) {
    numFailed.textContent = numFailedNew;
  }
  let totalCount = Number(numFailedNew) + Number(numPassedNew);
  count.textContent = totalCount;
};

btn.addEventListener("click", statisticFunc);
btn.addEventListener("click", formFunc);
