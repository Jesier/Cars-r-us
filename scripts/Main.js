import { carsRUs } from "./Cars-r-us.js";
import { addCustomOrder } from "./database.js";

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = carsRUs()
}

// document.addEventListener(
//     "click",
//     (event) => {
//         const itemClicked = event.target
//         if (itemClicked.id === "orderButton"){
//             addCustomOrder()
//         }
//     }
// )

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})