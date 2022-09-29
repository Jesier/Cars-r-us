import { getTechs, setTechs } from "./database.js";

const techs = getTechs()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "techs") {
            const chosenOption = event.target.value
            setTechs(parseInt(chosenOption))
        }
    }
)

export const Techs = () => {
    let html = '<select id="techs"><option value="0">Select technology...</option>'

    const listItemsArray = techs.map(tech => {
        return `<option id="${tech.id}"value="${tech.id}">${tech.type}</option>`
    })
    
    

    html += listItemsArray.join("")

    html += '</select>'
    return html
}