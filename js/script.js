// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Joyce Nkengbeza
// Created on: Mar 2025
// This file contains the JS functions for index.html

'use strict'

function calculate() {
  // input
 const lengthAString = prompt("length-a")

const lengthBString = prompt("length-b")

const lengthCString = prompt("length-c")



const lengtha = parseFloat(lengthAString)

const lengthb = parseFloat(lengthBString)

const lengthc = parseFloat(lengthCString)



// using the cosine law

const angleA = Math.acos((lengthB**2 + lengthC**2 - lengthA**2) / (2 * lengthB * lengthC)) * (180/Math.PI)

const angleB = Math.acos((lengthC**2 + lengthA**2 - lengthB**2) / (2 * lengthC * lengthA)) * (180/Math.PI)

const angleC = Math.acos((lengthA**2 + lengthB**2 - lengthC**2) / (2 * lengthA * lengthB)) * (180/Math.PI)



const sumOfAngles = Number((angleA).toFixed(2)) + Number((angleB).toFixed(2)) + Number((angleC).toFixed(2))



console.log(angleA)

console.log(angleB)

console.log(angleC)

console.log(sumOfAngles)



  const lengthA = document.getElementById("length-a").value;
  const lengthB= document.getElementById("length-b").value;
  const lengthC = document.getElementById("lengtb-c").value;

  // process
    if (sumOfAngle == 180) {
      if (lengthA == lengthB == lengthC) {
    // output 
    document.getElementById("results").innerHTML =
      "<p>Type:Equilateral</p>";
  }
    // process
  else if (sumOfAngle == 180){
  (lengthA == lengthB !== lengthC)
  //output
  document.getElementById("results").innerHTML = 
  "<p>Type:Isosceles</p>";
  }
  //process
  else if (sumOfAngle == 180){
  (lengthA !== lengthB !== lengthC)
  
  //output 
  document.getElementById("results").innerHTML =
      "<p>Type:Scalene</p>";
  }
  }
  //output
  else{
    document.getElementById("results").innerHTML =
      "<p>This is not a triangle!!!</p>";
  }
}
