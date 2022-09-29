import { getInteriors, setInteriors } from "./database.js";

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        const itemClicked = event.target
        if (itemClicked.id === "interiors") {
            setInteriors(parseInt(event.target.value))
        }
    }
)

export const Interiors = () => {
    let html = '<select id="interiors"><option value="0">Select Interiors...</option>'

    //loops through interiors array of objects
    const listItemsArray = interiors.map(interior => {
        return `<option value="${interior.id}">${interior.type}</option>`
    })
    
    

    html += listItemsArray.join("")

    html += '</select>'
    return html
}