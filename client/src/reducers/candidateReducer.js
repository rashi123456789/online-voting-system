const candidateInitialState=[]
const candidateReducer =(state=candidateInitialState,action)=>{
    switch(action.type){
        case 'SET_CANDIDATES':{
            return [...action.payload]
        }
        case "ADD_CANDIDATES": {
            return [...state, action.payload]
        }
        case 'EDIT_CANDIDATE': {
            return state.map(candidate => {
                if(candidate._id === action.payload._id){
                    return Object.assign({}, candidate, action.payload)
                }
                else{
                    return Object.assign({}, candidate)
                }
            })
        }
        case 'REMOVE_CANDIDATE': {
            return state.filter(candidate => {
                return candidate._id !== action.payload._id
            })
        }
        default:{
            return [...state]
        }
    }
}
export default candidateReducer