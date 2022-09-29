import { getPaints, setPaints } from "./database.js";

const paints = getPaints()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paints") {
            setPaints(parseInt(event.target.value))
        }
    }
)

export const Paints = () => {
    let html = '<select id="paints"><option value="0">Select paint...</option>'

    const listItemsArray = paints.map(paint => {
        return `<option value="${paint.id}">${paint.type}</option>`
    })
    
    

    html += listItemsArray.join("")

    html += '</select>'
    return html
}