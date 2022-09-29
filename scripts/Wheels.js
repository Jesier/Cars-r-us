import { getWheels, setWheels } from "./database.js";

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheels") {
            setWheels(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    let html = '<select id="wheels"><option value="0">Select wheels...</option>'

    const listItemsArray = wheels.map(wheel => {
        return `<option value="${wheel.id}">${wheel.type}</option>`
    })
    
    

    html += listItemsArray.join("")

    html += '</select>'
    return html

}   