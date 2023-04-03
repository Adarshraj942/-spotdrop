import axios from "axios";
const API=axios.create({baseURL:"https://server.dropspot.in"})
//const API=axios.create({baseURL:"http://localhost:5000"})

export const createOrder=(data)=>API.post("/order/create",data)

export  const editOrder=(data)=>API.post("/order/edit",data)

export  const cancelOrder=(data)=>API.post("/order/cancel",data)


export  const allOrders=()=>API.get("/order/allOrder")