const express = require("express");
const app = express();

function Animal (spices, habitation, feed, legs) {
    this.spices = spices
    this.habitation = habitation
    this.feed = feed
    this.legs = legs
}

const anis = new Animal ("Reptile", "water", "planter-eaters", " fruits and vegetables", "4 legs");
const anis1 = new Animal ("Mammnal", "Land", "different foods", " 2legs");
const anis2 = new Animal ("Aves", "nest", "dead animals","2legs");
const anis3 = new Animal ("Pisces", "water", "smaller fish", "fins");

console.log(anis, anis1, anis2, anis3)



function Car (model, type, brand, color, auto) {
    this.model = model
    this.type = type
    this.brand = brand
    this.color = color
    this.auto =  auto
}

const car1 = new Car ("Toyota Highlander", "SUV", "2020", "red", "Automatic");
const car2 = new Car("Honda CRV", "SUV", "2024", "white", "Automatic");
const car3 = new Car("Geery GLX", "SUV", "2025", "black", "automatic");
const car4 = new Car("RangeRover", "SUV", "2021", "Silver", "Automatic");

console.log(car1, car2, car3, car4)


function Student (school, faculty, dept, level, grades){
    this.school = school
    this.faculty = faculty
    this.dept = dept
    this.level = level
    this.grades = grades
}

const stud1 = new Student ("Softzneith", "Software Engineering", "Backend Development", "Intermediate", "22:1");
const stud2 = new Student ("Unilag", "Science", "ComputerScience", "Final year", "4.7");
const stud3 = new Student ("Nsukka", "Art", "Law", "300 L", "4.9");
const stud4 = new Student ("LASU", "Engineering", "Electrical Electronic Engineering", "200L", "3.5");

console.log(stud1, stud2, stud3, stud4)


function serverSucess(){
    console.log("Server is running successfully")
    }
    
    app.listen(4000, serverSucess);