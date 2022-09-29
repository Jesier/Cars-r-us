import { Wheels } from "./Wheels.js"
import { Techs } from "./Techs.js"
import { Paints } from "./Paints.js"
import { Interiors } from "./interiors.js"
import { Orders } from "./Orders.js"
// import { addCustomOrder } from "./Database.js"
import {addCustomOrder} from "./Database.js"
document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target
        if (itemClicked.id === "orderButton"){
            addCustomOrder()
        }
    }
)

export const carsRUs = () => {
    return `
    <h1>Cars-R-Us</h1>

    <article class="choices">
     
    <section class="choices__paints options">
    <h3>Paint</h3>
    ${Paints()}
    </section>
    <section class="choices__paints options">
    <h3>Interiors</h3>
    ${Interiors()}
    </section>
    <section class="choices__wheels options">
        <h3>Wheels</h3>
        ${Wheels()}
        </section>
        <section class="choices__techs options">
        <h3>Technologies</h3>
        ${Techs()}
        </section>
    </article>

    <article>
        <button id="orderButton">Place Car Order</button>
    </article>

    <article class="customOrders">
    <h2>Custom Car Orders</h2>
    ${Orders()}
    </article>
`
}