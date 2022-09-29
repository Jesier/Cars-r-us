import { getOrders, getPaints, getInteriors, getTechs, getWheels } from "./database.js";

const buildOrderListItem = (order) => {
    const paints = getPaints()
    const interiors = getInteriors()
    const techs = getTechs()
    const wheels = getWheels()

    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintsId
        })
    let totalCost = foundPaint.price
    ///////////////////////////////////////////
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorsId
        })
    totalCost += foundInterior.price
    //////////////////////////////////////////
    const foundTech = techs.find(
        (tech) => {
            return tech.id === order.techsId
        })
    totalCost += foundTech.price
    //////////////////////////////////////////
    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelsId
        })
    totalCost += foundWheels.price
    
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
    Order #${order.id} costs ${costString} was placed on ${order.timestamp}
</li>`
}

export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}