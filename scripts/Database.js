const database = {
    paints: [
        { id: 1, type: "Silver", price: 205 },
        { id: 2, type: "Midnight Blue", price: 300 },
        { id: 3, type: "Firebrick Red", price: 245 },
        { id: 4, type: "Spring Green", price: 225 }
    ],
    interiors: [
        { id: 1, type: "Beige Fabric", price: 450 },
        { id: 2, type: "Charcoal Fabric", price: 320 },
        { id: 3, type: "White Leather", price: 642 },
        { id: 4, type: "Black Leather", price: 760 }
    ],
    techs: [
        { id: 1, type: "Basic", price: 150 },
        { id: 2, type: "Navigation", price: 346 },
        { id: 3, type: "Visibility", price: 900 },
        { id: 4, type: "Ultra", price: 1226 }
    ],
    wheels: [
        { id: 1, type: "17-inch Pair Radial", price: 400 },
        { id: 2, type: "17-inch Pair Radial Black", price: 445 },
        { id: 3, type: "18-inch Pair Spoke Silver", price: 635 },
        { id: 4, type: "18-inch Pair Spoke Black", price: 723 },
    ],
    customOrders: [
        {
            id: 1,
            paintsId: 3,
            interiorsId: 2,
            techsId: 1,
            wheelsId: 3,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: {}
}
//replicants of the database
export const getPaints = () => {
    return database.paints.map(paint => ({ ...paint }))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({ ...interior }))
}

export const getTechs = () => {
    return database.techs.map(tech => ({ ...tech }))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({ ...wheel }))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({ ...order }))
}

export const setPaints = (id) => {
    database.orderBuilder.paintsId = id
    console.log(database.orderBuilder)
}
// sets id for currently being made order 
export const setInteriors = (id) => {
    database.orderBuilder.interiorsId = id
    console.log(database.orderBuilder)
}

export const setTechs = (id) => {
    database.orderBuilder.techsId = id
    console.log(database.orderBuilder)
}

export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
    console.log(database.orderBuilder)
}

export const addCustomOrder = () => {

    console.log(database.orderBuilder)
    const newOrder = {...database.orderBuilder}

    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    newOrder.timestamp = Date.now()

    database.customOrders.push(newOrder)

     database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}

//document.dispatchEvent(new CustomEvent("stateChanged"))

// document.addEventListener(
//     "click",
//     (event) => {
//         const itemClicked = event.target
//         if (itemClicked.id === "orderButton"){
//             addCustomOrder()
//         }
//     }
// )