//Write your Javascript code here
console.log("Shoppinglist")



// TASK 1
let myElement = document.getElementById("1")
console.log(myElement)
let myList = document.getElementsByTagName("li")
console.log(myList)

// TASK 2 & 3
myElement.setAttribute("class", "unhealthy")
// myElement.setAttribute("hidden","true")

for (let index = 0; index < myList.length; index++) {
    const element = myList[index];
    console.log(element)
    if (element.getAttribute("class") == "unhealthy") {
        element.setAttribute("class", "healthy")
    }
}

// TASK 4
// let firstChild = document.getElementById("list").firstElementChild
// firstChild.removeAttribute("class")
// let lastChild = document.getElementById("list").lastElementChild
// lastChild.removeAttribute("class")

// TASK 5
let newLiElement = document.createElement("li")
let newTextElement = document.createTextNode("Cola")
newLiElement.setAttribute("id", "5")
newLiElement.setAttribute("class", "unhealthy")
newLiElement.append(newTextElement)
document.getElementById("list").append(newLiElement)

// TASK 6
let list = document.getElementById("list")
list.insertBefore(newLiElement, list.children[2])
console.log(myList)

// TASK 7
let newUnhealthyLiElement = document.createElement("li")
newUnhealthyLiElement.setAttribute("id", "listUnhealthy")
for (let index = 0; index < myList.length; index++) {
    const element = myList[index];
    console.log(element)
    if (element.getAttribute("class") == "unhealthy") {
        document.getElementById("listUnhealthy").append(element)
    }
}
console.log(newUnhealthyLiElement)

// TASK 8
document.getElementById("0").textContent = "Banan"
document.getElementById("1").textContent = "Cashew nødder"
document.getElementById("2").textContent = "Øl"
document.getElementById("3").textContent = "Æbler"

// TASK 9
let slettet = document.getElementById(3)
slettet.remove()