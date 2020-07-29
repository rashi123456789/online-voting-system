export const findParty =(party,id)=>{
    return party.find(party=>party._id===id)
}