export const findCitizen =(citizen,id)=>{
    return citizen.find(citizen=>citizen._id===id)
}