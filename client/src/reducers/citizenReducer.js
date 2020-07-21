const citizenInitialState=[]
const citizenReducer =(state=citizenInitialState,action)=>{
    switch(action.type){
        case 'SET_CITIZENS':{
            return [...action.payload]
        }
        case "ADD_CITIZENS": {
            return [...state, action.payload]
        }
        case 'EDIT_CITIZEN': {
            return state.map(citizen => {
                if(citizen._id === action.payload._id){
                    return Object.assign({}, citizen, action.payload)
                }
                else{
                    return Object.assign({}, citizen)
                }
            })
        }
        case 'REMOVE_CITIZEN': {
            return state.filter(citizen => {
                return citizen._id !== action.payload._id
            })
        }
        default:{
            return [...state]
        }
    }
}
export default citizenReducer