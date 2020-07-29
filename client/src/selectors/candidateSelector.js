export const findCandidate =(candidate,id)=>{
    return candidate.find(candidate=>candidate._id===id)
}