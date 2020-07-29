export const findCastevote =(castvote,id)=>{
    return castvote.find(castvote=>castvote._id===id)
}