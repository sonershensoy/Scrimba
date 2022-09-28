/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let btn = document.querySelector(".btn")

btn.addEventListener("click", function() {
    let num = document.querySelector(".number").value
    let feet = document.querySelector(".length")
    let volume = document.querySelector(".volume")
    let mass= document.querySelector(".mass")
    let distance = document.querySelector(".distance")
    let feetNum = num * 3.281
    let meterNum = num / 3.281
    let gallonNum = num * 0.264
    let literNum = num / 0.264
    let poundNum = num * 2.204
    let kiloNum = num / 2.204
    let kmNum= num * 1.609
    let mileNum = num / 1.609
    feet.innerHTML =  `${num} meters = ${feetNum.toFixed(3)} feet
    | ${num} feet = ${meterNum.toFixed(3)} meters`
    volume.innerHTML =  `${num} liters = ${gallonNum.toFixed(3)} gallons
    | ${num} gallons = ${literNum.toFixed(3)} liters`
    mass.innerHTML =  `${num} kilograms = ${poundNum.toFixed(3)} pounds
    | ${num} pounds = ${kiloNum.toFixed(3)} kilograms` 
    distance.innerHTML =  `${num} kilometers = ${mileNum.toFixed(3)} miles
    | ${num} miles = ${kmNum.toFixed(3)} kilometers` 
    return feetNum
    
    
})
